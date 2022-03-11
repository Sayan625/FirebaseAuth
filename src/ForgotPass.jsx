import { FormGroup, TextField, Button, Card, CardContent, Alert } from '@mui/material';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { UseAuth } from './contexts/AuthContext';

const ForgotPass = () => {

    const emailRef = useRef()
    const {ResetPass} = UseAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading]=useState(false)

    async function HandleSubmit(e) {
        e.preventDefault()

        try {
            setLoading(true)
            setError('')
            setMessage('')
            await ResetPass(emailRef.current.value)
            setMessage("Check Your Inbox")
            setLoading(false)
            

        } catch (error) {
            setError("Failed to Reset")
            setLoading(false)

        }
    }


    return (
        <>
            <Card sx={{ maxWidth: 500, m: 1, p: 1 }}>
                {error && <Alert severity="error">{error}</Alert>}
                {message && <Alert severity="success">{message}</Alert>}
        
                <CardContent>
                    <form onSubmit={HandleSubmit}>
                        <FormGroup>
                            <h1>Reset Password</h1>
                            <TextField
                                id="outlined-email-input"
                                label="Email"
                                type="email"
                                sx={{ mb: 2, mt: 2 }}
                                inputRef={emailRef}
                            />

                            <Button disabled={loading} type='submit' sx={{ mb: 2 }} variant="contained" >Reset password</Button>
                            <Link to="/login">Log In</Link>
                            </FormGroup>
                            <div className=""> Do not have account? <Link to='/signup'>Sign Up</Link> </div>
                    </form>
                </CardContent>
            </Card>
        </>
    )
}

export default ForgotPass