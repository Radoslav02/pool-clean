
import App from "./App";
import { createHashRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import ShopHome from "./components/WebShop/ShopHome/ShopHome";
import Cart from "./components/WebShop/Cart/Cart";
import LoginPage from "./components/WebShop/LogIn/LogIn";
import RegisterForm from "./components/WebShop/Register/Register";
import PrivateRoute from "./components/WebShop/PrivateRoute/PrivateRoute";
import ProfilePage from "./components/WebShop/UserProfile/ProfilePage";
import AdminPanel from "./components/WebShop/AdminPanel/AdminPanel";
import Order from "./components/WebShop/Order/Order";
import ItemDetails from "./components/WebShop/ItemDetails/ItemDetails";
import Confirmation from "./components/WebShop/Confirmation/Confirmation";
import Chemicals from "./components/Chemicals/Chemicals";
import AboutUs from "./components/AboutUs/AboutUs";

export const router = createHashRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/početna",
          element: <Home />,
        },
        {
          path: "/kontakt",
          element: <Contact />,
        },
        {
          path: "/shop-početna",
          element: <ShopHome />,
        },
        {
          path: "/shop-korpa",
          element: <Cart />,
        },
      {
        path: "/shop-prijava",
        element: <LoginPage />,
      },
      {
        path: "/shop-registracija",
        element: <RegisterForm />,
      },
      {
        path: "/shop-profil",
        element: (
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        ),
      },
      {
        path: "/shop/admin/panel",
        element: (
          <PrivateRoute adminOnly>
            <AdminPanel />
          </PrivateRoute>
        ),
      },
      {
        path: "/shop-potvrda",
        element: <Confirmation />
      },
      {
        path: "/shop/proizvod/:productId", 
        element: <ItemDetails />,
      },
      {
        path: "/shop/poručivanje", 
        element: <Order />, 
      },
      {
        path: "/hemija", 
        element: <Chemicals />, 
      },
      {
        path: "/about", 
        element: <AboutUs />, 
      }
    ],
},
]);