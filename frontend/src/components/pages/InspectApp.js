import React, { useState, useEffect } from 'react';
import axios from "axios";
import Navbar from '../Navbar';
import Clock from 'react-live-clock';
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

const tombol = [
    {
        nomor: '1',
        status: 'Defect',
        label: 'Issue 1'
    },
    {
        nomor: '2',
        status: 'Defect',
        label: 'Issue 2'
    },
    {
        nomor: '3',
        status: 'Defect',
        label: 'Issue 3'
    },
];

const InspectApp = () => {
    const [counttotalgradea, setTotalGradeA] = useState(0);
    const [counttotalgradeb, setTotalGradeB] = useState(0);
    const rftRate = counttotalgradea / (counttotalgradea + counttotalgradeb) * 100;
    const rftRatemath = Math.round(rftRate);
    const [linenumber, setLineNumber] = useState("Line 1");
    const [defectcode, setDefectCode] = useState("");
    const [showissues, setIssues] = useState([]);

    useEffect(() => {
        getIssues();
      }, []);

    // POST OK VALUE
    const lineHandler = (event) => {
        setLineNumber(event.target.value);
      };
    const codeHandler = (event) => {
        setDefectCode(event.target.value);
      };
    const okstatus = "Passed";
    const okcode = "OK";
    const qty = 1;
    const addOK = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/passes",{
                "line": linenumber,
                "status": okstatus,
                "code": okcode,
                "qty": qty
            });
        } catch (error) {
            console.log(error);
        }
    };

    const addDefect = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:5000/passes",{
                "line": linenumber,
                "status": "Defect",
                "code": event.currentTarget.value,
                "qty": qty
            });
            console.log(showissues);
        } catch (error) {
            console.log(error);
        }
    };

    const getIssues = async () => {
        const response = await axios.get("http://localhost:5000/rft/issues");
        setIssues(response.data);
    };
    

  return (
    <div>
        <Navbar />
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            wrap="nowrap"
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

                    {/* Line number input box   */}
                    <Card 
                        sx={{
                            p: 1, 
                            mb: 0.5,
                            textColor: "#FFF",
                            background: 'rgba( 255, 255, 255, 0.3 )',
                            boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                            backdropFilter: "blur(1.5px)",
                            border: '1px solid rgba( 255, 255, 255, 0.18 )',
                            borderRadius: 3,
                        }}
                    >
                        <TextField
                            id="outline-basic"
                            label="Line Number"
                            value={linenumber}
                            onChange={lineHandler}
                            variant="standard"
                            size='small'
                            wrap
                            sx={{
                            width: '22vw', 
                            fontColor: "#FFF",
                            input: { 
                                color: 'white',
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                },
                            label: { 
                                color: 'white',
                                fontFamily: 'monospace',
                                fontWeight: 500,
                                }
                            }}
                        />
                    </Card>

                    {/* Style input box */}
                    <Card 
                        sx={{
                            p: 1, 
                            mb: 0.5,
                            textColor: "#FFF",
                            background: 'rgba( 255, 255, 255, 0.3 )',
                            boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                            backdropFilter: "blur(1.5px)",
                            border: '1px solid rgba( 255, 255, 255, 0.18 )',
                            borderRadius: 3,
                        }}
                    >
                        <TextField
                            id="outline-basic"
                            label="Style"
                            value='Footwear Style A Colour A'
                        //   onChange={}
                            variant="standard"
                            size='small'
                            sx={{
                            width: '22vw', 
                            fontColor: "#FFF",
                            input: { 
                                color: 'white',
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                },
                            label: { 
                                color: 'white',
                                fontFamily: 'monospace',
                                fontWeight: 500,
                                }
                            }}
                        />
                    </Card>

                    {/* Grade Count Box */}
                    <Card 
                        sx={{
                            p: 1,
                            mt: 2,
                            mb: 2, 
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
                            wrap="wrap"
                        >
                            <Box
                                sx={{
                                    mx: 0.5,
                                    width: '10vw',
                                    height: '100px',
                                    borderRadius: 3,
                                    backgroundColor: '#4caf50'
                                }}
                                wrap='wrap'
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
                                        variant="h6" 
                                        color="white"
                                        sx={{
                                            fontFamily: 'monospace',
                                            fontWeight: 700
                                        }}
                                    >
                                        A Grade
                                    </Typography>
                                    <Typography 
                                        variant="h4" 
                                        color="white"
                                        sx={{
                                            fontFamily: 'monospace',
                                            fontWeight: 700
                                        }}
                                    >
                                        {counttotalgradea}
                                        {defectcode}
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
                                    wrap="wrap"
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
                                        B Grade
                                    </Typography>
                                    <Typography 
                                        variant="h4" 
                                        color="white"
                                        sx={{
                                            fontFamily: 'monospace',
                                            fontWeight: 700
                                        }}
                                    >
                                        {counttotalgradeb}
                                    </Typography>
                                </Grid>
                            </Box>
                        </Grid>
                    </Card>

                    {/* RFT Box */}
                    <Card 
                        sx={{
                            p: 1, 
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
                            justifyContent="center"
                            alignItems="center"
                            wrap="wrap"
                        >
                            <Box
                            sx={{
                                width: '21vw',
                                height: '30vh'
                            }}
                            >
                            <Grid
                                container
                                spacing={0}
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                wrap="wrap"
                                sx={{
                                    p: 0.5
                                }}
                            >
                                <Typography 
                                    variant="h3" 
                                    color="#FFFFFF"
                                    sx={{
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
                  wrap="wrap"
                  
                >   
                {/* TOP CONTENTS */}
                    <Card
                        sx={{
                            width: '98%',
                            height: '12vh',
                            my: 1,
                            ml: 1.25,
                            background: 'rgba( 255, 255, 255, 0.3 )',
                            boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                            backdropFilter: "blur(1.5px)",
                            border: '1px solid rgba( 255, 255, 255, 0.18 )',
                            borderRadius: 3,
                        }}
                    >
                        <Grid
                          container
                          spacing={1}
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                          wrap="nowrap"
                          sx={{
                            py: 0.5,
                            px: 1
                          }}
                          
                        >
                            <Grid item>
                                <Box
                                    sx={{
                                        width: '58vw',
                                        height: '10.5vh',
                                        background: 'transparent',
                                        border: 1,
                                        borderRadius: 3,
                                    }}
                                >
                                    <Grid
                                      container
                                      spacing={0}
                                      direction="row"
                                      justifyContent="flex-start"
                                      alignItems="center"
                                      alignContent="center"
                                      wrap="nowrap"
                                      sx={{
                                        mt: 1.25,
                                        ml: 1
                                      }}
                                      
                                    >
                                        <Typography 
                                            variant="h4" 
                                            color="#FFF"
                                            sx={{
                                                fontFamily: 'monospace',
                                                fontWeight: 700,
                                            }}
                                        >
                                            <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Jakarta'} />
                                        </Typography>
                                    </Grid>
                                </Box>
                            </Grid>   

                            {/* OK BUTTON */}
                            <Grid item>
                                <Box
                                    sx={{
                                        width: '10vw',
                                        height: '10.5vh',
                                        background: 'transparent',
                                        borderRadius: 3,
                                    }}
                                >
                                    <Button 
                                        variant="contained"
                                        onClick={addOK}
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: 1,
                                            background: '#4caf50',
                                            boxShadow: '20px 20px 60px #2b66d9, -20px -20px 60px #3b8aff',
                                        }}
                                    >
                                        <Grid
                                          container
                                          spacing={0}
                                          direction="row"
                                          justifyContent="center"
                                          alignItems="center"
                                          alignContent="center"
                                          wrap="nowrap"
                                          
                                        >
                                            <CheckRoundedIcon style={{fontSize: 80}} />  
                                        </Grid>
                                    </Button>
                                
                                </Box>
                            </Grid>                                                        
                        </Grid>
                    </Card>

                    {/* BOTTOM CONTENTS */}
                    <Card
                        sx={{
                            width: '98%',
                            height: '70vh',
                            ml: 1.25,
                            mb: 2,
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
                          justifyContent="center"
                          alignContent='center'
                          alignItems="center"
                          wrap="wrap"
                          sx={{m: '2%'}}
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
                                                m: 1,
                                                width: '22rem',
                                                height: '4rem',
                                                borderRadius: 3,
                                                background: "#ffc400"
                                            }}
                                        wrap="wrap"
                                    >
                                        <Grid
                                          container
                                          spacing={0}
                                          direction="row"
                                          justifyContent="flex-start"
                                          alignItems="center"
                                          alignContent="center"
                                          wrap="wrap"
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
                                                  wrap="nowrap"
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
                                            <Typography variant="button" color="#000" sx={{fontWeight: 600}}>
                                                {opsi.label}
                                            </Typography>
                                        </Grid>
                                    </Button>
                                ))}
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Card>
        </Grid>
    </div>
  )
}

export default InspectApp;  