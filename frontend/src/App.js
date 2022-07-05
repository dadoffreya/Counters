import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import PageApp from './components/pages/PageApp';
import InspectApp from './components/pages/InspectApp';
import LoginPage from './components/pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/app' element={<PageApp />} />
        <Route path='/inspect' element={<InspectApp />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
