import { useState } from "react";
import "./Menu.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";

export default function Menu() {
  const [menuClicked, setMenuClicked] = useState<boolean>(false);
  const navigate = useNavigate();

  function toggleMenu() {
    const oldState = menuClicked;
    setMenuClicked(!oldState);
  }

  return (
    <div className="menu-bar-container">
      <div className="menu-wrapper">
        <div className="menu-item" onClick={() => navigate("/početna")}>
          Početna
        </div>
        <div className="menu-item" onClick={() => navigate("/hemija")}>Hemija</div>
        <div className="menu-item" onClick={() => navigate("/about")}>O nama</div>
        <div className="menu-item" onClick={() => navigate("/shop-početna")}>Shop</div>
        <div className="menu-item" onClick={() => navigate("/kontakt")}>Kontakt</div>
      </div>
      <span onClick={toggleMenu} className="menu-icon">
        {!menuClicked ? (
          <MenuIcon />
        ) : (
          <ArrowBackIcon id={menuClicked ? "active" : "inactive"} />
        )}
        <h1>LOGO</h1>
      </span>
      {menuClicked && (
        <div className="small-screen-wrapper">
          <div className="small-menu-item" onClick={() => navigate("/početna")}>
            Početna
          </div>
          <div className="small-menu-item" onClick={() => navigate("/hemija")}>Hemija</div>
          <div className="small-menu-item" onClick={() => navigate("/about")}>O nama</div>
          <div className="small-menu-item" onClick={() => navigate("/shop-početna")}>Shop</div>
          <div className="small-menu-item" onClick={() => navigate("/kontakt")}>Kontakt
          </div>
        </div>
      )}
    </div>
  );
}
