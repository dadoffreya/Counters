import React, {useState} from 'react';
import Navbar from '../Navbar';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent'
// import Button from '@mui/material/Button';
// import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
// import TextField from '@mui/material/TextField';
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
import Stack from '@mui/material/Stack';

// import DefectsButton1 from './DefectsButton1';
// import DefectsButton2 from './DefectsButton2';
// import DefectsButton3 from './DefectsButton3';

  // const [date, setDate] = React.useState(null);
  // const [qtyoutput, setQtyOutput] = useState(0);

const DefectsButton1 = () => {
    // State Qty Item Defects
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

    return (
      <div>
      <CardContent sx={{mt: -3, mb: -2}}>
          <Grid 
              container 
              spacing={1}
              direction='row'
              alignItems='center'
              justifyContent='center'
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
      </div>
    );
};
const DefectsButton2 = () => {
  // State Qty Item Defects
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

  return (
    <div>
    <CardContent sx={{mt: -3, mb: -2}}>
        <Grid 
            container 
            spacing={1}
            direction='row'
            alignItems='center'
            justifyContent='center'
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
            justifyContent='center'
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
    </div>
  );
};


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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const PageApp = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <div>
      <Navbar />
      <Container maxWidth="100vw" sx={{ mt: 0.5, backgroundColor: '#ffffff', p: 1, borderRadius: 0 }}>
        <Grid 
          container 
          spacing={0}
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Card sx={{backgroundColor: '#fffffe'}}>
            <CardHeader title="Defect" sx={{textAlign: 'center', mb: -3.5}}/>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs" centered sx={{mb: 0}}>
              <Tab label="Category 1" {...a11yProps(0)} />
              <Tab label="Category 2" {...a11yProps(1)} />
              <Tab label="Category 3" {...a11yProps(2)} />
            </Tabs>
            <Divider />
            <TabPanel value={value} index={0} >
              <DefectsButton1 />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <DefectsButton2 />
            </TabPanel>
            <TabPanel value={value} index={2}>
              {/* <DefectsButton3 /> */}
            </TabPanel>
          </Card>
        </Grid>
      </Container>
    </div>
  )
}

export default PageApp;