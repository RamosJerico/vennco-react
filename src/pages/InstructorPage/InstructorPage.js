import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MainInstructor from '../../components/form-component/MainInstructor';

function InstructorPage() {
    return (
        <div className='instructor-container'>
            <Navbar />
                <MainInstructor />
            <Footer />
        </div>
    )
}
export default InstructorPage;