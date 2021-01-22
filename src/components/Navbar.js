import React, {useState, useEffect} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from './Button';

function Navbar() {
    const[click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else {
            setButton(true);
        }
    }
    window.addEventListener('resize', showButton);
    useEffect( () => {
        showButton();
    }, []);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className='navbar'>
                <div className='navbar-container'>
                    <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
                        VennCo
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                            <Link to='/curriculum' className='nav-links' onClick={closeMobileMenu}>
                                Curriculum
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/schedule' className='nav-links' onClick={closeMobileMenu}>
                                Schedule
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/instructor' className='nav-links' onClick={closeMobileMenu}>
                                Instructor
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/subject' className='nav-links' onClick={closeMobileMenu}>
                                Subject
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/classroom' className='nav-links' onClick={closeMobileMenu}>
                                Classroom
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/classes' className='nav-links' onClick={closeMobileMenu}>
                                Classes and Section
                            </Link>
                        </li>
                        <li className='nav-btn'>
                        {button ? (
                                <Link to='/' onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline' buttonSize='btn--medium'>
                                        Logout
                                    </Button>
                                </Link>
                            ):(
                                <Link to='/' onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--primary' buttonSize='btn--mobile'>
                                        Logout
                                    </Button>
                                </Link>
                            )}
                        </li>
                        <h4 className='navbar-welcome'>Welcome, User!</h4>
                    </ul>
                    
                </div>
            </div>
        </IconContext.Provider>
        </>
    )
}
export default Navbar;
