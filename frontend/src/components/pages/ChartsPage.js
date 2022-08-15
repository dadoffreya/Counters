import React from 'react';
import Navbar from '../Navbar';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import RFTchart from './RFTchart';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

const ChartsPage = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  return (
    <div>
        <Navbar />
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' }}
        >
            <Tab label="RFT Charts" {...a11yProps(0)} />
            <Tab label="Performance Charts" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
            <RFTchart />
        </TabPanel>
        <TabPanel value={value} index={1}>
            Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
            Halu
        </TabPanel>
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
                {/* <iframe 
                    width="900" 
                    height="695" 
                    src="https://datastudio.google.com/embed/reporting/5dc4da61-1505-4a7f-af2d-1c983d1810d9/page/7AB0C" 
                    frameborder="5" 
                    allowfullscreen
                    title="Charts" 
                >
                    RFT Charts
                </iframe> */}
            </Grid>
        </Grid>
            
    </div>
  )
}

export default ChartsPage;