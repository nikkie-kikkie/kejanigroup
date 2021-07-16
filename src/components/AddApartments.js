import React, { useRef, useState } from 'react'
import { MainContainer, FormContainer, InputContainer } from "./signup/SignupElements"
import {  storage, firestore } from "../firebase"
import useAuth from "../Context/AuthContext"
import Header from './header'
import { useHistory } from 'react-router'

export default function AddApartments() {
    const nameRef = useRef()
    const locationRef = useRef()
    const detailsRef = useRef()
    const amenitiesRef = useRef()
    const rentRef = useRef()
    const typeRef = useRef()
    const history=useHistory()

    const { currentUser}= useAuth()
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)
    const [loading,setLoading]= useState(false)
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];

    const onChange = (e) => {
        const selected = e.target.files[0]
        if (selected && allowedTypes.includes(selected.type)) {
            setError('')
            const storageRef = storage.ref().child(selected.name)
            storageRef.put(selected).then(async () => {
                //fetch the URL
                setError("Successful Upload")
                const url = await storageRef.getDownloadURL()
                setUrl(url)
            }).catch((err) => {
                setError(err)
            })
        } else {
            setError("Upload an Image File (png or jpeg)")
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        const email= currentUser.email
        firestore.collection("addedApartments").add({
                name: nameRef.current.value,
                location: locationRef.current.value,
                image: url,
                type:typeRef.current.value,
                details: detailsRef.current.value,
                amenities: amenitiesRef.current.value,
                rent: rentRef.current.value,
                email: email,
            }
        )
            .then(() => {
                setLoading(false)
                alert("You added your apartment successfully!")
                history.push("/Apartments")
        })
        .catch((error) => {
            console.error("Error adding the document: ", error);
            setLoading(false)
        });

    }

    return (
        <MainContainer>
            <Header/>
            <h1>Add An Apartment.</h1>
            {error && <h3 style={{ color: "red" }}>{error}</h3>}
            <FormContainer onSubmit={ handleSubmit} >
                <InputContainer>
                    <label>Apartment's Name:</label>
                    <input type="text" ref={nameRef} />
                </InputContainer>
                <InputContainer>
                    <label>Apartment's Location:</label>
                    <input type="text" ref={locationRef} />
                </InputContainer>
                <div className="addImage">
                    <input type="file" className="apartment-button" onChange={ onChange}/>
                    <div className="apartment-container" id="apartment-container">
                        <img src={url} alt="Add " className={url!==null ?"apartment-image" :"apartment-noimage"}/>
                        <span className={url!==null ? "apartment-notext" : ""}>Enter Apartment Image</span>
                    </div>
                </div>
                <InputContainer>
                    <label>Select the type:</label>
                    <select ref={ typeRef}>
                        <option>Single Rooms</option>
                        <option>Studio/bedsitter</option>
                        <option>One bedroom</option>
                        <option>Two bedrooms</option>
                        <option>Three bedrooms or more</option>
                        <option>Penthouses</option>
                    </select>
                </InputContainer> 
                <InputContainer>
                    <label>Apartment Details:</label>
                    <textarea  ref={detailsRef} rows="4" cols="50"></textarea>
                </InputContainer>
                <InputContainer>
                    <label>Amenities:</label>
                    <textarea  ref={amenitiesRef} rows="4" cols="50"></textarea>
                </InputContainer>
                <InputContainer>
                    <label>Rent</label>
                    <input type="text" ref={rentRef}/>
                </InputContainer>
                <button type="submit" className="addApartmentBtn" disabled={loading}>Submit</button>
            </FormContainer>
            
        </MainContainer>
        
    )
}

