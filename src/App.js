import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import UserInfoPage from './pages/UserInfoPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-info" element={<UserInfoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
