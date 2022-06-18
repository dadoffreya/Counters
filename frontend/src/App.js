import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import PageApp from './components/pages/PageApp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/app' element={<PageApp />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
