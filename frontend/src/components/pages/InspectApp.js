import React from 'react';
import Navbar from '../Navbar';
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

const InspectApp = () => {
  return (
    <div>
    <Navbar />
        <Grid
          container
          spacing={0}
          direction="row"
          justify="center"
          alignItems="center"
          wrap="nowrap"
        >
            <Card
                sx={{
                    width: '25vw', mr: .5, mt: .5,
                    height: '86vh',
                    background: '#3378FF',
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
                        backgroundColor: "rgba(0,0,0,0.1)", 
                        backdropFilter: "blur(10px)",
                        textColor: "#FFF",
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
                        input: { color: 'white' },
                        label: { color: 'white' }
                        }}
                    />
                  </Card>

                  {/* Style input box */}
                  <Card 
                    sx={{
                        p: 1, 
                        mb: 0.5,
                        backgroundColor: "rgba(0,0,0,0.1)", 
                        backdropFilter: "blur(10px)",
                        textColor: "#FFF",
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
                      sx={{
                        width: '22vw', 
                        fontColor: "#FFF",
                        input: { color: 'white' },
                        label: { color: 'white' }
                        }}
                    />
                  </Card>

                  {/* Grade Count Box */}
                  <Card 
                    sx={{
                        p: 1,
                        mt: 2,
                        mb: 2, 
                        backgroundColor: "rgba(0,0,0,0.1)", 
                        backdropFilter: "blur(1px)",
                        textColor: "#FFF",
                        // borderRadius: 3,
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
                                  direction="row"
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
                                    >
                                        A Grade
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
                                  direction="row"
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
                                    >
                                        B Grade
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
                        backgroundColor: "rgba(0,0,0,0.1)", 
                        backdropFilter: "blur(10px)",
                        textColor: "#FFF",
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
                            width: '20vw',
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
                            p: 1
                          }}
                        >
                            <Typography 
                                variant="h3" 
                                color="#FFFFFF"
                            >
                                RFT Rate
                            </Typography>
                        </Grid>
                      </Box>
                    </Grid>
                  </Card>
                </Grid>
            </Card>
            <Card
                sx={{
                    width: '75vw', mr: .5, mt: .5,
                    height: '86vh',
                    background: 'linear-gradient(to right, #3378FF, #9442FE)',
                    borderRadius: 3
                }}
            >
            </Card>
        </Grid>
    </div>
  )
}

export default InspectApp;  