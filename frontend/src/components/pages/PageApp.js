import React, { useState } from 'react';
import Navbar from '../Navbar';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Grid from '@mui/material/Grid'





const PageApp = () => {
  const [count, setCount] = useState(0);
  const [date, setDate] = React.useState(null);
  const [qtyoutput, setQtyOutput] = useState(0);

  return (
    <div>
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 2}}>
        <Card sx={{maxWidth: 'xl', backgroundColor: '#e3f2fd', height: '80vh'}}>
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
          {/* <CardContent sx={{justifyContent: 'center', backgroundColor: '#c8e4fb'}}>
            <Grid container spacing={1} direction='row'>
              <Grid item>
                <Grid container spacing={1} direction='column'>
                  <Button variant="contained" color="default">
                    Add
                  </Button>
                  <TextField id="outlined-basic" label={count} variant="outlined" disabled />
                  <Button variant="contained" color="default">
                    Reset
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </CardContent> */}
        </Card>
      </Container>
    </div>
  )
}

export default PageApp