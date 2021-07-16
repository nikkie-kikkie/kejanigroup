import React, { useState, useContext, useEffect } from 'react'
import { auth } from "../firebase"

export const AuthContext = React.createContext();

//Function that allows us to use AuthContext
export default function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState()
    const [email,setEmail]=useState()

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email,password)
    }
    function login(email,password) {
        return auth.signInWithEmailAndPassword(email,password)
    }

    useEffect(() => {
        const unsubscribe=auth.onAuthStateChanged(user => {
            const email= user.email
            setCurrentUser(user)
            setEmail(email)

        })
        if (currentUser) {
            setLoading(false)
        }
        return unsubscribe;
    },[currentUser])
    
    const value = { currentUser,email, signup, login }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}


