import React from 'react'
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-head'>
                    <p>VENNCO: BRINGING THINGS TOGETHER</p>
                </div>
                <div className='footer-items'>
                    <Link to='/about' className='items'>
                        <Button buttonSize='btn--medium' buttonStyle='btn--outline' className='btn-text'>
                            About Us
                        </Button>
                    </Link> 
                </div>
                <div className='footer-logo'>
                    <img src='/images/cmp-logo-white.png' alt='' />
                    <p>VennCo © 2020</p>
                </div>
            </div>
        </footer>
            
    )
}

export default Footer;
