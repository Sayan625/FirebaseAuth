import { FormGroup, TextField, Button, Card, CardContent, Alert } from '@mui/material';
import { useRef, useState } from 'react';
import { UseAuth } from './contexts/AuthContext';
import { Link } from 'react-router-dom';


const Signup = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const { SignUp} = UseAuth()
    const [error, setError] = useState('')
    const [loading, setLoading]=useState(false)


    async function HandleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError("password not matched")
        }

        try {
            setLoading(true)
            setError('')
            await SignUp(emailRef.current.value, passwordRef.current.value)
            setLoading(false)


        } catch (error) {
            setError("Failed to sign up")
            setLoading(false)

        }
    }

    console.log(passwordRef)

    return (
        <>
            <Card sx={{ width: 500, m: 1, p: 1 }}>
                {error && <Alert severity="error">{error}</Alert>}
                
                <CardContent>
                    <form onSubmit={HandleSubmit}>
                        <FormGroup>
                            <h1>Sign Up</h1>
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
                            <TextField
                                id="outlined-confirmPassword-input"
                                label="Confirrm Password"
                                type="password"
                                sx={{ mb: 2 }}
                                inputRef={confirmPasswordRef}

                            />
                            <Button disabled={loading} type='submit' sx={{ mb: 2 }} variant="contained" >Sign Up</Button>
                            <div className=""> Already signed In ? <Link to="/login">Log In</Link></div>
                            </FormGroup>
                    </form>
                </CardContent>
            </Card>
        </>
    )
}

export default Signup