
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
      <div className="nav1">
        <nav class="topnav" id="myTopnav">
        <Link to="/" class="active w3-center w3-animate-left " ><i class="fa fa-file-movie-o active"></i>Data-Map</Link>
        <Link to="/about" class="bordered w3-center w3-animate-right " >About</Link>
        <Link to="/" class="bordered w3-center w3-animate-right " >Home</Link>
        </nav>
        </div>
      );
}
 
export default Navbar;