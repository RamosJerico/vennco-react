import React, { useState } from 'react';
import Popup from '../Popup';
import Button from '../Button';
import Notification from '../Notification';
import ConfirmModal from '../ConfirmModal';
import ClassroomForm from './ClassroomForm';
import useTable from '../table-component/useTable';
import { makeStyles, Paper, TableBody, TableRow, TableCell } from '@material-ui/core';
import * as ClassroomData from '../../Data/ClassroomData';


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
    { id: 'roomId', label: 'Room ID' },
    { id: 'college', label: 'College' },
    { id: 'room', label: 'Room No' },
    { id: 'department', label: 'Department', disableSorting: true },
    { id: 'actions', label: 'Actions', disableSorting: true },
]


function MainClassroom() {

    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [records, setRecords] = useState(ClassroomData.getAllClassroom());
    const [openPopup, setOpenPopup] = useState(false);
    const [notify, setNotify] = useState({
        isOpen: false, message:'', type:''
    });
    const [confirmDialog, setConfirmDialog] = useState({
        isOpen:false, title: '', subTitle: ''
    })

    const addOrEdit = (classroom, resetForm) => {
        if(classroom.id === 0)
            ClassroomData.insertClassroom(classroom)
        else
            ClassroomData.updateClassroom(classroom)
        resetForm();
        setRecordForEdit(null);
        setOpenPopup(false);
        setRecords(ClassroomData.getAllClassroom());
        setNotify ({
            isOpen: true,
            message: ' Submitted successfully!',
            type: 'success',
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
        ClassroomData.deleteClassroom(id);
        setRecords(ClassroomData.getAllClassroom())
        setNotify ({
            isOpen: true,
            message: ' Delete successfully!',
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
                <h2 className={classes.headerStyle}>List of Classrooms</h2>
                <br/>
                <Button 
                    buttonSize='btn--medium' 
                    buttonStyle='btn--outline' 
                    buttonColor='green' 
                    onClick = {() => {setOpenPopup(true); setRecordForEdit(null); }}
                >
                <i className="fas fa-users" style={styles.iconStyles}></i>
                    Add Classroom
                </Button>
                <TblContainer>
                        <TblHead />
                        <TableBody>{
                            recordsAfterPagingSorting().map(item => 
                                (<TableRow key={item.id}>
                                    <TableCell>{item.roomId}</TableCell>
                                    <TableCell>{item.college}</TableCell>
                                    <TableCell>{item.room}</TableCell>
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
                                    </TableCell>
                                </TableRow>)
                                )
                            }
                        </TableBody>
                </TblContainer>
                <TblPagination/>
            </Paper>
            <Popup
                title= 'Add Classroom'
                openPopup = {openPopup}
                setOpenPopup = {setOpenPopup}
            >
                <ClassroomForm
                    recordForEdit = {recordForEdit}
                    addOrEdit={addOrEdit} />
            </Popup>
            <Notification 
                notify = {notify}
                setNotify = {setNotify}
            />
            <ConfirmModal 
                confirmDialog = {confirmDialog}
                setConfirmDialog = {setConfirmDialog}
            />
        </>
    )
}
export default MainClassroom;