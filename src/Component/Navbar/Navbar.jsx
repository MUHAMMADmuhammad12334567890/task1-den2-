import React from 'react';
import './navbar.module.css'
import PropTypes  from "prop-types";

const Navbar = () => {
    return (
        <nav>
            <ul>
             <li><a href="/">Гаджеты и аксесуары</a></li>
             <hr />
             <li><a href="/">Бытовая техника</a></li>
             <hr />
             <li><a href="/">Прочее</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;

