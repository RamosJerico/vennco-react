import React from 'react';
import './About.css';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Card from '../../../components/Card';

function About() {
    return (
        <>
            <Navbar />
            <div className='about-container'>
                <h2 className='about-header'>THE VENNCO TEAM</h2>
                <div className='about-card-section'>
                    <div className='about-card-box'>
                        <Card 
                            title='UI/UX Designer'
                            imageFile='/images/ramos.jpg'
                            body='Jerico James A Ramos'
                            list1='BSCS 3A'
                        />
                    </div>
                    <div className='about-card-box'>
                        <Card 
                            title='Lead Developer'
                            imageFile='/images/berondo.png'
                            body='Ronie Anthony Berondo'
                            list1='BSCS 3A'
                        />
                    </div>
                    <div className='about-card-box'>
                        <Card 
                            title='Quality Assurance Engineer'
                            imageFile='/images/sularte.jpg'
                            body='Feljan Sularte'
                            list1='BSCS 4'
                        />
                    </div>
                </div>
                <div className='about-card-section_2'>
                    <div className='about-card-box'>
                        <Card 
                            title='Business Analyst'
                            imageFile='/images/poblacion.jpg'
                            body='Maris Albeth Poblacion'
                            list1='BSCS 3A'
                        />
                    </div>
                    <div className='about-card-box'>
                        <Card 
                            title='Project Manager'
                            imageFile='/images/kipli.jpg'
                            body='Ibrahim Kipli'
                            list1='BSCS 4'
                        />
                    </div>
                    <div className='about-card-box'>
                        <Card 
                            title='Software Architect'
                            imageFile='/images/caraecle.jpg'
                            body='Ella Jane Carecle'
                            list1='BSCS 3A'
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default About;