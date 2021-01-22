import React from 'react';
import { makeStyles, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
    root: {
        top: theme.spacing(11)
    }
}))

function Notification(props) {

    const classes = useStyles();
    const {notify, setNotify} = props;
    const handleClose = () => {
        setNotify({
            ...notify,
            isOpen: false
        })
    }

    return (
        <Snackbar
            className={classes.root}
            open={notify.isOpen}
            autoHideDuration={3000}
            anchorOrigin={{vertical:'top', horizontal:'center'}}
            onClose={handleClose}
        >
            <Alert 
                severity={notify.type}
                onClose={handleClose}
            >
                {notify.message}
            </Alert>
        </Snackbar>
    )
}
export default Notification;