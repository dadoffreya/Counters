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
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const LoginPage = () => {  
    const [name, setName] = useState('');
    const handleName = (event) => {
        setName(event.target.value);
    };

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
        try {
            await axios.post('http://localhost:5011/login',{
                name: name,
                password: password.password,
            }, { withCredentials: true});
            navigate("../dashboard", { replace: true });
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
      direction="row"
      justifyContent="center"
      alignItems="center"   
      style={{ minHeight: '90vh' }}   
    >
        <Grid 
            item 
            sx={{
                mr: 1
            }}
        >
            <Box 
                component="img"
                sx={{ 
                    width: '50vw',
                    height: '100%',
                }}
                src={require('../pages/asset/10172.jpg')}
            />
        </Grid>
        <Grid item>
            <Grid 
                container
                spacing={0}
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item>
                    <Box sx={{ width: 300, mb: 1}}>
                        <Typography variant="h4" color="#00000" align='center' sx={{ fontWeight: 550 }}>
                            Welcome to DMS
                        </Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <Card sx={{ minWidth: 300,
                            background: 'rgba( 255, 255, 255, 0.3 )',
                            boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                            backdropFilter: "blur(1.5px)",
                            border: '1px solid rgba( 255, 255, 255, 0.18 )',
                        }}
                    >
                        <CardHeader
                            title="Login to continue"
                            style={{ textAlign: 'center', fontFamily: 'monospace', color: '#000'}} 
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
                                    value={name}
                                    onChange={handleName}
                                    helperText=""
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
                                    <FormHelperText id="outlined-weight-helper-text">{pesan}</FormHelperText>
                                </FormControl>
                                <Button variant="contained" color="primary" sx={{mt: 1}} size="large" onClick={Auth}>
                                Login
                                </Button>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>          
        </Grid>
    </Grid>
  )
}

export default LoginPage;