import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

const AuthContext=React.createContext()

export const UseAuth = ()=>{
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {

    const [currentUser,setCurrentUser]=useState()
    const [loading,setLoading]=useState(true)
    
    function SignUp(email,password){
        return auth.createUserWithEmailAndPassword(email,password)
    }

    function Login(email,password){
        return auth.signInWithEmailAndPassword(email,password)
    }

    function Logout(){
        return auth.signOut()
    }

    function ResetPass(email){
        return auth.sendPasswordResetEmail(email)
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((user)=>{
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    },[])


    const value={
        currentUser,
        Login,
        Logout,
        SignUp,
        ResetPass,
    }

  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
