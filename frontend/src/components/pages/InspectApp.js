import React, { useState } from 'react';
import Navbar from '../Navbar';
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
        label: 'Issue 1'
    },
    {
        nomor: '2',
        label: 'Issue 2'
    },
    {
        nomor: '3',
        label: 'Issue 3'
    },
];

const InspectApp = () => {
    const [counttotalgradea, setTotalGradeA] = useState(0);
    const [counttotalgradeb, setTotalGradeB] = useState(0);
    const rftRate = counttotalgradea / (counttotalgradea + counttotalgradeb) * 100;
    const rftRatemath = Math.round(rftRate);

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
                    wrap='wrap'
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
                            value='Value'
                        //   onChange={}
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
                                    variant="h3" 
                                    color="#FFFFFF"
                                    sx={{
                                        fontFamily: 'monospace',
                                        fontWeight: 700
                                    }}
                                >
                                    {rftRatemath} %
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
                                />
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
                                        onClick={() => setTotalGradeA(counttotalgradea + 1)}
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
                                {tombol.map((opsi) => (
                                    <Button 
                                        variant="contained" 
                                        key={opsi.nomor} 
                                        onClick={() => setTotalGradeB(counttotalgradeb + 1)}
                                        sx={{
                                                m: 1,
                                                width: '15rem',
                                                height: '4rem',
                                                borderRadius: 3,
                                                background: "#ffc400"
                                            }}
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
                                                            {opsi.nomor}
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