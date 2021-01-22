import React from 'react';
import { Dialog, DialogActions, DialogTitle, DialogContent, Typography} from '@material-ui/core';
import Button from './Button';

function ConfirmModal(props) {
    const {confirmDialog, setConfirmDialog} = props;

    return (
        <Dialog open={confirmDialog.isOpen}>
            <DialogTitle>
                Delete
            </DialogTitle>
            <DialogContent>
                <Typography variant='h4'>
                    {confirmDialog.title}
                </Typography>
                <Typography variant='h6'>
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick = {confirmDialog.onConfirm}
                    buttonSize='btn--medium' 
                    buttonStyle='btn--primary' 
                    buttonColor='green'
                >
                    Yes
                </Button>
                <Button 
                    onClick ={() => setConfirmDialog({...confirmDialog, isOpen: false})}
                    buttonSize='btn--medium' 
                    buttonStyle='btn--primary' 
                    buttonColor='red'
                >
                    No
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default ConfirmModal;