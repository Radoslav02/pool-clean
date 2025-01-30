import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import ShopHeader from "./components/WebShop/ShopHeader/ShopHeader";
import { ToastContainer } from 'react-toastify';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const isShop = location.pathname.startsWith("/shop");

  useEffect(() => {
    navigate("/početna");
  }, []);

  return (
    <div className="container-fluid">
      {isShop ? <ShopHeader /> : <> <Header /><Menu /></>}
      <Outlet />
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={1500} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ marginTop: "100px" }} 
        limit={1}
      />
    </div>
  )
}

export default App
