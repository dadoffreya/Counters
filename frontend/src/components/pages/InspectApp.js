import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import jwt_decode from "jwt-decode";
import Navbar from '../Navbar';
// import Clock from 'react-live-clock';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
// import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

const InspectApp = () => {
    document.body.style.backgroundColor = "#fff";
    const navigate = useNavigate();
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [linenumber, setLineNumber] = useState('');
    const [showissues, setIssues] = useState([]);
    const [gradea, setGradea] = useState(null);
    const [gradeb, setGradeb] = useState(null);

    const rftRate = gradea / (gradea + gradeb) * 100;
    const rftRatemath = Math.round(rftRate);  
    const totalInspected = gradea + gradeb;
    const okstatus = "Passed";
    const okcode = "OK";
    const qty = 1;
    const current = new Date();
    const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;
    const tanggal = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;

    useEffect(() => {
        refreshToken();
        getIssues();
        getGradeA();
        getGradeB();
        // eslint-disable-next-line
      }, [gradea, gradeb, rftRatemath, rftRate]);

    // REFRESH TOKEN FUNCTION
    const refreshToken = async () => {
        try {
            const response = await axios.get('http://192.168.2.222:5000/token', { withCredentials: true });
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setLineNumber(decoded.line);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                navigate("../");
                console.log(error);
            }
        }
    }

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://192.168.2.222:5000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setLineNumber(decoded.line);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    // POST OK VALUE
    const addOK = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://192.168.2.222:5000/passes",{
                "line": linenumber,
                "flagstat": okstatus,
                "code": okcode,
                "qty": qty,
                "tanggal": tanggal
            });
            getGradeA();
        } catch (error) {
            console.log(error);
        }
    };

    // POST DEFECT VALUES
    const addDefect = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://192.168.2.222:5000/passes",{
                "line": linenumber,
                "flagstat": "Defect",
                "code": event.currentTarget.value,
                "qty": qty,
                "tanggal": tanggal
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            getGradeB();
        } catch (error) {
            console.log(error);
        }
    };

    // GET MASTER ISSUE
    const getIssues = async () => {
        const response = await axios.get("http://192.168.2.222:5000/rft/issues");
        setIssues(response.data);
    };

    // GET COUNT GRADE OK
    const getGradeA = async () => {
        const param = {
            line: linenumber,
            flagstat: 'Passed',
            tanggal: tanggal
        };
        const queryOK = Object.keys(param).map(key => key + '=' + param[key]).join('&');
        const response = await axios.get(`http://192.168.2.222:5000/rft/countok?${queryOK}`);
        setGradea(response.data);
    };

    // GET COUNT DEFECT
    const getGradeB = async () => {
        const paramdefect = {
            line: linenumber,
            flagstat: 'Defect',
            tanggal: tanggal
        };
        const queryDefect = Object.keys(paramdefect).map(key => key + '=' + paramdefect[key]).join('&');
        const response = await axios.get(`http://192.168.2.222:5000/rft/countdef?${queryDefect}`);
        setGradeb(response.data);
    };

        
  return (
    <div>
        <Navbar />
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            wrap= 'false'
        >
            <Card
                sx={{
                    width: '25vw', mr: .5, mt: .5,
                    height: '86vh',
                    background: '#9442FE',
                    borderRadius: 3
                }}
            >
                <Grid 
                    container 
                    spacing={0}
                    direction='column'
                    justify='center'
                    alignItems='center'
                    sx={{mt: 2}}
                >

                    {/* Line Number Information  */}
                    <Card 
                        sx={{
                            p: 1, 
                            mb: 0,
                            textColor: "#FFF",
                            background: 'rgba( 255, 255, 255, 0.3 )',
                            boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                            backdropFilter: "blur(1.5px)",
                            border: '1px solid rgba( 255, 255, 255, 0.18 )',
                            borderRadius: 3,
                        }}
                    >
                        <Box
                            sx={{
                                width: '21vw',
                            }}
                        >
                            <Grid 
                                container
                                spacing={0}
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                wrap="wrap"
                                sx={{ p: 0.5 }}
                            >
                                <Typography
                                    variant="h5" 
                                    color="#FFFFFF"
                                    sx={{
                                        fontFamily: 'monospace',
                                        fontWeight: 700
                                    }}
                                
                                >
                                    Line Number:
                                </Typography>
                                <Typography
                                    variant="h4" 
                                    color="#FFFFFF"
                                    sx={{
                                        fontFamily: 'monospace',
                                        fontWeight: 700
                                    }}
                                
                                >
                                    {linenumber}
                                </Typography>
                            </Grid>
                        </Box>
                    </Card>                  

                    {/* Grade Count Box */}
                    <Card 
                        sx={{
                            p: 1,
                            mt: 0.5,
                            mb: 0.5, 
                            textColor: "#FFF",
                            background: 'rgba( 255, 255, 255, 0.3 )',
                            boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                            backdropFilter: "blur(1.5px)",
                            border: '1px solid rgba( 255, 255, 255, 0.18 )',
                            borderRadius: 3,
                            }}
                    >
                        <Grid
                            container
                            spacing={0}
                            direction="row"
                            justify="center"
                            alignItems="center"
                            wrap="true"
                        >
                            <Box
                                sx={{
                                    mx: 0.5,
                                    width: '10vw',
                                    height: '100px',
                                    borderRadius: 3,
                                    backgroundColor: '#4caf50',
                                    '&:hover': {
                                        backgroundColor: 'blue',
                                        opacity: [0.5, 0.8, 0.7]}
                                }}
                                wrap='true'
                                onClick={addOK}
                            >
                                <Grid
                                    container
                                    spacing={0}
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    wrap="true"
                                    sx={{
                                    p: 0.5
                                    }}
                                >
                                    <Typography 
                                        variant="h6" 
                                        color="white"
                                        sx={{
                                            fontFamily: 'monospace',
                                            fontWeight: 700
                                        }}
                                    >
                                        Grade A
                                    </Typography>
                                    <Typography 
                                        variant="h4" 
                                        color="white"
                                        sx={{
                                            fontFamily: 'monospace',
                                            fontWeight: 700
                                        }}
                                    >
                                        {gradea}
                                    </Typography>
                                </Grid>
                            </Box>
                            <Box
                                sx={{
                                    mx: 0.5,
                                    width: '10vw',
                                    height: '100px',
                                    borderRadius: 3,
                                    backgroundColor: '#f44336'
                                }}
                            >
                                <Grid
                                    container
                                    spacing={0}
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    wrap="true"
                                    sx={{
                                    p: 0.5
                                    }}
                                >
                                    <Typography 
                                        variant="h6" 
                                        color="white"
                                        sx={{
                                            fontFamily: 'monospace',
                                            fontWeight: 700
                                        }}
                                    >
                                        Defect
                                    </Typography>
                                    <Typography 
                                        variant="h4" 
                                        color="white"
                                        sx={{
                                            fontFamily: 'monospace',
                                            fontWeight: 700
                                        }}
                                    >
                                        {gradeb}
                                    </Typography>
                                </Grid>
                            </Box>
                        </Grid>
                    </Card>

                    {/* RFT Box */}
                    <Card 
                        sx={{
                            p: 1, 
                            textColor: "#FFF",
                            background: 'rgba( 255, 255, 255, 0.3 )',
                            boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                            backdropFilter: "blur(1.5px)",
                            border: '1px solid rgba( 255, 255, 255, 0.18 )',
                            borderRadius: 3,
                        }}
                    >
                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Box
                                sx={{
                                    width: '21vw',
                                    height: '43vh'
                                }}
                            >
                                <Grid
                                    container
                                    spacing={0}
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    wrap="wrap"
                                    sx={{
                                        p: 0.5
                                    }}
                                >
                                    <Typography
                                    variant="h4" 
                                    color="#FFFFFF"
                                    sx={{
                                        my: 1,
                                        fontFamily: 'monospace',
                                        fontWeight: 700
                                    }}
                                
                                    >
                                        {date} 
                                    </Typography>
                                    <Typography
                                    variant="h5" 
                                    color="#FFFFFF"
                                    sx={{
                                        my: -1,
                                        fontFamily: 'monospace',
                                        fontWeight: 700
                                    }}
                                
                                    >
                                        Inspected: 
                                    </Typography>
                                    <Typography
                                        variant="h2" 
                                        color="#FFFFFF"
                                        sx={{
                                            my: -1,
                                            fontFamily: 'monospace',
                                            fontWeight: 700
                                        }}
                                    
                                    >
                                        {totalInspected} 
                                    </Typography>
                                    <Typography 
                                        variant="h3" 
                                        color="#FFFFFF"
                                        sx={{
                                            my: -1,
                                            fontFamily: 'monospace',
                                            fontWeight: 700
                                        }}
                                    >
                                        RFT Rate
                                    </Typography>
                                    <Typography 
                                        variant="h1" 
                                        color="#FFFFFF"
                                        sx={{
                                            my: -1,
                                            fontFamily: 'monospace',
                                            fontWeight: 700
                                        }}
                                    >
                                        {rftRatemath}%
                                    </Typography>
                                </Grid>
                            </Box>
                        </Grid>
                    </Card>
                </Grid>
            </Card>

            {/* CONTENTS BOX */}
            <Card
                sx={{
                    width: '75vw', mr: .5, mt: .5,
                    height: '86vh',
                    background: 'linear-gradient(to right, #9442FE, #3378FF)',
                    borderRadius: 3
                }}
            >
                <Grid
                  container
                  spacing={0}
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  wrap="true"
                  
                >   
                

                    {/* BOTTOM CONTENTS */}
                        <Grid
                          container
                          spacing={0}
                          direction="row"
                          justifyContent="space-evenly"
                          alignContent='space-evenly'
                          alignItems="space-evenly"
                          wrap="wrap"
                          sx={{ml: 0.5, mt: 2}}
                        >
                            {/* DEFECT BUTTONS */}
                            <Grid item>
                                {showissues.map((opsi) => (
                                    <Button 
                                        variant="contained" 
                                        key={opsi.id} 
                                        value={opsi.code}
                                        onClick={addDefect}
                                        sx={{
                                                m: 0.25,
                                                width: '15rem',
                                                height: '3.5rem',
                                                borderRadius: 3,
                                                background: "#ffc400"
                                            }}
                                        wrap="true"
                                    >
                                        <Grid
                                          container
                                          spacing={0}
                                          direction="row"
                                          justifyContent="flex-start"
                                          alignItems="center"
                                          alignContent="center"
                                          wrap="true"
                                          sx={{
                                               mt: '0.1rem'
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: '2.5rem',
                                                    height: '2.5rem',
                                                    mr: 1,
                                                    background: '#fffeee',
                                                    borderRadius: 2,
                                                }}
                                            >
                                                <Grid
                                                  container
                                                  spacing={0}
                                                  direction="row"
                                                  justifyContent="center"
                                                  alignItems="center"
                                                  alignContent="center"
                                                  wrap="false"
                                                  sx={{p: 0.5}}
                                                  
                                                >
                                                    <Grid item>
                                                        <Typography variant="h5" color="initial">
                                                            {opsi.id}
                                                        </Typography>

                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <Divider orientation="vertical" variant="middle" flexItem sx={{mr: 1}} />
                                            <Typography variant="caption" color="#000" sx={{fontWeight: 600}} >
                                                {opsi.label}
                                            </Typography>
                                        </Grid>
                                    </Button>
                                ))}
                            </Grid>
                        </Grid>
                    {/* </Card> */}
                </Grid>
            </Card>
        </Grid>
    </div>
  )
}

export default InspectApp;  