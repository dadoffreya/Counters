import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Stack from '@mui/material/Stack';


const DefectsButton3 = () => {
    // State Qty Item Defects
  const [countstrapcekung, setCountStrapCekung] = useState(0);
  const [countimevanok, setCountImevaNotOK] = useState(0);
  const [countshrinkage, setCountShrinkage] = useState(0);
  const [countsandalpanjangpendek, setCountPanjangPendek] = useState(0);
  const [countbenangpanjang, setCountBenangPanjang] = useState(0);
  const [countsolelaying, setCountSoleLaying] = useState(0);
  const [countlainlain, setCountLainLain] = useState(0);
  const [counttrimming, setCountTrimming] = useState(0);
  const [countbrokenstitch, setCountBrokenStitch] = useState(0);

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
    </div>
  );
};

export default DefectsButton3;