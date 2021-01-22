import React from 'react';
import './App.css';
import  {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './pages/HomePage/HomePage';
import CurriculumPage from './pages/CurriculumPage/CurriculumPage'
import ListofCurriculum from './pages/CurriculumPage/ListofCurriculum/ListofCurriculum';
import SchedulePage from './pages/SchedulePage/SchedulePage';
import ListOfSchedule from './pages/SchedulePage/ListOfSchedule/ListOfSchedule';
import MySchedulePage from './pages/SchedulePage/MySchedule/MySchedulePage';
import InstructorPage from './pages/InstructorPage/InstructorPage';
import SubjectPage from './pages/SubjectPage/SubjectPage';
import ClassroomPage from './pages/ClassroomPage/ClassroomPage';
import ClassesPage from './pages/ClassesPage/ClassesPage';
import About from './pages/FooterPage/AboutPage/About';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Login}/>
          <Route path='/home' component={HomePage}/>
          <Route path='/curriculum' component={CurriculumPage}/>
              <Route path='/listofcurriculum' component={ListofCurriculum} />
          <Route path='/schedule' component={SchedulePage}/>
              <Route path='/listofschedule' component={ListOfSchedule}/>
              <Route path='/myschedule' component={MySchedulePage}/>
          <Route path='/instructor' component={InstructorPage}/>
          <Route path='/subject' component={SubjectPage}/>
          <Route path='/classroom' component={ClassroomPage}/>
          <Route path='/classes' component={ClassesPage}/>
          <Route path='/about' component={About}/>
        </Switch>
      </Router>
    </>
  )
}
export default App; 
