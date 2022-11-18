import { auth } from '../../firebaseConfig'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../hooks/authContext'
import { Avatar, Button, createTheme, CssBaseline, TextField, ThemeProvider, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'

const theme = createTheme();
export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { setTimeActive } = useAuthValue()

    const validatePassword = () => {
        let isValid = true
        if (password !== '' && confirmPassword !== '') {
            if (password !== confirmPassword) {
                isValid = false
                setError('Passwords does not match')
            }
        }
        return isValid
    }

    const register = e => {
        e.preventDefault()
        setError('')
        if (validatePassword()) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            setTimeActive(true)
                            navigate('/verify-email')
                        }).catch((err) => alert(err.message))
                })
                .catch(err => setError(err.message))
        }
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    return (
        <ThemeProvider theme={theme}>
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
               <Avatar sx={{ m: 1, bgcolor: 'primary.main' }} />
                    <Typography>Register</Typography>
                {error && <div className='auth__error'>{error}</div>}
                <form onSubmit={register} name='registration_form'>
                    <TextField
                        type='email'
                        value={email}
                        placeholder="Enter your email"
                        required
                        fullWidth
                        onChange={e => setEmail(e.target.value)} />

                    <TextField
                        type='password'
                        value={password}
                        required
                        placeholder='Enter your password'
                        onChange={e => setPassword(e.target.value)} />

                    <TextField
                        type='password'
                        value={confirmPassword}
                        required
                        placeholder='Confirm password'
                        onChange={e => setConfirmPassword(e.target.value)} />

<Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Register
                        </Button>
                </form>
                <Typography style={{color:'black'}}>
                    Already have an account?
                    <Link to='/login' style={{color:'#1c6ebf', padding:'10px'}}>login</Link>
                </Typography>
            </Box>
            </Container>
            </ThemeProvider>
       
    )
}