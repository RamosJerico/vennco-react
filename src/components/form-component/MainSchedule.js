import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from '../Popup';
import Button from '../Button';
import Notification from '../Notification';
import ConfirmModal from '../ConfirmModal';
import ScheduleForm from './ScheduleForm';
import useTable from '../table-component/useTable';
import { makeStyles, Paper, TableBody, TableRow, TableCell } from '@material-ui/core';
import * as ScheduleData from '../../Data/ScheduleData';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
}))
const styles = {
    iconStyles: {
        marginRight:'15px',
    },
    headerStyle: {
        justifyContent: 'center',
        display: ' flex',
    }
}

const headCells = [
    { id: 'subjectCode', label: 'Subject Code' },
    { id: 'description', label: 'Course Description' },
    { id: 'time', label: 'Time/Day', disableSorting: true },
    { id: 'units', label: 'Units', disableSorting: true },
    { id: 'roomId', label: 'Room No.' },
    { id: 'instructor', label: 'Instructor' },
    { id: 'actions', label: 'Actions', disableSorting: true }
]

function MainSchedule() {

    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [records, setRecords] = useState(ScheduleData.getAllSchedule());
    const [openPopup, setOpenPopup] = useState(false);
    const [notify, setNotify] = useState({
        isOpen: false, message:'', type:''
    });
    const [confirmDialog, setConfirmDialog] = useState({
        isOpen: false, title: '', subTitle: ''
    })

    const addOrEdit = (schedule, resetForm) => {
        if(schedule.id === 0)
            ScheduleData.insertSchedule(schedule)
        else
            ScheduleData.updateSchedule(schedule)
        resetForm();
        setRecordForEdit(null);
        setOpenPopup(false);
        setRecords(ScheduleData.getAllSchedule());
        setNotify ({
            isOpen: true,
            message: 'Submitted successfully!',
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
        ScheduleData.deleteSchedule(id);
        setRecords(ScheduleData.getAllSchedule())
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
            <h2 style={styles.headerStyle}>BSCS 3A</h2>
            <br/>
            <Button 
                buttonSize='btn--medium' 
                buttonStyle='btn--outline' 
                buttonColor='green' 
                onClick = {() => {
                    setOpenPopup(true); setRecordForEdit(null); 
                }}
            >
                <i className="fas fa-calendar-alt" style={styles.iconStyles}></i>
               Add Subject
            </Button>
            <Link to='/instructor'>
                <Button 
                    buttonSize='btn--medium' 
                    buttonStyle='btn--outline' 
                    buttonColor='green'
                >
                    Back
                </Button>
            </Link>
            <TblContainer>
                    <TblHead />
                    <TableBody>{
                        recordsAfterPagingSorting().map(item => 
                            (<TableRow key={item.id}>
                                <TableCell>{item.subjectCode}</TableCell>
                                <TableCell>{item.description}</TableCell>
                                <TableCell>{item.time}</TableCell>
                                <TableCell>{item.units}</TableCell>
                                <TableCell>{item.roomId}</TableCell>
                                <TableCell>{item.instructor}</TableCell>
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
                                                onConfirm: () => {
                                                    onDelete(item.id)
                                                }
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
                title='Add Subject'
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <ScheduleForm 
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
export default MainSchedule;
