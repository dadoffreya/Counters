import React, {useState} from 'react';
import Navbar from '../Navbar';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
// import CardContent from '@mui/material/CardContent'
// import Button from '@mui/material/Button';
// import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import PropTypes from 'prop-types';
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
import IconButton from '@mui/material/IconButton'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

  // const [date, setDate] = React.useState(null);

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// PageApp contents starts here
const PageApp = () => {
  // Tabs handler
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // Dialog handler
  const [open, setOpenDialog] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // State Button Defect
  const [countbonding, setCountBonding] = useState(0);
  const [countoverlem, setCountOverLem] = useState(0);
  const [countrubberkotor, setCountRubberKotor] = useState(0);
  const [countoutsolekotor, setCountOutsoleKotor    ] = useState(0);
  const [countgap, setCountGap] = useState(0);
  const [countlogonok, setCountLogoNOK] = useState(0);
  const [countblooming, setCountBlooming] = useState(0);
  const [countmargin, setCountMargin] = useState(0);
  const [countwrinkle, setCountWrinkle] = useState(0);
  const [countupperkotor, setCountUpperKotor] = useState(0);
  const [countsisi, setCountSisi] = useState(0);
  const [countlabelpeeloff, setLabelPeelOff] = useState(0);
  const [countevacacat, setCountEvaCacat] = useState(0);
  const [countcatbasah, setCountCatBasah] = useState(0);
  const [counttidakrata, setCountTidakRata] = useState(0);
  const [countcatkelupas, setCountCatKelupas] = useState(0);
  const [countbedasize, setCountBedaSize] = useState(0);
  const [countkotor, setCountKotor] = useState(0);
  const [countbedawarna, setCountBedaWarna] = useState(0);
  const [counttranspaperkelupas, setCountTranspaperKelupas] = useState(0);
  const [countstrapcekung, setCountStrapCekung] = useState(0);
  const [countimevanok, setCountImevaNotOK] = useState(0);
  const [countshrinkage, setCountShrinkage] = useState(0);
  const [countsandalpanjangpendek, setCountPanjangPendek] = useState(0);
  const [countbenangpanjang, setCountBenangPanjang] = useState(0);
  const [countsolelaying, setCountSoleLaying] = useState(0);
  const [countlainlain, setCountLainLain] = useState(0);
  const [counttrimming, setCountTrimming] = useState(0);
  const [countbrokenstitch, setCountBrokenStitch] = useState(0);

  // State Qty Output
  const [qtyoutput, setQtyOutput] = useState(null);
  const handleQtyOutput = (event) => {
    setQtyOutput(event.target.value);
  };

  // State Qty Total Defects
  const totaldefect = 
    countbonding + countoverlem + countrubberkotor + countoutsolekotor + countgap +
    countlogonok + countblooming + countmargin + countwrinkle + countupperkotor +
    countsisi + countlabelpeeloff + countevacacat + countcatbasah + counttidakrata +
    countcatkelupas + countbedasize + countkotor + countbedawarna + counttranspaperkelupas +
    countstrapcekung + countimevanok + countshrinkage + countsandalpanjangpendek + countbenangpanjang +
    countsolelaying + countlainlain + counttrimming + countbrokenstitch
    ;

  // State Qty OK
  const totalOK = qtyoutput - totaldefect;
  // Data Footwear Style
  const [footwear, setFootwear] = useState(null);
  const handleChangeFootwear = (event) => {
    setFootwear(event.target.value);
  };
  const footwearstyle = [
    {
      id: '1',
      style: '540 Jr Boy Blue green',
      imagepath: '/images/540jrboybluegreen.jpg'
    },
    {
      id: '2',
      style: '540 Jr Boy Navy red',
      imagepath: '/images/540jrboywhite.jpg'
    },
    {
      id: '3',
      style: '540 Jr Boy Navy pink',
      imagepath: '/images/540jrboypink.jpg'
    },
  ];
  const styleproduct = footwearstyle.filter( style => style.id === footwear).map( style => style.style);
  const fotoproduct = footwearstyle.filter( foto => foto.id === footwear).map( foto => foto.imagepath);

  // Data Line
  const [noline, setNoLine] = useState('');
  const handleChangeLine = (event) => {
    setNoLine(event.target.value);
  };
  const line = [
    {
      id: '1',
      label: 'Line 1'
    },
    {
      id: '2',
      label: 'Line 2'
    },
    {
      id: '3',
      label: 'Line 3'
    },
  ];
  const nomerline = line.filter( label => label.id === noline).map( line => line.label);

  return (
    <div>
      <Navbar />
      <Container maxWidth="100vw" sx={{ mt: 0.5, backgroundColor: '#fffeee', p: 1, borderRadius: 0 }}>
        <Grid 
          container 
          spacing={0}
          direction='column'
          alignItems='center'
          justifyContent='center'
          sx={{mt: 0}}
        >
          <Card sx={{backgroundColor: '#fffffe', width: '95vw'}}>
          <CardHeader title="Inspection" sx={{textAlign: 'center', mb: -3.5, mt: -2}}/>
            <CardContent sx={{mt: -3, mb: -2.5}}>
              <Grid 
                  container 
                  spacing={0}
                  direction='row'
                  alignItems='center'
                  justifyContent='center'
              >
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': {width: '15ch' }, ml: 1
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField 
                    id="outlined-basic" 
                    select
                    value={noline}
                    onChange={handleChangeLine}
                    label="Line" 
                    size="small"
                    variant="outlined"
                  >
                    {line.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': {width: '15ch' }, ml: 1
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField 
                    id="outlined-basic" 
                    select
                    value={footwear}
                    onChange={handleChangeFootwear}
                    label="Style" 
                    size="small"
                    variant="outlined"
                  >
                    {footwearstyle.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.style}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box> 
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': {width: '15ch' }, ml: 1
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField 
                    id="outlined-basic" 
                    type="number"
                    value={qtyoutput}
                    onChange={handleQtyOutput}
                    label="Qty Output" 
                    variant="outlined"
                    size="small"
                  />
                </Box>
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': {width: '8ch' }, ml: 1
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Card style={{backgroundColor: "#ffc107"}}>
                    <Grid container spacing={0.5} alignItems='center' justifyContent='center' direction='column' sx={{p: .25, backgroundColour: '#3da9fc'}}>
                      <Typography variant="subtitle2" color="error" sx={{ml: 0.5, mt: 0.25}}>Defect</Typography>
                      <Typography variant="subtitle2" color="initial" sx={{ml: 0.5, mt: -1}}>{totaldefect}</Typography>
                    </Grid>
                  </Card>
                </Box>
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': {width: '8ch' }, ml: 1
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Card style={{backgroundColor: "#4caf50"}}>
                    <Grid container spacing={0.5} alignItems='center' justifyContent='center' direction='column' sx={{p: .25, backgroundColour: '#3da9fc'}}>
                      <Typography variant="subtitle2" color="#fff" sx={{ml: 0.5, mt: 0.25}}>OK</Typography>
                      <Typography variant="subtitle2" color="#fff" sx={{ml: 0.5, mt: -1}}>{totalOK}</Typography>
                    </Grid>
                  </Card>
                </Box>
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': {width: '10ch' }, ml: 1
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Card style={{backgroundColor: '#000' }}>
                    <Grid container spacing={0.5} alignItems='center' justifyContent='center' direction='column' sx={{p: .25, backgroundColour: '#3da9fc'}}>
                      <Typography variant="subtitle2" color="#fff" sx={{ml: 0.5, mt: 0.25}}>Pass Rate</Typography>
                      <Typography variant="subtitle2" color="#fff" sx={{ml: 0.5, mt: -1}}>{totalOK/qtyoutput*100}%</Typography>
                    </Grid>
                  </Card>
                </Box>
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': {width: '5ch'}, ml: 1
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <IconButton aria-label="save" color="primary" disabled={totalOK < 0 || qtyoutput === null} onClick={handleClickOpenDialog}>
                    <SaveIcon/>
                  </IconButton>
                  <Dialog
                    open={open}
                    onClose={handleCloseDialog}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      Are you sure to save this data?
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Inspection result details:
                      </DialogContentText>
                      <br/>
                      <DialogContentText id="alert-dialog-description">
                        {nomerline}
                      </DialogContentText>
                      <DialogContentText id="alert-dialog-description">
                        {styleproduct}
                      </DialogContentText>
                      <DialogContentText id="alert-dialog-description">
                        Qty Inspect: {qtyoutput}
                      </DialogContentText>
                      <DialogContentText id="alert-dialog-description">
                        Qty Defect: {totaldefect}
                      </DialogContentText>
                      <DialogContentText id="alert-dialog-description">
                        Qty OK: {totalOK}
                      </DialogContentText>
                      <DialogContentText id="alert-dialog-description">
                        Quality Rate: {totalOK/qtyoutput*100}%
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseDialog}>Disagree</Button>
                      <Button onClick={handleCloseDialog} autoFocus>
                        Agree
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Box>
              </Grid>
            </CardContent>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs" centered sx={{mb: 0}}>
              <Tab label="Style" {...a11yProps(0)} />
              <Tab label="Category 1" {...a11yProps(1)} />
              <Tab label="Category 2" {...a11yProps(2)} />
              <Tab label="Category 3" {...a11yProps(3)} />
            </Tabs>
            <Divider />
            <TabPanel value={value} index={1} >
              {/* Deffect Button 1 */}
              <CardContent sx={{mt: -3, mb: -2}}>
                <Grid 
                  container 
                  spacing={1}
                  direction='row'
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <Card sx={{m: 0.25}}>
                      <Grid 
                          container
                          spacing={0}
                          direction='column'
                          alignItems='center'
                          justifyContent='center'
                      >
                          <Button 
                          variant="contained" 
                          sx={{mt: 0.5, mb: 0.25, width: '100px', height: '100px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '11px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
                          onClick={() => setCountBonding(countbonding + 1)}
                          >
                          #1
                          <br/>
                          Bonding
                          </Button>
                          <Button variant="outlined" sx={{mt: 0.5, mb: 1}} disabled>
                          Total: {countbonding}
                          </Button>
                          <Stack direction='row'>
                            <IconButton aria-label="reset" color="error" onClick={() => setCountBonding(countbonding - 1)} disabled={countbonding === 0} >
                              <HorizontalRuleOutlinedIcon />
                            </IconButton>
                            <IconButton aria-label="reset" color="warning" onClick={() => setCountBonding(0)} >
                              <RestartAltIcon />
                            </IconButton>
                          </Stack>
                      </Grid>
                  </Card>
                  <Card sx={{m: 0.25}}>
                      <Grid 
                          container
                          spacing={0}
                          direction='column'
                          alignItems='center'
                          justifyContent='center'
                      >
                          <Button 
                          variant="contained" 
                          sx={{mt: 0.5, mb: 0.25, width: '100px', height: '100px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '11px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
                          onClick={() => setCountOverLem(countoverlem + 1)}
                          >
                          #2
                          <br/>
                          Over Lem
                          </Button>
                          <Button variant="outlined" sx={{mt: 0.5, mb: 1}} disabled>
                          Total: {countoverlem}
                          </Button>
                          <Stack direction='row'>
                          <IconButton aria-label="reset" color="error" onClick={() => setCountOverLem(countoverlem - 1)} disabled={countoverlem === 0} >
                              <HorizontalRuleOutlinedIcon />
                          </IconButton>
                          <IconButton aria-label="reset" color="warning" onClick={() => setCountOverLem(0)} >
                              <RestartAltIcon />
                          </IconButton>
                          </Stack>
                      </Grid>
                  </Card>
                  <Card sx={{m: 0.25}}>
                      <Grid 
                          container
                          spacing={0}
                          direction='column'
                          alignItems='center'
                          justifyContent='center'
                      >
                          <Button 
                          variant="contained" 
                          sx={{mt: 0.5, mb: 0.25, width: '100px', height: '100px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '11px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
                          onClick={() => setCountRubberKotor(countrubberkotor + 1)}
                          >
                          #3
                          <br/>
                          Rubber Kotor
                          </Button>
                          <Button variant="outlined" sx={{mt: 0.5, mb: 1}} disabled>
                          Total: {countrubberkotor}
                          </Button>
                          <Stack direction='row'>
                          <IconButton aria-label="reset" color="error" onClick={() => setCountRubberKotor(countrubberkotor - 1)} disabled={countrubberkotor === 0} >
                              <HorizontalRuleOutlinedIcon />
                          </IconButton>
                          <IconButton aria-label="reset" color="warning" onClick={() => setCountRubberKotor(0)} >
                              <RestartAltIcon />
                          </IconButton>
                          </Stack>
                      </Grid>
                  </Card>
                  <Card sx={{m: 0.25}}>
                      <Grid 
                          container
                          spacing={0}
                          direction='column'
                          alignItems='center'
                          justifyContent='center'
                      >
                          <Button 
                          variant="contained" 
                          sx={{mt: 0.5, mb: 0.25, width: '100px', height: '100px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '11px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
                          onClick={() => setCountOutsoleKotor(countoutsolekotor + 1)}
                          >
                          #4
                          <br/>
                          Outsole Kotor
                          </Button>
                          <Button variant="outlined" sx={{mt: 0.5, mb: 1}} disabled>
                          Total: {countoutsolekotor}
                          </Button>
                          <Stack direction='row'>
                          <IconButton aria-label="reset" color="error" onClick={() => setCountOutsoleKotor(countoutsolekotor - 1)} disabled={countoutsolekotor === 0} >
                              <HorizontalRuleOutlinedIcon />
                          </IconButton>
                          <IconButton aria-label="reset" color="warning" onClick={() => setCountOutsoleKotor(0)} >
                              <RestartAltIcon />
                          </IconButton>
                          </Stack>
                      </Grid>
                  </Card>
                  <Card sx={{m: 0.25}}>
                      <Grid 
                          container
                          spacing={0}
                          direction='column'
                          alignItems='center'
                          justifyContent='center'
                      >
                          <Button 
                          variant="contained" 
                          sx={{mt: 0.5, mb: 0.25, width: '100px', height: '100px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '11px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
                          onClick={() => setCountGap(countgap + 1)}
                          >
                          #5
                          <br/>
                          GAP
                          </Button>
                          <Button variant="outlined" sx={{mt: 0.5, mb: 1}} disabled>
                          Total: {countgap}
                          </Button>
                          <Stack direction='row'>
                          <IconButton aria-label="reset" color="error" onClick={() => setCountGap(countgap - 1)} disabled={countgap === 0} >
                              <HorizontalRuleOutlinedIcon />
                          </IconButton>
                          <IconButton aria-label="reset" color="warning" onClick={() => setCountGap(0)} >
                              <RestartAltIcon />
                          </IconButton>
                          </Stack>
                      </Grid>
                  </Card>
                </Grid>
              </CardContent>
              <CardContent>
                <Grid 
                  container 
                  spacing={1}
                  direction='row'
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <Card sx={{m: 0.25}}>
                      <Grid 
                          container
                          spacing={0}
                          direction='column'
                          alignItems='center'
                          justifyContent='center'
                      >
                          <Button 
                          variant="contained" 
                          sx={{mt: 0.5, mb: 0.25, width: '100px', height: '100px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '11px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
                          onClick={() => setCountLogoNOK(countlogonok + 1)}
                          >
                          #6
                          <br/>
                          Logo NOK
                          </Button>
                          <Button variant="outlined" sx={{mt: 0.5, mb: 1}} disabled>
                          Total: {countlogonok}
                          </Button>
                          <Stack direction='row'>
                          <IconButton aria-label="reset" color="error" onClick={() => setCountLogoNOK(countlogonok - 1)} disabled={countlogonok === 0} >
                              <HorizontalRuleOutlinedIcon />
                          </IconButton>
                          <IconButton aria-label="reset" color="warning" onClick={() => setCountLogoNOK(0)} >
                              <RestartAltIcon />
                          </IconButton>
                          </Stack>
                      </Grid>
                  </Card>
                  <Card sx={{m: 0.25}}>
                      <Grid 
                          container
                          spacing={0}
                          direction='column'
                          alignItems='center'
                          justifyContent='center'
                      >
                          <Button 
                          variant="contained" 
                          sx={{mt: 0.5, mb: 0.25, width: '100px', height: '100px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '11px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
                          onClick={() => setCountBlooming(countblooming + 1)}
                          >
                          #7
                          <br/>
                          Blooming
                          </Button>
                          <Button variant="outlined" sx={{mt: 0.5, mb: 1}} disabled>
                          Total: {countblooming}
                          </Button>
                          <Stack direction='row'>
                          <IconButton aria-label="reset" color="error" onClick={() => setCountBlooming(countblooming - 1)} disabled={countblooming === 0} >
                              <HorizontalRuleOutlinedIcon />
                          </IconButton>
                          <IconButton aria-label="reset" color="warning" onClick={() => setCountBlooming(0)} >
                              <RestartAltIcon />
                          </IconButton>
                          </Stack>
                      </Grid>
                  </Card>
                  <Card sx={{m: 0.25}}>
                      <Grid 
                          container
                          spacing={0}
                          direction='column'
                          alignItems='center'
                          justifyContent='center'
                      >
                          <Button 
                          variant="contained" 
                          sx={{mt: 0.5, mb: 0.25, width: '100px', height: '100px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '11px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
                          onClick={() => setCountMargin(countmargin + 1)}
                          >
                          #8
                          <br/>
                          Margin
                          </Button>
                          <Button variant="outlined" sx={{mt: 0.5, mb: 1}} disabled>
                          Total: {countmargin}
                          </Button>
                          <Stack direction='row'>
                          <IconButton aria-label="reset" color="error" onClick={() => setCountMargin(countmargin - 1)} disabled={countmargin === 0} >
                              <HorizontalRuleOutlinedIcon />
                          </IconButton>
                          <IconButton aria-label="reset" color="warning" onClick={() => setCountMargin(0)} >
                              <RestartAltIcon />
                          </IconButton>
                          </Stack>
                      </Grid>
                  </Card>
                  <Card sx={{m: 0.25}}>
                      <Grid 
                          container
                          spacing={0}
                          direction='column'
                          alignItems='center'
                          justifyContent='center'
                      >
                          <Button 
                          variant="contained" 
                          sx={{mt: 0.5, mb: 0.25, width: '100px', height: '100px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '11px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
                          onClick={() => setCountWrinkle(countwrinkle + 1)}
                          >
                          #9
                          <br/>
                          Wrinkle
                          </Button>
                          <Button variant="outlined" sx={{mt: 0.5, mb: 1}} disabled>
                          Total: {countwrinkle}
                          </Button>
                          <Stack direction='row'>
                          <IconButton aria-label="reset" color="error" onClick={() => setCountWrinkle(countwrinkle - 1)} disabled={countwrinkle === 0} >
                              <HorizontalRuleOutlinedIcon />
                          </IconButton>
                          <IconButton aria-label="reset" color="warning" onClick={() => setCountWrinkle(0)} >
                              <RestartAltIcon />
                          </IconButton>
                          </Stack>
                      </Grid>
                  </Card>
                  <Card sx={{m: 0.25}}>
                      <Grid 
                          container
                          spacing={0}
                          direction='column'
                          alignItems='center'
                          justifyContent='center'
                      >
                          <Button 
                          variant="contained" 
                          sx={{mt: 0.5, mb: 0.25, width: '100px', height: '100px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '11px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
                          onClick={() => setCountUpperKotor(countupperkotor + 1)}
                          >
                          #10
                          <br/>
                          Upper Kotor
                          </Button>
                          <Button variant="outlined" sx={{mt: 0.5, mb: 1, fontColor: 'black'}} disabled>
                          Total: {countupperkotor}
                          </Button>
                          <Stack direction='row'>
                          <IconButton aria-label="reset" color="error" onClick={() => setCountUpperKotor(countupperkotor - 1)} disabled={countupperkotor === 0} >
                              <HorizontalRuleOutlinedIcon />
                          </IconButton>
                          <IconButton aria-label="reset" color="warning" onClick={() => setCountUpperKotor(0)} >
                              <RestartAltIcon />
                          </IconButton>
                          </Stack>
                      </Grid>
                  </Card>
                </Grid>
              </CardContent>
            </TabPanel>
            <TabPanel value={value} index={2}>
              {/* Deffect Button 2 */}
              <CardContent sx={{mt: -3, mb: -2}}>
                <Grid 
                    container 
                    spacing={1}
                    direction='row'
                    alignItems='center'
                    justifyContent='space-between'
                >
                  <Card sx={{m: 0.25}}>
                      <Grid 
                          container
                          spacing={0}
                          direction='column'
                          alignItems='center'
                          justifyContent='center'
                      >
                          <Button 
                          variant="contained" 
                          sx={{mt: 0.5, mb: 0.25, width: '100px', height: '100px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '11px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
                          onClick={() => setCountSisi(countsisi + 1)}
                          >
                          #11
                          <br />
                          Sisi Kanan Kiri Tidak Sama
                          </Button>
                          <Button variant="outlined" sx={{mt: 0.5, mb: 1}} disabled>
                          Total: {countsisi}
                          </Button>
                          <Stack direction='row'>
                          <IconButton aria-label="reset" color="error" onClick={() => setCountSisi(countsisi - 1)} disabled={countsisi === 0} >
                              <HorizontalRuleOutlinedIcon />
                          </IconButton>
                          <IconButton aria-label="reset" color="warning" onClick={() => setCountSisi(0)} >
                              <RestartAltIcon />
                          </IconButton>
                          </Stack>
                      </Grid>
                  </Card>
                  <Card sx={{m: 0.25}}>
                      <Grid 
                          container
                          spacing={0}
                          direction='column'
                          alignItems='center'
                          justifyContent='center'
                      >
                          <Button 
                          variant="contained" 
                          sx={{mt: 0.5, mb: 0.25, width: '100px', height: '100px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '12px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
                          onClick={() => setLabelPeelOff(countlabelpeeloff + 1)}
                          >
                          #12
                          <br />
                          Size Label Peel Off
                          </Button>
                          <Button variant="outlined" sx={{mt: 0.5, mb: 1}} disabled>
                          Total: {countlabelpeeloff}
                          </Button>
                          <Stack direction='row'>
                          <IconButton aria-label="reset" color="error" onClick={() => setLabelPeelOff(countlabelpeeloff - 1)} disabled={countlabelpeeloff === 0} >
                              <HorizontalRuleOutlinedIcon />
                          </IconButton>
                          <IconButton aria-label="reset" color="warning" onClick={() => setLabelPeelOff(0)} >
                              <RestartAltIcon />
                          </IconButton>
                          </Stack>
                      </Grid>
                  </Card>
                  <Card sx={{m: 0.25}}>
                      <Grid 
                          container
                          spacing={0}
                          direction='column'
                          alignItems='center'
                          justifyContent='center'
                      >
                          <Button 
                          variant="contained" 
                          sx={{mt: 0.5, mb: 0.25, width: '100px', height: '100px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '12px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
                          onClick={() => setCountEvaCacat(countevacacat + 1)}
                          >
                          #13
                          <br />
                          Outsole
                          /
                          Eva Cacat
                          </Button>
                          <Button variant="outlined" sx={{mt: 0.5, mb: 1}} disabled>
                          Total: {countevacacat}
                          </Button>
                          <Stack direction='row'>
                          <IconButton aria-label="reset" color="error" onClick={() => setCountEvaCacat(countevacacat - 1)} disabled={countevacacat === 0} >
                              <HorizontalRuleOutlinedIcon />
                          </IconButton>
                          <IconButton aria-label="reset" color="warning" onClick={() => setCountEvaCacat(0)} >
                              <RestartAltIcon />
                          </IconButton>
                          </Stack>
                      </Grid>
                  </Card>
                  <Card sx={{m: 0.25}}>
                      <Grid 
                          container
                          spacing={0}
                          direction='column'
                          alignItems='center'
                          justifyContent='center'
                      >
                          <Button 
                          variant="contained" 
                          sx={{mt: 0.5, mb: 0.25, width: '100px', height: '100px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '11px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
                          onClick={() => setCountCatBasah(countcatbasah + 1)}
                          >
                          #14
                          <br />
                          Cat Belum Kering
                          </Button>
                          <Button variant="outlined" sx={{mt: 0.5, mb: 1}} disabled>
                          Total: {countcatbasah}
                          </Button>
                          <Stack direction='row'>
                          <IconButton aria-label="reset" color="error" onClick={() => setCountCatBasah(countcatbasah - 1)} disabled={countcatbasah === 0} >
                              <HorizontalRuleOutlinedIcon />
                          </IconButton>
                          <IconButton aria-label="reset" color="warning" onClick={() => setCountCatBasah(0)} >
                              <RestartAltIcon />
                          </IconButton>
                          </Stack>
                      </Grid>
                  </Card>
                  <Card sx={{m: 0.25}}>
                      <Grid 
                          container
                          spacing={0}
                          direction='column'
                          alignItems='center'
                          justifyContent='center'
                      >
                          <Button 
                          variant="contained" 
                          sx={{mt: 0.5, mb: 0.25, width: '100px', height: '100px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '11px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
                          onClick={() => setCountTidakRata(counttidakrata + 1)}
                          >
                          #15
                          <br />
                          Tidak Rata
                          </Button>
                          <Button variant="outlined" sx={{mt: 0.5, mb: 1}} disabled>
                          Total: {counttidakrata}
                          </Button>
                          <Stack direction='row'>
                          <IconButton aria-label="reset" color="error" onClick={() => setCountTidakRata(counttidakrata - 1)} disabled={counttidakrata === 0} >
                              <HorizontalRuleOutlinedIcon />
                          </IconButton>
                          <IconButton aria-label="reset" color="warning" onClick={() => setCountTidakRata(0)} >
                              <RestartAltIcon />
                          </IconButton>
                          </Stack>
                      </Grid>
                  </Card>
                </Grid>
              </CardContent>
              <CardContent>
                <Grid 
                    container 
                    spacing={1}
                    direction='row'
                    alignItems='center'
                    justifyContent='space-between'
                >
                  <Card sx={{m: 0.25}}>
                      <Grid 
                          container
                          spacing={0}
                          direction='column'
                          alignItems='center'
                          justifyContent='center'
                      >
                          <Button 
                          variant="contained" 
                          sx={{mt: 0.5, mb: 0.25, width: '100px', height: '100px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '11px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
                          onClick={() => setCountCatKelupas(countcatkelupas + 1)}
                          >
                          #16
                          <br />
                          Cat Terkelupas
                          </Button>
                          <Button variant="outlined" sx={{mt: 0.5, mb: 1}} disabled>
                          Total: {countcatkelupas}
                          </Button>
                          <Stack direction='row'>
                          <IconButton aria-label="reset" color="error" onClick={() => setCountCatKelupas(countcatkelupas - 1)} disabled={countcatkelupas === 0} >
                              <HorizontalRuleOutlinedIcon />
                          </IconButton>
                          <IconButton aria-label="reset" color="warning" onClick={() => setCountCatKelupas(0)} >
                              <RestartAltIcon />
                          </IconButton>
                          </Stack>
                      </Grid>
                  </Card>
                  <Card sx={{m: 0.25}}>
                      <Grid 
                          container
                          spacing={0}
                          direction='column'
                          alignItems='center'
                          justifyContent='center'
                      >
                          <Button 
                          variant="contained" 
                          sx={{mt: 0.5, mb: 0.25, width: '100px', height: '100px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '11px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
                          onClick={() => setCountBedaSize(countbedasize + 1)}
                          >
                          #17
                          <br />
                          Beda Size
                          </Button>
                          <Button variant="outlined" sx={{mt: 0.5, mb: 1}} disabled>
                          Total: {countbedasize}
                          </Button>
                          <Stack direction='row'>
                          <IconButton aria-label="reset" color="error" onClick={() => setCountBedaSize(countbedasize - 1)} disabled={countbedasize === 0} >
                              <HorizontalRuleOutlinedIcon />
                          </IconButton>
                          <IconButton aria-label="reset" color="warning" onClick={() => setCountBedaSize(0)} >
                              <RestartAltIcon />
                          </IconButton>
                          </Stack>
                      </Grid>
                  </Card>
                  <Card sx={{m: 0.25}}>
                      <Grid 
                          container
                          spacing={0}
                          direction='column'
                          alignItems='center'
                          justifyContent='center'
                      >
                          <Button 
                          variant="contained" 
                          sx={{mt: 0.5, mb: 0.25, width: '100px', height: '100px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '11px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
                          onClick={() => setCountKotor(countkotor + 1)}
                          >
                          #18
                          <br />
                          Kotor
                          </Button>
                          <Button variant="outlined" sx={{mt: 0.5, mb: 1}} disabled>
                          Total: {countkotor}
                          </Button>
                          <Stack direction='row'>
                          <IconButton aria-label="reset" color="error" onClick={() => setCountKotor(countkotor - 1)} disabled={countkotor === 0} >
                              <HorizontalRuleOutlinedIcon />
                          </IconButton>
                          <IconButton aria-label="reset" color="warning" onClick={() => setCountKotor(0)} >
                              <RestartAltIcon />
                          </IconButton>
                          </Stack>
                      </Grid>
                  </Card>
                  <Card sx={{m: 0.25}}>
                      <Grid 
                          container
                          spacing={0}
                          direction='column'
                          alignItems='center'
                          justifyContent='center'
                      >
                          <Button 
                          variant="contained" 
                          sx={{mt: 0.5, mb: 0.25, width: '100px', height: '100px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '11px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
                          onClick={() => setCountBedaWarna(countbedawarna + 1)}
                          >
                          #19
                          <br />
                          Beda Warna
                          </Button>
                          <Button variant="outlined" sx={{mt: 0.5, mb: 1}} disabled>
                          Total: {countbedawarna}
                          </Button>
                          <Stack direction='row'>
                          <IconButton aria-label="reset" color="error" onClick={() => setCountBedaWarna(countbedawarna - 1)} disabled={countbedawarna === 0} >
                              <HorizontalRuleOutlinedIcon />
                          </IconButton>
                          <IconButton aria-label="reset" color="warning" onClick={() => setCountBedaWarna(0)} >
                              <RestartAltIcon />
                          </IconButton>
                          </Stack>
                      </Grid>
                  </Card>
                  <Card sx={{m: 0.25}}>
                      <Grid 
                          container
                          spacing={0}
                          direction='column'
                          alignItems='center'
                          justifyContent='center'
                      >
                          <Button 
                          variant="contained" 
                          sx={{mt: 0.5, mb: 0.25, width: '100px', height: '100px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '11px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
                          onClick={() => setCountTranspaperKelupas(counttranspaperkelupas + 1)}
                          >
                          #10
                          <br />
                          Transpaper Terkelupas
                          </Button>
                          <Button variant="outlined" sx={{mt: 0.5, mb: 1, fontColor: 'black'}} disabled>
                          Total: {counttranspaperkelupas}
                          </Button>
                          <Stack direction='row'>
                          <IconButton aria-label="reset" color="error" onClick={() => setCountTranspaperKelupas(counttranspaperkelupas - 1)} disabled={counttranspaperkelupas === 0} >
                              <HorizontalRuleOutlinedIcon />
                          </IconButton>
                          <IconButton aria-label="reset" color="warning" onClick={() => setCountTranspaperKelupas(0)} >
                              <RestartAltIcon />
                          </IconButton>
                          </Stack>
                      </Grid>
                  </Card>
                </Grid>
              </CardContent>
            </TabPanel>
            <TabPanel value={value} index={3}>
              {/* Deffect Button 2 */}
              <CardContent sx={{mt: -3, mb: -2}}>
                <Grid 
                    container 
                    spacing={1}
                    direction='row'
                    alignItems='center'
                    justifyContent='space-between'
                >
                    <Card sx={{m: 0.25}}>
                        <Grid 
                            container
                            spacing={0}
                            direction='column'
                            alignItems='center'
                            justifyContent='center'
                        >
                            <Button 
                            variant="contained" 
                            sx={{mt: 0.5, mb: 0.25, width: '100px', height: '100px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '11px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
                            onClick={() => setCountStrapCekung(countstrapcekung + 1)}
                            >
                            #21
                            <br />
                            Strap Cekung
                            </Button>
                            <Button variant="outlined" sx={{mt: 0.5, mb: 1}} disabled>
                            Total: {countstrapcekung}
                            </Button>
                            <Stack direction='row'>
                            <IconButton aria-label="reset" color="error" onClick={() => setCountStrapCekung(countstrapcekung - 1)} disabled={countstrapcekung === 0} >
                                <HorizontalRuleOutlinedIcon />
                            </IconButton>
                            <IconButton aria-label="reset" color="warning" onClick={() => setCountStrapCekung(0)} >
                                <RestartAltIcon />
                            </IconButton>
                            </Stack>
                        </Grid>
                    </Card>
                    <Card sx={{m: 0.25}}>
                        <Grid 
                            container
                            spacing={0}
                            direction='column'
                            alignItems='center'
                            justifyContent='center'
                        >
                            <Button 
                            variant="contained" 
                            sx={{mt: 0.5, mb: 0.25, width: '100px', height: '100px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '12px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
                            onClick={() => setCountImevaNotOK(countimevanok + 1)}
                            >
                            #22
                            <br />
                            Imeva Not OK
                            </Button>
                            <Button variant="outlined" sx={{mt: 0.5, mb: 1}} disabled>
                            Total: {countimevanok}
                            </Button>
                            <Stack direction='row'>
                            <IconButton aria-label="reset" color="error" onClick={() => setCountImevaNotOK(countimevanok - 1)} disabled={countimevanok === 0} >
                                <HorizontalRuleOutlinedIcon />
                            </IconButton>
                            <IconButton aria-label="reset" color="warning" onClick={() => setCountImevaNotOK(0)} >
                                <RestartAltIcon />
                            </IconButton>
                            </Stack>
                        </Grid>
                    </Card>
                    <Card sx={{m: 0.25}}>
                        <Grid 
                            container
                            spacing={0}
                            direction='column'
                            alignItems='center'
                            justifyContent='center'
                        >
                            <Button 
                            variant="contained" 
                            sx={{mt: 0.5, mb: 0.25, width: '100px', height: '100px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '12px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
                            onClick={() => setCountShrinkage(countshrinkage + 1)}
                            >
                            #23
                            <br />
                            Shrinkage
                            </Button>
                            <Button variant="outlined" sx={{mt: 0.5, mb: 1}} disabled>
                            Total: {countshrinkage}
                            </Button>
                            <Stack direction='row'>
                            <IconButton aria-label="reset" color="error" onClick={() => setCountShrinkage(countshrinkage - 1)} disabled={countshrinkage === 0} >
                                <HorizontalRuleOutlinedIcon />
                            </IconButton>
                            <IconButton aria-label="reset" color="warning" onClick={() => setCountShrinkage(0)} >
                                <RestartAltIcon />
                            </IconButton>
                            </Stack>
                        </Grid>
                    </Card>
                    <Card sx={{m: 0.25}}>
                        <Grid 
                            container
                            spacing={0}
                            direction='column'
                            alignItems='center'
                            justifyContent='center'
                        >
                            <Button 
                            variant="contained" 
                            sx={{mt: 0.5, mb: 0.25, width: '100px', height: '100px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '11px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
                            onClick={() => setCountPanjangPendek(countsandalpanjangpendek + 1)}
                            >
                            #24
                            <br />
                            Sandal Panjang Pendek
                            </Button>
                            <Button variant="outlined" sx={{mt: 0.5, mb: 1}} disabled>
                            Total: {countsandalpanjangpendek}
                            </Button>
                            <Stack direction='row'>
                            <IconButton aria-label="reset" color="error" onClick={() => setCountPanjangPendek(countsandalpanjangpendek - 1)} disabled={countsandalpanjangpendek === 0} >
                                <HorizontalRuleOutlinedIcon />
                            </IconButton>
                            <IconButton aria-label="reset" color="warning" onClick={() => setCountPanjangPendek(0)} >
                                <RestartAltIcon />
                            </IconButton>
                            </Stack>
                        </Grid>
                    </Card>
                    <Card sx={{m: 0.25}}>
                        <Grid 
                            container
                            spacing={0}
                            direction='column'
                            alignItems='center'
                            justifyContent='center'
                        >
                            <Button 
                            variant="contained" 
                            sx={{mt: 0.5, mb: 0.25, width: '100px', height: '100px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '11px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
                            onClick={() => setCountBenangPanjang(countbenangpanjang + 1)}
                            >
                            #25
                            <br />
                            Benang Panjang
                            </Button>
                            <Button variant="outlined" sx={{mt: 0.5, mb: 1}} disabled>
                            Total: {countbenangpanjang}
                            </Button>
                            <Stack direction='row'>
                            <IconButton aria-label="reset" color="error" onClick={() => setCountBenangPanjang(countbenangpanjang - 1)} disabled={countbenangpanjang === 0} >
                                <HorizontalRuleOutlinedIcon />
                            </IconButton>
                            <IconButton aria-label="reset" color="warning" onClick={() => setCountBenangPanjang(0)} >
                                <RestartAltIcon />
                            </IconButton>
                            </Stack>
                        </Grid>
                    </Card>
                </Grid>
              </CardContent>
              <CardContent>
                <Grid 
                    container 
                    spacing={1}
                    direction='row'
                    alignItems='center'
                    justifyContent='space-between'
                >
                    <Card sx={{m: 0.25}}>
                        <Grid 
                            container
                            spacing={0}
                            direction='column'
                            alignItems='center'
                            justifyContent='center'
                        >
                            <Button 
                            variant="contained" 
                            sx={{mt: 0.5, mb: 0.25, width: '100px', height: '100px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '11px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
                            onClick={() => setCountSoleLaying(countsolelaying + 1)}
                            >
                            #26
                            <br />
                            Sole Laying
                            </Button>
                            <Button variant="outlined" sx={{mt: 0.5, mb: 1}} disabled>
                            Total: {countsolelaying}
                            </Button>
                            <Stack direction='row'>
                            <IconButton aria-label="reset" color="error" onClick={() => setCountSoleLaying(countsolelaying - 1)} disabled={countsolelaying === 0} >
                                <HorizontalRuleOutlinedIcon />
                            </IconButton>
                            <IconButton aria-label="reset" color="warning" onClick={() => setCountSoleLaying(0)} >
                                <RestartAltIcon />
                            </IconButton>
                            </Stack>
                        </Grid>
                    </Card>
                    <Card sx={{m: 0.25}}>
                        <Grid 
                            container
                            spacing={0}
                            direction='column'
                            alignItems='center'
                            justifyContent='center'
                        >
                            <Button 
                            variant="contained" 
                            sx={{mt: 0.5, mb: 0.25, width: '100px', height: '100px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '11px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
                            onClick={() => setCountLainLain(countlainlain + 1)}
                            >
                            #27
                            <br />
                            Lain - Lain
                            </Button>
                            <Button variant="outlined" sx={{mt: 0.5, mb: 1}} disabled>
                            Total: {countlainlain}
                            </Button>
                            <Stack direction='row'>
                            <IconButton aria-label="reset" color="error" onClick={() => setCountLainLain(countlainlain - 1)} disabled={countlainlain === 0} >
                                <HorizontalRuleOutlinedIcon />
                            </IconButton>
                            <IconButton aria-label="reset" color="warning" onClick={() => setCountLainLain(0)} >
                                <RestartAltIcon />
                            </IconButton>
                            </Stack>
                        </Grid>
                    </Card>
                    <Card sx={{m: 0.25}}>
                        <Grid 
                            container
                            spacing={0}
                            direction='column'
                            alignItems='center'
                            justifyContent='center'
                        >
                            <Button 
                            variant="contained" 
                            sx={{mt: 0.5, mb: 0.25, width: '100px', height: '100px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '11px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
                            onClick={() => setCountTrimming(counttrimming + 1)}
                            >
                            #28
                            <br />
                            Trimming
                            </Button>
                            <Button variant="outlined" sx={{mt: 0.5, mb: 1}} disabled>
                            Total: {counttrimming}
                            </Button>
                            <Stack direction='row'>
                            <IconButton aria-label="reset" color="error" onClick={() => setCountTrimming(counttrimming - 1)} disabled={counttrimming === 0} >
                                <HorizontalRuleOutlinedIcon />
                            </IconButton>
                            <IconButton aria-label="reset" color="warning" onClick={() => setCountTrimming(0)} >
                                <RestartAltIcon />
                            </IconButton>
                            </Stack>
                        </Grid>
                    </Card>
                    <Card sx={{m: 0.25}}>
                        <Grid 
                            container
                            spacing={0}
                            direction='column'
                            alignItems='center'
                            justifyContent='center'
                        >
                            <Button 
                            variant="contained" 
                            sx={{mt: 0.5, mb: 0.25, width: '100px', height: '100px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '11px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
                            onClick={() => setCountBrokenStitch(countbrokenstitch + 1)}
                            >
                            #29
                            <br />
                            Broken Stitch
                            </Button>
                            <Button variant="outlined" sx={{mt: 0.5, mb: 1}} disabled>
                            Total: {countbrokenstitch}
                            </Button>
                            <Stack direction='row'>
                            <IconButton aria-label="reset" color="error" onClick={() => setCountBrokenStitch(countbrokenstitch - 1)} disabled={countbrokenstitch === 0} >
                                <HorizontalRuleOutlinedIcon />
                            </IconButton>
                            <IconButton aria-label="reset" color="warning" onClick={() => setCountBrokenStitch(0)} >
                                <RestartAltIcon />
                            </IconButton>
                            </Stack>
                        </Grid>
                    </Card>
                </Grid>
              </CardContent>
            </TabPanel>
            <TabPanel value={value} index={0}>
                <Grid container spacing={1} direction='column' justifyContent='center' alignItems='center'>
                  <Card sx={{ maxWidth: '65vw' }}>
                    <Box
                      component="img"
                      sx={{
                        height: "100%",
                        width: "100%",
                        maxHeight: { xs: "100%", md: "100%" },
                        maxWidth: { xs: "100%", md: "100%" },
                      }}
                      alt={styleproduct}
                      src={fotoproduct}
                    />
                  </Card>
                </Grid>
            </TabPanel>
          </Card>
        </Grid>
      </Container>
    </div>
  )
}

export default PageApp;