import React from 'react';
import Navbar from '../Navbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const InspectApp = () => {
  return (
    <div>
    <Navbar />
    <Container maxWidth="100vw" sx={{ backgroundColor: '#000', p: 1, borderRadius: 1 }}>
        <Grid
          container
          spacing={1}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          alignContent="stretch"
          wrap="nowrap"
          
        >
          <Box
            sx={{
                width: '25vw', mr: .5, mt: .5,
                height: 300,
                backgroundColor: 'primary.dark',
                '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
                },
            }}
            />
          <Box
            sx={{
                width: '75vw', mt: .5,
                height: 300,
                backgroundColor: 'primary.dark',
                '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
                },
            }}
            />
        </Grid>
    </Container>
    </div>
  )
}

export default InspectApp;  