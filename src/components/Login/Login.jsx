import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';




export default function Login() {

    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const navigate = useNavigate();
    const { login, loginWithGoogle,resetPassword } = useAuth();
    const [error, setError] = useState();


    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await login(user.email, user.password)
            navigate('/')
        } catch (error) {
            setError(error.message)
        }
    };
    const handleGoogleSignIn = async () => {
        try {
            await loginWithGoogle();
            navigate("/");
          } catch (error) {
            setError(error.message);
          }
        };
        const handleResetPassword = async (e) => {
            e.preventDefault();
            if (!user.email) return setError("Write an email to reset password");
            try {
              await resetPassword(user.email);
              setError('We sent you an email. Check your inbox')
            } catch (error) {
              setError(error.message);
            }
          };
    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleChange}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Button onClick={handleGoogleSignIn}>GOOGLE</Button>
                    <Grid container>
                        <Grid item xs>
                            <Button onClick={handleResetPassword}>
                                Forgot password?
                            </Button>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>

    );
}