import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
import CardHeader from '@mui/material/CardHeader'
import Button from '@mui/material/Button'

const LoginPage = () => {
    document.body.style.background = "linear-gradient(to right, #9442FE, #3378FF)";
    const [username, setUsername] = useState('');
    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    // const [password1, setPassword1] = useState('');
    // const handlePass = (event) => {
    //     setPassword1(event.target.value);
    // };

    const [password, setPassword] = React.useState({
        password: '',
        showPassword: false,
      });
    
    const handlePassword = (prop) => (event) => {
    setPassword({ ...password, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
    setPassword({
        ...password,
        showPassword: !password.showPassword,
    });
    };

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };

    const [pesan, setPesan] = useState('');
    const navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        console.log(username);
        console.log(password);
        try {
            await axios.post('http://localhost:5000/login',{
                name: username,
                password: password.password,
            });
            navigate("../", { replace: true });
        } catch (error) {
            if (error.response) {
                setPesan(error.response.data.msg);
            };
        }
    }
    
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
            <Card sx={{ minWidth: 300,
                background: 'rgba( 255, 255, 255, 0.3 )',
                boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                backdropFilter: "blur(1.5px)",
                border: '1px solid rgba( 255, 255, 255, 0.18 )',
             }}>
                <CardHeader
                    title="Login to continue"
                    style={{ textAlign: 'center', fontFamily: 'monospace', color: '#feeeee'}} 
                    sx={{mt: 2}}
                />
                <CardContent>
                    <Grid
                      container
                      spacing={0}
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      alignContent="center"
                    >
                        <TextField
                            label="Username"
                            id="textfield-username"
                            sx={{ m: 1, width: '30ch' }}
                            value={username}
                            onChange={handleUsername}
                        />
                        <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={password.showPassword ? 'text' : 'password'}
                                value={password.password}
                                onChange={handlePassword('password')}
                                label="Password"
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                    {password.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                        </FormControl>
                        <Button variant="contained" color="primary" sx={{mt: 1}} size="large" onClick={Auth}>
                          Login
                        </Button>
                    </Grid>
                </CardContent>
            </Card>            
        </Grid>
      
    </Grid>
  )
}

export default LoginPage