import React, { useRef,useState} from 'react';
import { MainContainer, FormContainer, InputContainer } from "./SignupElements"
import useAuth from "../../Context/AuthContext"
import { Link ,useHistory} from "react-router-dom"

export default function Signup() {
    const { signup}= useAuth()
    const userRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confPasswordRef = useRef();
    const [error,setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== confPasswordRef.current.value) {
            return setError("Passwords do not match")
        }
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/home")
            
        } catch {
            setError("Failed to create an account")
        }
        setLoading(false)
    }
    return (
        <MainContainer>
            <h1>Welcome to Kejani.</h1>
            <h2>Sign Up</h2>
            {error && <h3>{error}</h3>}

            <FormContainer onSubmit={handleSubmit}>
                <InputContainer>
                    <label>Enter Username:</label>
                    <input type="text" ref={userRef} />
                </InputContainer>
                <InputContainer>
                    <label>Enter Email:</label>
                    <input type="email" ref={emailRef} required/>
                </InputContainer>
                <InputContainer>
                    <label>Enter Password:</label>
                    <input type="password" ref={passwordRef}/>
                </InputContainer>
                <InputContainer>
                    <label>Confirm Password:</label>
                    <input type="password" ref={confPasswordRef}/>
                </InputContainer>
                
                <button type="submit" disabled={ loading}>Sign Up</button>
                
            </FormContainer>
            <p>Already have an account? <Link to="/Log-In/Login">Log In</Link></p>
        </MainContainer>
    )
}



