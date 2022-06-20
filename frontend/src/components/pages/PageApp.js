import React, { useState } from 'react';
import Navbar from '../Navbar';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
// import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Stack from '@mui/material/Stack';


const PageApp = () => {

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

  // const [date, setDate] = React.useState(null);
  // const [qtyoutput, setQtyOutput] = useState(0);

  return (
    <div>
      <Navbar />
      <Container maxWidth="100vw" sx={{ mt: 0.5, backgroundColor: '#90b4ce', p: 1, borderRadius: 0 }}>
        {/* <Card sx={{maxWidth: 'xl', backgroundColor: '#e3f2fd', height: '80vh'}}>
          <CardContent sx={{display:'flex', justifyContent: 'center'}}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Masukkan Tanggal"
                value={date}
                onChange={(newDate) => {
                  setDate(newDate);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <TextField
              id="outlined-number"
              label="Qty Output"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={qtyoutput}
              onChange={() => setQtyOutput()}
            />
          </CardContent>
          <CardContent sx={{justifyContent: 'center', backgroundColor: '#c8e4fb'}}>
            <Button variant="contained" sx={{mx: 1}} onClick={() => setCount(count + 1)}>
              <AddCircleOutlineOutlinedIcon />
              Add
            </Button>
            <Button variant="outlined" sx={{mx: 1}} onClick={() => setCount(0)}>
              <HorizontalRuleOutlinedIcon />
              Reset
            </Button>
            <TextField id="outlined-basic" label={count} variant="outlined" disabled />
          </CardContent>
        </Card> */}
        <Grid 
          container 
          spacing={0}
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Card sx={{backgroundColor: '#fffffe'}}>
            <CardHeader title="Defect" sx={{textAlign: 'center'}}/>
            <Divider />
            {/* Content */}
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
          </Card>
        </Grid>
      </Container>
    </div>
  )
}

export default PageApp