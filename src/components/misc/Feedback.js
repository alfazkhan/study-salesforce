import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import FeedbackIcon from '@mui/icons-material/Feedback';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import JotFormReact from 'jotform-react';

import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

function Hidden() {
    const mobile = window.innerWidth < 768
    return (
        <div style={{
            backgroundColor: '#fff',
            height: 50,
            width: mobile ? window.innerWidth : window.innerWidth / 2,
            bottom: 50,
            position: 'relative'
        }}></div>
    )
}


export default function Feedback() {

    const [open, setOpen] = React.useState(false)


    const handleClose = () => {
        setOpen(false)
    };
    const mobile = window.innerWidth < 768


    return (
        <>
            <Dialog onClose={handleClose} open={open}>
                {/* <DialogTitle>Set backup account</DialogTitle> */}
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        color: 'red',
                        marginLeft: 'auto',
                        border: '1px solid red',
                        marginRight:2,
                        marginTop:2
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <JotFormReact
                    formURL="https://form.jotform.com/220808741357458"
                    initialHeight={300}
                    autoResize={true}
                    style={{
                        width: mobile ? window.innerWidth : window.innerWidth / 3,
                        overflowY: 'scroll'
                    }}
                    tw="mx-auto"

                />
                <Hidden />
            </Dialog>
            <Fab color="primary" aria-label="add" variant='extended' onClick={() => { setOpen(true) }}
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    right: 0,
                    marginBottom: 3
                }}
            >
                <FeedbackIcon />
                &nbsp;Feedback
            </Fab>
        </>
    );
}
