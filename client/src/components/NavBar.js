import { Link } from "react-router-dom"

function NavBar () {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/admin">Admin</Link>
            <Link to="/detail">Detail</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default NavBar