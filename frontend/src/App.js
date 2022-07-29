import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import MainPage from './components/pages/MainPage';
import PageApp from './components/pages/PageApp';
import InspectApp from './components/pages/InspectApp';
import LoginPage from './components/pages/LoginPage';

function App() {
  const [bgcolor, setBgcolor] = useState("linear-gradient(to right, #9442FE, #3378FF)")
  document.body.style.background = bgcolor;
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />}  />
        <Route path='/app' element={<PageApp />} onClick={() => setBgcolor("#9c27b0")} />
        <Route path='/inspect' element={<InspectApp />} onClick={() => setBgcolor("#282c34")} />
        <Route path='/main' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
