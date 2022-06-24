import React from 'react';
import Navbar from '../Navbar';
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

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