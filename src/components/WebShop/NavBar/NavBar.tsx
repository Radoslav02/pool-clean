import { useNavigate } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="nav-bar-container">
      <div className="nav-item" onClick={() => navigate("/shop-početna")}>
        <h3>Početna</h3>
      </div>
      
    </div>
  );
}
