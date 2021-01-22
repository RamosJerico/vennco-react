import React, { useState } from 'react';
import Popup from '../Popup';
import Button from '../Button';
import Notification from '../Notification';
import ConfirmModal from '../ConfirmModal';
import SubjectForm from './SubjectForm';
import useTable from '../table-component/useTable';
import { makeStyles, Paper, TableBody, TableRow, TableCell } from '@material-ui/core';
import * as SubjectData from '../../Data/SubjectData';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
}))
const styles = {
    iconStyles: {
        marginRight:'15px'
    },
    headerStyle: {
        justifyContent: 'center',
        display: ' flex'
    }
}

const headCells = [
    { id: 'subjectCode', label: 'Subject Code' },
    { id: 'description', label: 'Course Description' },
    { id: 'units', label: 'Units', disableSorting: true },
    { id: 'actions', label: 'Actions', disableSorting: true }
]

function MainSubject() {

    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [records, setRecords] = useState(SubjectData.getAllSubject());
    const [openPopup, setOpenPopup] = useState(false);
    const [notify, setNotify] = useState({
        isOpen: false, message:'', type:''
    });
    const [confirmDialog, setConfirmDialog] = useState({
        isOpen: false, title: '', subTitle: ''
    })
    const addOrEdit = (subject, resetForm) => {
        if(subject.id === 0)
            SubjectData.insertSubject(subject)
        else
            SubjectData.updateSubject(subject)
        resetForm();
        setRecordForEdit(null);
        setOpenPopup(false);
        setRecords(SubjectData.getAllSubject());
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
        SubjectData.deleteSubject(id);
        setRecords(SubjectData.getAllSubject())
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
            <h2 style={styles.headerStyle}>List of Subjects</h2>
            <br/>
            <Button 
                buttonSize='btn--medium' 
                buttonStyle='btn--outline' 
                buttonColor='green' 
                onClick = {() => {
                    setOpenPopup(true); setRecordForEdit(null); 
                }}
            >
                <i className="fas fa-book" style={styles.iconStyles}></i>
               Add Subject
            </Button>
            <TblContainer>
                    <TblHead />
                    <TableBody>{
                        recordsAfterPagingSorting().map(item => 
                            (<TableRow key={item.id}>
                                <TableCell>{item.subjectCode}</TableCell>
                                <TableCell>{item.description}</TableCell>
                                <TableCell>{item.units}</TableCell>
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
                                                subTitle: "This will be permanently deleted",
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
                <SubjectForm 
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
export default MainSubject;