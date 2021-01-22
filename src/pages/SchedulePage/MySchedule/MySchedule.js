import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Notification from '../../../components/Notification';
import Popup from '../../../components/Popup';
import Button from '../../../components/Button';
import ConfirmModal from '../../../components/ConfirmModal';
import MyScheduleForm from '../MySchedule/MyScheduleForm';
import useTable from '../../../components/table-component/useTable';
import { makeStyles, Paper, TableBody, TableRow, TableCell } from '@material-ui/core';
import * as MyScheduleData from './MyScheduleData';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
    headerStyle: {
        justifyContent: 'center',
        display: 'flex',
    },
    btnStyles: {
    }
}))
const styles = {
    iconStyles: {
        marginRight: '15px'
    },
}

const headCells = [
    { id: 'subjectCode', label: 'Subject Code' },
    { id: 'description', label: 'Description' },
    { id: 'time', label: 'Time/Day', disableSorting: true },
    { id: 'units', label: 'UNITS', disableSorting: true },
    { id: 'class', label: 'Class' },
    { id: 'room', label: 'Room No.' },
    { id: 'actions', label: 'Actions', disableSorting: true }
]

function MySchedule() {

    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [records, setRecords] = useState(MyScheduleData.getAllMyschedule());
    const [openPopup, setOpenPopup] = useState(false);
    const [notify, setNotify] = useState({
        isOpen: false, message:'', type:''
    });
    const [confirmDialog, setConfirmDialog] = useState({
        isOpen:false, title: '', subTitle: ''
    })

    const addOrEdit = (myschedule, resetForm) => {
        if(myschedule.id === 0)
            MyScheduleData.insertMyschedule(myschedule)
        else
            MyScheduleData.updateMyschedule(myschedule)
            resetForm();
            setRecordForEdit(null);
            setOpenPopup(false);
            setRecords(MyScheduleData.getAllMyschedule());
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
        MyScheduleData.deleteMyschedule(id);
        setRecords(MyScheduleData.getAllMyschedule())
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
                <h2 className={classes.headerStyle}>My Schedule</h2>
                <br/>
                <Button
                    className={classes.btnStyles}
                    buttonSize='btn--medium' 
                    buttonStyle='btn--outline' 
                    buttonColor='green' 
                    onClick = {() => {setOpenPopup(true); setRecordForEdit(null); }}
                >
                    <i className="fas fa-book-reader" style={styles.iconStyles}></i>
                    Add Class
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
                        <TableBody> {
                            recordsAfterPagingSorting().map(item => 
                                (<TableRow key={item.id}>
                                    <TableCell>{item.subjectCode}</TableCell>
                                    <TableCell>{item.description}</TableCell>
                                    <TableCell>{item.time}</TableCell>
                                    <TableCell>{item.units}</TableCell>
                                    <TableCell>{item.class}</TableCell>
                                    <TableCell>{item.room}</TableCell>
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
                title='Add Class'
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <MyScheduleForm
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
export default MySchedule;