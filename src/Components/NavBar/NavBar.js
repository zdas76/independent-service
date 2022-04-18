import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
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
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand href="/home" className='fw-bold'>Tax Lawyer bangladesh</Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
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
                        </Nav>    
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>    
            <div className='nav-container'>
                
            </div>
       </div>
    );
};

export default NavBar;