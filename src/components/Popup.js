import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography } from '@material-ui/core';
import Button from '../components/Button';

const styles = {
    dialogTitleStyles: {
        display: 'flex'
    },
    typographyStyles: {
        flexGrow: '1'
    }
};

function Popup(props) {

    const {title, children, openPopup, setOpenPopup} = props;

    return (
        <Dialog open = {openPopup} maxWidth='md'>
            <DialogTitle>
                <div style={styles.dialogTitleStyles}>
                    <Typography variant='h4' component='div' style={styles.typographyStyles}>
                        {title}
                    </Typography>
                    <Button 
                        onClick ={() => {setOpenPopup(false)}} 
                        buttonSize='btn--medium' 
                        buttonStyle='btn--primary' 
                        buttonColor='red'
                    >
                        <i class="fas fa-window-close"></i>
                    </Button>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}
export default Popup;
