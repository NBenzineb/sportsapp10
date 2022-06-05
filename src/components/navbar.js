import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import tslogo from '../styles/tslogo.png'   
import "../styles/navbar.css"; 

import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                {/* <img src={tslogo} /> */}
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/" activeStyle={{ color:'blue' }}> </NavLink>
                <NavLink to="/workouts"  activeStyle={{ color: 'blue' }}>All Workouts</NavLink>
                <NavLink to="/myworkouts" activeStyle={{ color: 'black' }} >My Workouts </NavLink>
                <NavLink to="/signin"  activeStyle={{ color: 'black' }}> Sign In</NavLink>
                <NavLink to="/"  className="nav-link" activeStyle={{ color: 'black' }}> Exercises</NavLink>
                <NavLink to="/create"  className="nav-link" activeStyle={{ color: 'black' }}> Create Exercise Log</NavLink>
                <NavLink to="/user"  className="nav-link" activeStyle={{ color: 'black' }}> Create User</NavLink>
                <NavBtn> <NavBtnLink to="/sign-up">Sign Up</NavBtnLink> </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;