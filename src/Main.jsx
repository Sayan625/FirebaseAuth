import { Card, CardContent, CardActions, Button, Alert } from "@mui/material"
import { useState } from "react"
import { Link } from 'react-router-dom';
import { UseAuth} from "./contexts/AuthContext"

const Main = () => {

    const [error, setError] = useState("")
    const { currentUser } = UseAuth()
    const { Logout } = UseAuth()

    async function HandleLogOut() {
        try {
            setError("")
            await Logout()
            window.location.replace('/login')
        } catch (error) {
            setError("Failed to Log out")
        }
    }


    return (
        <>
            <Card sx={{width: 500,m:1,p:1}}>
                <CardContent>
                {error && <Alert severity="error">{error}</Alert>}
                    <strong>Email:</strong> {currentUser.email}
                </CardContent>
                <CardActions>
                     <Link sx={{m:2,p:1}} to="/update" style={{textDecoration: 'none'}} ><Button variant="contained">Update</Button></Link> 
                    <Button sx={{m:2,p:1}} variant="contained" onClick={HandleLogOut}> Log Out</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default Main