import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from '../Popup';
import Button from '../Button';
import Notification from '../Notification';
import ConfirmModal from '../ConfirmModal';
import InstructorForm from './InstructorForm';
import useTable from '../table-component/useTable';
import { makeStyles, Paper, TableBody, TableRow, TableCell } from '@material-ui/core';
import * as InstructorData from '../../Data/InstructorData';


const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
    headerStyle: {
        justifyContent: 'center',
        display: 'flex'
    },
}))
const styles = {
    iconStyles: {
        marginRight: '15px'
    },
}

const headCells = [
    { id: 'fullName', label: 'Instructor Name' },
    { id: 'email', label: 'Email Address' },
    { id: 'major', label: 'Major in' },
    { id: 'preferred', label: 'Preferred Time' },
    { id: 'mobile', label: 'Mobile No.', disableSorting: true },
    { id: 'department', label: 'Department', disableSorting: true },
    { id: 'actions', label: 'Actions', disableSorting: true },
]

function MainInstructor() {

    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [records, setRecords] = useState(InstructorData.getAllInstructor());
    const [openPopup, setOpenPopup] = useState(false);
    const [notify, setNotify] = useState({
        isOpen: false, message:'', type:''
    });
    const [confirmDialog, setConfirmDialog] = useState({
        isOpen:false, title: '', subTitle: ''
    })

    const addOrEdit = (instructor, resetForm) => {
        if(instructor.id === 0)
            InstructorData.insertInstructor(instructor)
        else
            InstructorData.updateInstructor(instructor)
        resetForm();
        setRecordForEdit(null);
        setOpenPopup(false);
        setRecords(InstructorData.getAllInstructor());
        setNotify ({
            isOpen: true,
            message:'Submitted successfully!',
            type:'success',
        })
    } 
    const openInPopup = item => {
        setRecordForEdit(item);
        setOpenPopup(true);
    }
    const onDelete = id => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        InstructorData.deleteInstructor(id);
        setRecords(InstructorData.getAllInstructor())
        setNotify ({
            isOpen: true,
            message: 'Delete successfully!',
            type: 'error',
        })        
    }

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingSorting,
    } = useTable(records, headCells);

    return (
        <>
            <Paper className={classes.pageContent}>
                <h2 className={classes.headerStyle}>List of Instructors</h2>
                <br/>
                <Button 
                    buttonSize='btn--medium' 
                    buttonStyle='btn--outline' 
                    buttonColor='green' 
                    onClick = {() => {setOpenPopup(true); setRecordForEdit(null); }}
                >
                <i className="fas fa-user-plus" style={styles.iconStyles}></i>
                    Add Instructor
                </Button>
                <TblContainer>
                        <TblHead />
                        <TableBody> {
                            recordsAfterPagingSorting().map(item => 
                                (<TableRow key={item.id}>
                                    <TableCell>{item.fullName}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.major}</TableCell>
                                    <TableCell>{item.preferred}</TableCell>
                                    <TableCell>{item.mobile}</TableCell>
                                    <TableCell>{item.department}</TableCell>
                                    <TableCell>
                                        <Button 
                                            onClick = {() => {
                                                openInPopup(item)
                                            }}
                                            buttonSize='btn--medium' 
                                            buttonStyle='btn--primary' 
                                            buttonColor='blue'
                                        >
                                            <i className="fas fa-user-edit"></i>
                                        </Button>
                                        <Button 
                                            onClick = {() => {
                                                setConfirmDialog({
                                                    isOpen: true,
                                                    title: 'Are you sure?',
                                                    subTitle: "This will be permanently deleted.",
                                                    onConfirm: () => {onDelete(item.id)}
                                                })
                                            }}
                                            buttonSize='btn--medium' 
                                            buttonStyle='btn--primary' 
                                            buttonColor='red'
                                        >
                                            <i className="fas fa-trash-alt"></i>
                                        </Button>
                                        <Link to='/myschedule'>
                                            <Button
                                                buttonSize='btn--medium'
                                                buttonSize='btn--primary'
                                                buttonColor='green'
                                            >
                                                View
                                            </Button>
                                        </Link>
                                    </TableCell>
                                </TableRow>)
                                )
                            }
                        </TableBody>
                </TblContainer>
                <TblPagination/>
            </Paper>
            <Popup
                title='Add Instructor'
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <InstructorForm
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit} />
            </Popup>
            <Notification 
                notify={notify}
                setNotify={setNotify}
            />
            <ConfirmModal 
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
        </>
    )
}
export default MainInstructor;