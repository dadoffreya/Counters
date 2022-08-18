import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import InspectApp from './components/pages/InspectApp';
import LoginPage from './components/pages/LoginPage';
import ChartsPage from './components/pages/ChartsPage';

function App() {
  const [bgcolor, setBgcolor] = useState("#ffffff");
  document.body.style.background = bgcolor;
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />}  />
        <Route path='/inspect' element={<InspectApp />} onClick={() => setBgcolor("#282c34")} />
        <Route path='/dashboard' element={<ChartsPage />} onClick={() => setBgcolor("#282c34")} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
