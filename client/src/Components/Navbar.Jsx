import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/gallery" className="nav-link">Gallery</Link>
        </nav>
    );
}

export default Navbar;
