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
                <img src={tslogo} width={350} height={93} alt="" to={"/"} />
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/" activeStyle={{ color:'blue' }}> </NavLink>
                <NavLink to="/workouts"  activeStyle={{ color: 'blue' }}>All Workouts</NavLink>
                <NavLink to="/log"  className="nav-link" activeStyle={{ color: 'blue' }}> Exercises</NavLink>
                <NavLink to="/create"  className="nav-link" activeStyle={{ color: 'blue' }}> Create Exercise Log</NavLink>

                <NavLink to="/login"  activeStyle={{ color: 'blue' }}> Sign In</NavLink>
                <NavBtn> <NavBtnLink to="/user">Create User</NavBtnLink> </NavBtn>

            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;