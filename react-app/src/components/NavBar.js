import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './navbar.css'
const NavBar = () => {
  return (
    <nav>
      <div>
        <NavLink to="/" exact={true} activeClassName="active">
          Home
          </NavLink>
      </div>
      <div>
        <NavLink to="/sign-up" exact={true} activeClassName="active">
          Sign Up
          </NavLink>
      </div>
      <div>
        <NavLink to="/users" exact={true} activeClassName="active">
          Users
          </NavLink>
      </div>
      <div>
        <LogoutButton />
      </div>

    </nav>
  );
}

export default NavBar;
