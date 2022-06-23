import React from 'react';
import Navbar from '../Navbar';
import Container from '@mui/material/Container';


const InspectApp = () => {
  return (
    <div>
    <Navbar />
    <Container maxWidth="100vw" sx={{ mt: 0.5, backgroundColor: '#000', p: 1, borderRadius: 0 }}>
    </Container>
    </div>
  )
}

export default InspectApp;  