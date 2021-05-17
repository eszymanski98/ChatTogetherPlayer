import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navContainer">
    <div className="navLogoText">
      <Link className ="backHome" to="/">←</Link>
    </div>
  </nav>
);

export default Navbar;
