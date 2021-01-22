import React, {useState} from 'react'
import '../ClassesPage/Classes.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import AddSchedule from './AddSchedule';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Popup from '../../components/Popup';

const styles = {
    btnStyle: {
        justifyContent: 'center',
        display: 'flex'
    },
    linkStyle: {
        color: 'black',
        textDecoration: 'none'
    },
    iconStyle: {
        marginRight: '10px'
    }
}

function SchedulePage() {

    const [openPopup, setOpenPopup] = useState(false);

    return (
        <div>
            <Navbar />
            <div className='classes-page-container'>
                    <h2 className='class-header'>Pick a schedule</h2>
                    <div style={styles.btnStyle}>
                        <Button
                            onClick={() => {
                                setOpenPopup(true);
                            }}
                            buttonSize='btn--wide'
                            buttonStyle='btn--primary'
                            buttonColor='green'
                        >
                            <i className="fas fa-plus" style={styles.iconStyle}></i>
                            Add Schedule
                        </Button>
                    </div>
                    <div className='class-card-section'>
                        <div className='class-card-box'>
                            <Link to='/listofschedule' style={styles.linkStyle}>
                                <Card
                                    title='Details'
                                    header='schedule_1'
                                    body='insert_details_here'
                                />
                            </Link>
                        </div>
                        <div className='class-card-box'>
                            <Link to='/listofschedule' style={styles.linkStyle}>
                                <Card 
                                    title='Details'
                                    header='schedule_2'
                                    body='insert_details_here'
                                />
                            </Link>
                        </div>
                        <div className='class-card-box'>
                            <Link to='listofschedule' style={styles.linkStyle}>
                                <Card
                                    title='Details'
                                    header='schedule_3'
                                    body='insert_details_here'
                                />
                            </Link>
                        </div>
                    </div>
                    <div className='class-card-section'>
                        <div className='class-card-box'>
                            <Link to='listofschedule' style={styles.linkStyle}>
                                <Card
                                    title='Details'
                                    header='schedule_4'
                                    body='insert_details_here'
                                />
                            </Link>
                        </div>
                        <div className='class-card-box'>
                            <Link to='listofschedule' style={styles.linkStyle}>
                                <Card
                                    title='Details'
                                    header='schedule_5'
                                    body='insert_details_here'
                                />
                            </Link>
                        </div>
                        <div className='class-card-box'>
                            <Link to='listofschedule' style={styles.linkStyle}>
                                <Card
                                    title='Details'
                                    header='schedule_6'
                                    body='insert_details_here'
                                />
                            </Link>
                        </div>
                    </div>
                    <div className='class-card-section'>
                        <div className='class-card-box'>
                            <Link to='listofschedule' style={styles.linkStyle}>
                                <Card
                                    title='Details'
                                    header='schedule_7'
                                    body='insert_details_here'
                                />
                            </Link>
                        </div>
                        <div className='class-card-box'>
                            <Link to='listofschedule' style={styles.linkStyle}>
                                <Card
                                    title='Details'
                                    header='schedule_8'
                                    body='insert_details_here'
                                />
                            </Link>
                        </div>
                        <div className='class-card-box'>
                            <Link to='listofschedule' style={styles.linkStyle}>
                                <Card
                                    title='Details'
                                    header='schedule_9'
                                    body='insert_details_here'
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            <Popup
                title= 'Add Schedule'
                openPopup = {openPopup}
                setOpenPopup = {setOpenPopup}
            >
                <AddSchedule />
            </Popup>
            <Footer />
        </div>
    )
}
export default SchedulePage;
