import {useRef} from "react";
import "../Styles/main.css"
import { Outlet, Link } from "react-router-dom";

function Navbar(params) {
    const navRef = useRef();

    return(
        <><header>
            <h3>TPIBS</h3>
            <nav ref={navRef}>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                <Link to="/demo">DevPanel</Link>
            </nav>
        </header><Outlet /></>
    );
}

export default Navbar;