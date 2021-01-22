import React from 'react';
import '../ClassesPage/Classes.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button'
import Card from '../../components/Card';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const styles = {
    btn: {
        justifyContent: 'center',
        display: 'flex'
    },
    iconStyle: {
        marginRight: '10px'
    },
    linkStyle: {
        textDecoration: 'none',
        color: 'black'
    },
    btnStyle: {
        justifyContent: 'center',
        display: 'flex',
    }
}

function CurriculumPage() {
    return (
        <>
            <Navbar />
                <div className='classes-page-container'>
                    <h2 className='class-header'>Curriculum</h2>
                    <br/>
                    <div style={styles.btnStyle}>
                        <Button
                            buttonStyle='btn--primary'
                            buttonSize='btn--wide'
                            buttonColor='green'
                        >
                            Add Curriculum
                        </Button>
                    </div>
                    <div className='class-card-section'>
                        <div className='class-card-box'>
                            <Link to='/listofcurriculum' style={styles.linkStyle}>
                                <Card
                                    title='Details'
                                    header='Old Curriculum'
                                    body='BS Computer Science'
                                />
                            </Link>
                        </div>
                        <div className='class-card-box'>
                            <Link to='/listofcurriculum' style={styles.linkStyle}>
                            <Card
                                header='New Curriculum'
                                title='Details'
                                body='BS Computer Science'
                            />
                            </Link>
                        </div>
                    </div>
                    <div className='class-card-section'>
                        <div className='class-card-box'>
                            <Link to='/listofcurriculum' style={styles.linkStyle}>
                                <Card
                                    title='Details'
                                    header='Old Curriculum'
                                    body='BS Information Technology'
                                />
                            </Link>
                        </div>
                        <div className='class-card-box'>
                            <Link to='/listofcurriculum' style={styles.linkStyle}>
                            <Card
                                header='New Curriculum'
                                title='Details'
                                body='BS Information Technology'
                            />
                            </Link>
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    )
}
export default CurriculumPage;
