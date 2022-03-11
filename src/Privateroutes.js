import { UseAuth } from "./contexts/AuthContext"
import { Navigate, Outlet } from "react-router-dom"

export default function Privateroutes() {
    const {currentUser} =UseAuth()
  return currentUser? <Outlet/> : <Navigate to="/login"/>
}
