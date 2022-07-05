import React, { useState} from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

const LoginPage = () => {
    document.body.style.background = "linear-gradient(to right, #9442FE, #3378FF)";
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });
    
    const [username, setUsername] = useState(null);
    
    const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
    setValues({
        ...values,
        showPassword: !values.showPassword,
    });
    };

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };

    const useStyles = makeStyles(() => ({
        title: {
          color: 'red',
          margin: 50,
          padding: 60,
          fontSize: 300,
        }
      }));
      const classes = useStyles();
    
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      justifyContent="center"
      alignItems="center"   
      style={{ minHeight: '90vh' }}   
    >
        <Grid item>
            <Card sx={{ minWidth: 300 }}>
                <CardHeader
                    className={classes.title}
                    title="Login"
                    style={{ textAlign: 'center', fontFamily: 'monospace'}} 
                />
                <Divider/>
                <CardContent sx={{mt: -3}}>
                    <div>
                        <FormControl variant="standard" sx={{m: 1, width: '93%'}}>
                            <InputLabel>Username</InputLabel>
                            <Input
                                id="standard-adornment-username"
                                type="text"
                                value={values.password}
                                onChange={handleChange('password')}
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl variant="standard" sx={{m: 1, width: '93%' }}>
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>
                </CardContent>
            </Card>            
        </Grid>
      
    </Grid>
  )
}

export default LoginPage