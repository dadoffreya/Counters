import React, { useState, useEffect} from 'react';
import Navbar from '../Navbar';
import axios from "axios";
import jwt_decode from "jwt-decode";

const MainPage = () => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');

  useEffect(()=> {
    refreshToken();
  }, [])

  const refreshToken = async() => {
    try {
      const response = await fetch('http://localhost:5000/token', {method: 'GET', credentials: "include"});
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      console.log(decoded);
    } catch (error) {
      
    }
  }

  return (
    <div>
    <Navbar />
    <div>
      <h1>
        Welcome Back: 
      </h1>
    </div>
    </div>
    
  )
}

export default MainPage;