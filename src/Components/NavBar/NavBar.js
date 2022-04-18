import { faCediSign, faChessBoard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import './Navbar.css'


const NavBar = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='bg-light '>
            <div className='nav-container'>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='blog'>Blog</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='about'>About Me</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='contact'>Contact Me</NavLink>
                {
                    user ?
                        <button className='btn btn-link text-decoration-none fw-bold ' onClick={handleSignOut}>Sign Out</button>
                        :
                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='login'>Login</NavLink>
                }
            </div>
       </div>
    );
};

export default NavBar;