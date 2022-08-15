import React from 'react';
import Navbar from '../Navbar';
import Grid from '@mui/material/Grid';

const ChartsPage = () => {
  return (
    <div>
        <Navbar />
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
            <Grid 
                item
            >
                <iframe 
                    width="900" 
                    height="695" 
                    src="https://datastudio.google.com/embed/reporting/5dc4da61-1505-4a7f-af2d-1c983d1810d9/page/7AB0C" 
                    frameborder="10" 
                    allowfullscreen
                    title="Charts" 
                    >
                    RFT Charts
                </iframe>
            </Grid>
        </Grid>
            
    </div>
  )
}

export default ChartsPage;