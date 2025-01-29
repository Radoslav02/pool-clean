import { Outlet, useNavigate } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/početna");
  }, []);

  return (
    <div className="container-fluid">
      <Header />
      <Menu />
      <Outlet />
      <Footer />
     
    </div>
  )
}

export default App
