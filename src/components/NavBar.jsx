import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/images/resellme-logo.svg";
import { ReactComponent as Sun } from "../assets/images/sun.svg";
import { ReactComponent as Tabler } from "../assets/images/tabler_window.svg";
import DarkMode from "./DarkMode/DarkMode";


const NavBar = () => {
    const [active, setActive] = useState(false);

    return (
        <header>
            <div className="nav">
                <div className="logo">
                    <Link to='/'><Logo className="logo-img" /></Link>
                </div>
                <ul>
                    <li><NavLink to="/">Docs</NavLink></li>
                    <li><NavLink to="/">Blog</NavLink></li>
                    <li><NavLink to="/">About Us</NavLink></li>
                </ul>
            </div>
            <div className="nav2">
                <ul>
                    <li>
                        <NavLink to="/">Support<Tabler className="tabler" /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Portal<Tabler className="tabler" /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Register<Tabler className="tabler" /></NavLink>
                    </li>
                    {/* <li><Sun onClick={toggleTheme} /></li> */}
                    <DarkMode/>
                    <li><input type="search" placeholder="Search" /></li>
                </ul>
            </div>
            <div onClick={() => { setActive(!active); }} className={active ? "hamburger active" : "hamburger"}>
                <p>Menu</p>
                <p className="lastP">Close</p>
                <div className="menu">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;