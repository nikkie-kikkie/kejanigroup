import React, {useState, useRef} from 'react'
import { Link ,useHistory} from "react-router-dom"
import { MainContainer, FormContainer, InputContainer } from "../signup/SignupElements"
import useAuth from "../../Context/AuthContext"

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/home")
        } catch {
            setError("Failed to log in")
        }
        setLoading(false)
    }
    return (  
        <div className="loginContainer">

        <MainContainer>
            <h1>Kejani.</h1>
            <h2>Log In</h2>
            {error && <h3>{error}</h3>}

            <FormContainer onSubmit={handleSubmit}>
                <InputContainer>
                    <label>Enter Email:</label>
                    <input type="email" ref={emailRef}required/>
                </InputContainer>
                
                <InputContainer>
                    <label>Enter Password:</label>
                    <input type="password" ref={passwordRef} />
                </InputContainer>
                
                <button type="submit" disabled={loading}>Log In</button>
            </FormContainer>
            <p>Need an account? <Link to="/signup/Signup">Sign Up</Link></p>
        </MainContainer>
        </div>
    )
}

