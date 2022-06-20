import React from 'react';
import Navbar from '../Navbar';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
// // import CardContent from '@mui/material/CardContent'
// import Button from '@mui/material/Button';
// import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
// import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
// import IconButton from '@mui/material/IconButton'
// import RestartAltIcon from '@mui/icons-material/RestartAlt';
// import Stack from '@mui/material/Stack';
import DefectsButton1 from './DefectsButton1';
import DefectsButton2 from './DefectsButton2';

const PageApp = () => {

  // State Qty Item Defects
  // const [countbonding, setCountBonding] = useState(0);
  // const [countoverlem, setCountOverLem] = useState(0);
  // const [countrubberkotor, setCountRubberKotor] = useState(0);
  // const [countoutsolekotor, setCountOutsoleKotor    ] = useState(0);
  // const [countgap, setCountGap] = useState(0);
  // const [countlogonok, setCountLogoNOK] = useState(0);
  // const [countblooming, setCountBlooming] = useState(0);
  // const [countmargin, setCountMargin] = useState(0);
  // const [countwrinkle, setCountWrinkle] = useState(0);
  // const [countupperkotor, setCountUpperKotor] = useState(0);

  // State Tabs
  // const [valuetab, setTabValue] = useState('1');
  // const handleTab = (event, newValuetab) => {
  //   setTabValue(newValuetab);
  // };
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
            <DefectsButton1 />
            <Divider />
          </Card>
        </Grid>
      </Container>
    </div>
  )
}

export default PageApp