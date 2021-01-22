import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { Grid, Paper, TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

const styles = {
    paperStyle: {
        padding:'20px', height:'60vh', width:350, margin:'20px 300px', marginLeft:'-5px', float:'right'
    },
    imageStyle: {
        height:'70px', width:'70px', marginTop:'30px'
    },
    linkStyle: {
        textDecoration:'none'
    },
    btnStyle: {
        marginTop:'10px', background:'#0c7513'
    },
};

function Login() {
    
    return (
        <div className='login-container'>
            <div className='login-container-box'>
                <div className='login-image'>
                    <img src='/images/cmp-logo-only.png' alt='' />
                </div>
                <div className='login-desc'>
                    <h1>Faculty Loading System.</h1>
                    <h3>Western Mindanao State University</h3>
                    <h4>Institute of Computer Studies</h4>
                </div>
                <Grid>
                    <Paper elevation={10} style={styles.paperStyle}>
                        <form>
                            <Grid align='center'>
                                <img src='/images/cmp-logo-only.png' style={styles.imageStyle} alt='' />
                                <h2>VennCo</h2>
                                <h4>Faculty Loading System</h4>
                            </Grid>
                            <TextField 
                                type='text' 
                                label='Username' 
                                placeholder='Enter username' 
                                fullWidth  required
                            />
                            <TextField 
                                type='password' 
                                label='Password' 
                                placeholder='Enter password' 
                                fullWidth  required
                            />
                            <Link to='/home' style={styles.linkStyle}>
                                <Button type='submit' style={styles.btnStyle} color='primary' variant='contained' fullWidth>
                                    Login
                                </Button>
                            </Link>
                            <Link to='/' className='login-forgot-password'>
                                Forgot password?
                            </Link>
                        </form>
                    </Paper>
                </Grid>
            </div>
            <div className='school-links'>
                <div className='wmsu'>
                    <a href='https://wmsu.edu.ph/' className='wmsu-link'>
                        <img className='wmsu-img' src='/images/wmsu_logo.png' alt='' />
                        Western Mindanao State University
                    </a>
                </div>
                <div className='ics'>
                    <a href='https://www.facebook.com/wmsuics2017/' className='ics-link'>
                        <img className='ics-img' src='/images/ics.png' alt='' />
                        Institute of Computer Studies
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Login;
