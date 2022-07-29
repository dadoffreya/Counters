import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import PageApp from './components/pages/PageApp';
import InspectApp from './components/pages/InspectApp';
import Login from './components/pages/Login';
import axios from "axios";

function App() {
  axios.defaults.withCredentials = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/app' element={<PageApp />} />
        <Route path='/inspect' element={<InspectApp />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
