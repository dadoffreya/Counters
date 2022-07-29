import React, { useState, useEffect } from 'react';
import axios from "axios";
import jwt_decode from "jwt-decode";
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const [name, setName] = useState("");

  useEffect(() => {
    refreshToken();
    // eslint-disable-next-line
  }, []);

  const refreshToken = async () => {
    try {
        const response = await axios.get('http://localhost:5000/token');
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
    } catch (error) {
        if (error.response) {
            navigate("../");
            console.log(error);
        }
    }
  }

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(async (config) => {
    const currentDate = new Date();
    if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get('http://localhost:5000/token');
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  return (
    <div>
    <Navbar />
    <div>
      Home
      <br/>
      Welcome back : {name}
    </div>
    </div>
    
  )
}

export default MainPage;