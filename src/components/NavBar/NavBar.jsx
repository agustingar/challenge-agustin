
import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Button, Modal, Toolbar, Typography } from '@mui/material';
import { AuthContext } from "../../hooks/authContext";
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig'
import { useNavigate } from 'react-router-dom';
import Create from '../Create/Create';

function NavBar() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'black',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);


    const clickLogin = () => {
        if (currentUser) {
            signOut(auth);
        } else {
            navigate("/login");
        }
    };
    
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                        GIFS 4U
                    </Typography>

                    <Link
                        variant="button"
                        color="text.primary"
                        href="/"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        HOME
                    </Link>
                    {currentUser ?      <Link
                        style={{ color: 'black' }}
                        href="/galery"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Galery
                    </Link>
: ""}
                    {currentUser ?     <Button
                        style={{ color: 'black' }}
                        onClick={handleOpen}
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Upload Gif
                    </Button>
: ""}
                    <Modal

                        hideBackdrop
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="child-modal-title"
                     
                        aria-describedby="child-modal-description"
                    >
                        <Box sx={{ ...style, width: 400 }}>
                            <p id="child-modal-description">
                                <Create />
                            </p>
                            <Button style={{ color: 'white' }} onClick={handleClose}>Close X</Button>
                        </Box>
                    </Modal>
                    <div className="buttons">
                        <Button onClick={clickLogin}>
                            {currentUser ? "Log Out" : "Login"}
                        </Button>

                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}
export default NavBar