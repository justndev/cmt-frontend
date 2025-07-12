import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FilledButton from "@/components/buttons/FilledButton";
import OutlinedButton from "@/components/buttons/OutlinedButton";


interface AlertDialogProps {
    open: boolean;
    handleClose: () => void;
    handleAccept: () => void;
};

export default function AlertDialogDelete({ open, handleClose, handleAccept }: AlertDialogProps) {
    const title =  "Delete Campaign?";
    const description = "This will delete the campaign. But payouts still will be have to be paid."

    const actionButtonText= "Delete";

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {description}
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <OutlinedButton onClick={handleClose}>
                        Cancel
                    </OutlinedButton>

                    <FilledButton onClick={handleAccept}>
                        {actionButtonText}
                    </FilledButton>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
