import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import Card  from '../../components/Card'
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function HomePage() {
    const styles = {
        containerLightStyle: {
            width:'100%',
            height:'937px', 
            background:'#f1f1f1'
        },
        containerDarkStyle: {
            width:'100%', 
            height:'937px', 
            background:'#242424'
        },
        linkStyle: {
            textDecoration:'none', 
            color:'black'
        },
        iconStyles: {
            marginRight: '10px'
        }
    }
    
    return (
        <div className='home--container'>
        <Navbar />
            <div style={styles.containerLightStyle}>
                <div className='home--container-box'>
                    <div className='home--container-desc'>
                        <h3>VENNCO: BRINGING THINGS TOGETHER.</h3>
                        <h1>Faculty Loading System</h1>
                        <Link to='/schedule'>
                            <Button buttonSize='btn--wide' buttonStyle='btn--primary' buttonColor='green'>
                                <i className="fas fa-calendar-alt" style={styles.iconStyles}></i>
                                    Check schedule!
                            </Button>
                        </Link>
                    </div>
                    <div className='home--team-logo'>
                        <img src='/images/Cmp-logo.png' alt='' />
                    </div>
                </div>
                <div className='home--card-section'>
                    <div className='home--card-box'>
                        <Link to='/schedule' style={styles.linkStyle}>
                            <Card 
                                title='Schedule'
                                imageFile='/images/schedule-logo.png'
                                body='insert_details_here'
                            />
                        </Link>
                    </div>
                    <div className='home--card-box'>
                        <Link to='/instructor' style={styles.linkStyle} >
                            <Card 
                                title='Instructor'
                                imageFile='/images/instructor-logo.png'
                                body='insert_details_here'
                            />
                        </Link>
                    </div>
                    <div className='home--card-box'>
                        <Link to='/subject' style={styles.linkStyle}>
                            <Card 
                                title='Subject'
                                imageFile='/images/subject-logo.png'
                                body='insert_details_here'
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div style={styles.containerDarkStyle}>
                <div className='home--container-box-dark'>
                    <div className='home--container-box-desc'>
                        <div className='home--container-desc-dark'>
                            <div className='home--img-container-dark'>
                                <div className='home--wmsu-img-dark'>
                                    <img src='/images/wmsu_logo.png' alt='' />
                                </div>
                                <div className='home--ics-img-dark'>
                                    <img src='/images/ics.png' alt='' />
                                </div>
                            </div>
                            <div className='home--desc-details'>
                                <h1>Western Mindanao State University.</h1>
                                <p>
                                    <strong>
                                        The University for the Community
                                    </strong>
                                    <br/>
                                    The Western Mindanao State University today stands with the mandate of serving as a 
                                    flagship educational institution and increasing the access to quality education to a 
                                    er number of people in a more pluralistic social, economic and cultural setting. 
                                    It is further advance the philosophy that education remains to be the most potent tool 
                                    for change in the process of socio-economic development and shall serve as a lead 
                                    institution in the promotion of the same.
                                </p>
                                <br/>
                                <Link to='/instructor'>
                                    <Button buttonSize='btn--wide' buttonStyle='btn--primary' buttonColor='green'>
                                        <i className="fas fa-user-plus" style={styles.iconStyles}></i>
                                            Add instructor
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home--card-section-dark'>
                    <div className='home--card-box-dark'>
                        <Link to='/classroom' style={styles.linkStyle}>
                            <Card 
                                title='Classroom'
                                imageFile='/images/classroom-logo.png'
                                body='insert_details_here'
                            />
                        </Link>
                    </div>
                    <div className='home--card-box'>
                        <Link to='/classes' style={styles.linkStyle} >
                            <Card 
                                title='Classes and Section'
                                imageFile='/images/classes-section-logo.png'
                                body='insert_details_here'
                            />
                        </Link>
                    </div>
                </div>
            </div>
        <Footer />
        </div>
    )
}
export default HomePage;