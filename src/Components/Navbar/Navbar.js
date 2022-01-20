import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav1">
      <nav class="topnav" id="myTopnav">
        {/* navbar top */}
        <Link to="/" class="active w3-center w3-animate-left name">
          <i class="far fa-snowflake"></i> Data-Map
        </Link>
        {/* {/Website name and favicon/} */}
        <Link to="/about" class="bordered w3-center w3-animate-right ">
          About
        </Link>
        {/* linked to about page */}
        <Link to="/" class="bordered w3-center w3-animate-right ">
          Home
        </Link>
        {/* linked to home page */}
      </nav>
    </div>
  );
};

export default Navbar;