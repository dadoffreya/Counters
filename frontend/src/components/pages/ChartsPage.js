import React from 'react';
import Navbar from '../Navbar';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import RFTchart from './RFTchart';
import TopDefectLine1 from './TopDefectLine1';

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
        <Grid
             container
             spacing={0}
             direction="row"
             justifyContent="flex-start"
             alignItems="flex-start"
             sx={{
                mt: 1,
                p: 0.5
             }}
        >
            <Grid item>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    <Tab label="Line Performance" {...a11yProps(0)} />
                    <Tab label="Top Defects" {...a11yProps(1)} />
                </Tabs>
            </Grid>
            <Grid item>
                <TabPanel value={value} index={0}>
                    <RFTchart />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <TopDefectLine1 />
                </TabPanel>
                
            </Grid>
        </Grid>
    </div>
  )
}

export default ChartsPage;