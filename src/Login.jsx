import { FormGroup, TextField, Button, Card, CardContent, Alert } from '@mui/material';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { UseAuth } from './contexts/AuthContext';

const Login = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const {Login} = UseAuth()
    const [error, setError] = useState('')
    const [loading, setLoading]=useState(false)

    async function HandleSubmit(e) {
        e.preventDefault()

        try {
            setLoading(true)
            setError('')
            await Login(emailRef.current.value, passwordRef.current.value)
            setLoading(false)
            window.location.replace('/')

        } catch (error) {
            setError("Failed to log in")
            setLoading(false)

        }
    }


    return (
        <>
            <Card sx={{ width: 500, m: 1, p: 1 }}>
                {error && <Alert severity="error">{error}</Alert>}
                
                <CardContent>
                    <form onSubmit={HandleSubmit}>
                        <FormGroup>
                            <h1>Log In</h1>
                            <TextField
                                id="outlined-email-input"
                                label="Email"
                                type="email"
                                sx={{ mb: 2, mt: 2 }}
                                inputRef={emailRef}
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                sx={{ mb: 2 }}
                                inputRef={passwordRef}
                            />
                            <Button disabled={loading} type='submit' sx={{ mb: 2 }} variant="contained" >Log In</Button>
                            <Link to="/forgot-password">Forgot Password?</Link>
                            </FormGroup>
                            <div className=""> Do not have account? <Link to='/signup'>Sign Up</Link> </div>
                    </form>
                </CardContent>
            </Card>
        </>
    )
}

export default Login