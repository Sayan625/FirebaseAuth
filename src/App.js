import "./app.css"
import { AuthProvider } from "./contexts/AuthContext"
import Signup from "./Signup"
import Login from "./Login"
import Main from "./Main"
import ForgotPass from "./ForgotPass"
import Privateroutes from "./Privateroutes"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Container } from "@mui/material"


const App = () => {


  return (
    <Container sx={{display: 'flex',
    justifyContent: 'center', alignItems: 'center', height:"100vh"}}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route element={<Privateroutes />}>
              <Route path="/" element={<Main />} />
            </Route>
          <Route path="/forgot-password" element={<ForgotPass />} />
          </Routes>
        </AuthProvider>
      </Router>
    </Container>
  )
}

export default App
