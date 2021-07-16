import React from "react"
import { MainContainer, FormContainer, InputContainer } from "./signup/SignupElements"
import Header from "./header"


export default function EditApartment() {
    
    return (
        <MainContainer>
            <Header/>
            <h1>Add An Apartment.</h1>
            <FormContainer >
                <InputContainer>
                    <label>Apartment's Name:</label>
                    <input type="text"/>
                </InputContainer>
                <InputContainer>
                    <label>Apartment's Location:</label>
                    <input type="text"/>
                </InputContainer>
                <div className="addImage">
                    <input type="file" className="apartment-button"/>
                    <div className="apartment-container" id="apartment-container">
                        <img src="" alt="Add " className="apartment-image"/>
                        <span className="apartment-notext">Enter Apartment Image</span>
                    </div>
                </div>
                <InputContainer>
                    <label>Apartment Details:</label>
                    <textarea rows="4" cols="50"></textarea>
                </InputContainer>
                <InputContainer>
                    <label>Amenities:</label>
                    <textarea  rows="4" cols="50"></textarea>
                </InputContainer>
                <InputContainer>
                    <label>Rent</label>
                    <input type="text"/>
                </InputContainer>
                <button type="submit" className="addApartmentBtn">Submit</button>
            </FormContainer>
            
        </MainContainer>
        
    )
}


