import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { logout } from "../../../store/session";
import { showModal, setCurrentModal } from '../../../store/modals'
import PostModal from '../PostModal'
import PhotoModal from '../PhotoModal'
import './NavBar.css'



const NavBar = () => {
  const dispatch = useDispatch();

  const onLogout = async (e) => {
    await dispatch(logout());
  };

  const makePost = () => {
    dispatch(setCurrentModal(PostModal))
    dispatch(showModal())
  }

  const addPhoto = () => {
    dispatch(setCurrentModal(PhotoModal))
    dispatch(showModal())
  }

  return (
    <nav className='nav-links-container'>
      <NavLink className='nav-link' to="/" exact={true} activeClassName="active">
        Home
          </NavLink>
      <div className='nav-link' onClick={addPhoto} exact={true} activeClassName="active">
        Upload Photo
          </div>

      <div className='nav-link' onClick={makePost} exact={true} activeClassName="active">
        Create Post
          </div>

      <NavLink className='nav-link' to="/" onClick={onLogout} exact={true} activeClassName="active">
        Log Out
          </NavLink>
    </nav>
  );
}

export default NavBar;
