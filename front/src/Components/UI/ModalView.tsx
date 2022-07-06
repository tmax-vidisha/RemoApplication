/* eslint-disable */
import * as React from 'react';
import Box, { Paper } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface IModalViewProps {
    value: boolean
    children: React.ReactNode
}

const BasicModal: React.FC<IModalViewProps> = (props: IModalViewProps) => {
    const { value, children } = props

    const [open, setOpen] = React.useState(value);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Paper>
                    {children}
                </Paper>
            </Dialog>
        </div>
    );
}

export default BasicModal;