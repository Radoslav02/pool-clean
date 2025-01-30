import "./ShopHeader.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Redux/store";
import { setSearchQuery } from "../../Redux/searchSlice";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const isAdmin = user?.isAdmin;
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.length;

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <div className="shop-header-container">
      <div className="shop-logo-container" onClick={() => navigate("/shop-početna")}>
        <h1>My company</h1>
      </div>
      <div className="shop-search-container">
        <input
          className="shop-search-input"
          type="text"
          placeholder="Pretražite ovde"
          onChange={handleSearchChange}
        />
        <div className="shop-search-icon-container">
          <SearchOutlinedIcon sx={{ fontSize: 30 }} />
        </div>
      </div>
      <div className="shop-header-menu-container">
        <div
          className="shop-cart-header-container"
          onClick={() => navigate("/shop-korpa")}
        >
          <ShoppingCartOutlinedIcon sx={{ fontSize: 40 }} />
          {totalItems > 0 && (
            <span className="shop-cart-quantity">{totalItems}</span>
          )}
          <label className="shop-header-menu-label">Korpa</label>
        </div>
        <div
          className="shop-login-container"
          onClick={() => navigate(user ? "/shop-profil" : "/shop-prijava")}
        >
          <AccountCircleOutlinedIcon sx={{ fontSize: 40 }} />
          <label className="shop-header-menu-label">
            {user ? "Profil" : "Prijava"}
          </label>
        </div>
        {isAdmin && (
          <div
            className="shop-admin-icon-container"
            onClick={() => navigate("/shop/admin/panel")}
          >
            <AdminPanelSettingsOutlinedIcon sx={{ fontSize: 40 }} />
            <label className="shop-header-menu-label">Admin</label>
          </div>
        )}
      </div>
    </div>
  );
}
