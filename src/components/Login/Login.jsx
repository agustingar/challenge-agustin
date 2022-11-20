import { signInWithEmailAndPassword ,signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../../firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Avatar, Box, Button, Container, createTheme, CssBaseline, TextField, ThemeProvider, Typography } from '@mui/material'


const theme = createTheme();
export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const login = e => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then()
            .catch(err => setError(err.message))
        navigate('/')
    }
    const loginWithGoogle = (e) => {
        e.preventDefault()
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then()
        .catch(err => setError(err.message))
        navigate('/')
      };
    

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
                    <Typography>Log in</Typography>
                    {error && <div className='auth__error'>{error}</div>}
                    <form onSubmit={login} name='login_form'>
                        <TextField
                            type='email'
                            value={email}
                            required
                            placeholder="Enter your email"
                            onChange={e => setEmail(e.target.value)} />

                        <TextField
                            type='password'
                            value={password}
                            required
                            placeholder='Enter your password'
                            onChange={e => setPassword(e.target.value)} />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Button  onClick={loginWithGoogle} fullWidth style={{textAlign: 'center', paddingBottom:20}}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/IOS_Google_icon.png"width={80} 
                alt="google icon" />
            </Button>
                    </form>
                    <Typography style={{color:'black'}}>
                        Don't have and account?
                        <Link to='/register' style={{color:'#1c6ebf' ,padding:'10px'}}>Create one here</Link>
                    </Typography>
                </Box>
            </Container>
        </ThemeProvider>
    )
}
