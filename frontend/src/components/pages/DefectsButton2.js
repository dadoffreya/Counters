import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Stack from '@mui/material/Stack';


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

export default DefectsButton2;