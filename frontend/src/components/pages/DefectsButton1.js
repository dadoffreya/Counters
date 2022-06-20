import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Stack from '@mui/material/Stack';


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
                    sx={{mt: 0.5, mb: 0.25, width: '100px', height: '150px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '18px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
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
                    sx={{mt: 0.5, mb: 0.25, width: '100px', height: '150px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '18px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
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
                    <IconButton aria-label="reset" color="error" onClick={() => setCountBonding(countoverlem - 1)} disabled={countoverlem === 0} >
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
                    sx={{mt: 0.5, mb: 0.25, width: '100px', height: '150px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '18px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
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
                    sx={{mt: 0.5, mb: 0.25, width: '100px', height: '150px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '18px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
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
                    sx={{mt: 0.5, mb: 0.25, width: '100px', height: '150px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '18px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
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
                    sx={{mt: 0.5, mb: 0.25, width: '100px', height: '150px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '18px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
                    onClick={() => setCountLogoNOK(countlogonok + 1)}
                    >
                    #6
                    <br/>
                    Logo Not OK
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
                    sx={{mt: 0.5, mb: 0.25, width: '100px', height: '150px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '18px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
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
                    sx={{mt: 0.5, mb: 0.25, width: '100px', height: '150px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '18px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
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
                    sx={{mt: 0.5, mb: 0.25, width: '100px', height: '150px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '18px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
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
                    sx={{mt: 0.5, mb: 0.25, width: '100px', height: '150px', display: 'flex', backgroundColor: '#3da9fc', fontSize: '18px', justifyContent: 'center', alignItems: 'center', ':hover': {backgroundColor: '#094067'}}} 
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

export default DefectsButton1;