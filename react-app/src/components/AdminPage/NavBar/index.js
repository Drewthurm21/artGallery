import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { logout } from "../../../store/session";
import './NavBar.css'
const NavBar = () => {
  const dispatch = useDispatch();
  
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return (
    <nav className='nav-links-container'>
        <NavLink className='nav-link' to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        <NavLink className='nav-link' to="/" exact={true} activeClassName="active">
          Create Post
          </NavLink>
       
        <NavLink className='nav-link' to="/" onClick={onLogout} exact={true} activeClassName="active">
          Log Out
          </NavLink>
    </nav>
  );
}

export default NavBar;
