import React, { useState} from 'react';
import './Classes.css'
import AddClass from './AddClass';
import Popup from '../../components/Popup';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Card from '../../components/Card';

const styles = {
    btnStyle: {
        justifyContent: 'center',
        display: 'flex'
    },
    iconStyle: {
        marginRight: '10px'
    }
}

function ClassesPage() {
    
    const [openPopup, setOpenPopup] = useState(false);

    return (
        <>
            <Navbar />
                <div className='classes-page-container'>
                    <h2 className='class-header'>Classes and Section</h2>
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
                            Add Class
                        </Button>
                    </div>
                    <div className='class-card-section'>
                        <div className='class-card-box'>
                            <Card
                                title='Details'
                                imageFile='/images/BSCS3A.png'
                                body= 'Instructor: Jerico James Ramos'
                                    list1='insert_details_here'
                            />
                        </div>
                        <div className='class-card-box'>
                            <Card
                                title='Details'
                                imageFile='/images/BSCS3A.png'
                                body= 'Instructor: Jerico James Ramos'
                                    list1='insert_details_here'
                            />
                        </div>
                        <div className='class-card-box'>
                            <Card
                                title='Details'
                                imageFile='/images/BSCS3A.png'
                                body= 'Instructor: Jerico James Ramos'
                                list1='insert_details_here'
                            />
                        </div>
                    </div>
                    <div className='class-card-section'>
                        <div className='class-card-box'>
                            <Card
                                title='Details'
                                imageFile='/images/BSCS3A.png'
                                body= 'Instructor: Jerico James Ramos'
                                    list1='insert_details_here'
                            />
                        </div>
                        <div className='class-card-box'>
                            <Card
                                title='Details'
                                imageFile='/images/BSCS3A.png'
                                body= 'Instructor: Jerico James Ramos'
                                list1='insert_details_here'
                            />
                        </div>
                        <div className='class-card-box'>
                            <Card
                                title='Details'
                                imageFile='/images/BSCS3A.png'
                                body= 'Instructor: Jerico James Ramos'
                                list1='insert_details_here'
                            />
                        </div>
                    </div>
                    <div className='class-card-section'>
                        <div className='class-card-box'>
                            <Card
                                title='Details'
                                imageFile='/images/BSCS3A.png'
                                body= 'Instructor: Jerico James Ramos'
                                list1='insert_details_here'
                            />
                        </div>
                        <div className='class-card-box'>
                            <Card
                                title='Details'
                                imageFile='/images/BSCS3A.png'
                                body= 'Instructor: Jerico James Ramos'
                                list1='insert_details_here'
                            />
                        </div>
                        <div className='class-card-box'>
                        <Card
                                title='Details'
                                imageFile='/images/BSCS3A.png'
                                body= 'Instructor: Jerico James Ramos'
                                list1='insert_details_here'
                            />
                        </div>
                    </div>
                </div>
                <Popup
                    title='Add Class'
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}
                >
                    <AddClass />
                </Popup>
            <Footer />
        </>
    )
}
export default ClassesPage;
