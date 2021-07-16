import React from 'react'
import { Link } from 'react-router-dom'
import ImageSlider from "../ImageSlider/ImageSlider"
import { apartmentData } from '../../Data'
import Header from '../header'

export default function Dashboard() {
    return (
        <>
            <div className="dashboardContainer">
                <Header />
                <div className="mainContainer">
                    <div className="sideContainer">
                        <h2>Find a home in your ideal location at your rent range.</h2>
                    </div>
                </div>
                
            </div>
            <div className="imagesContainer">
                <h1 className="imagesText">Apartments</h1>
                <ImageSlider apartments={apartmentData}/>
            </div>
            <div className="buttonContainer">
                <Link to="/Apartments" className="apartmentBtns">View More Apartments </Link>
                <Link to="/AddApartments" className="apartmentBtns">Add an Apartment </Link>
            </div>
            <div className="footerContainer">
                <h2>Terms and Conditions:</h2><br />
                <p>No payments should take place in Kejani. We have no agents or ground officers.</p>
                <p>Before you make any payments make sure to visit the apartment and see the house first hand.</p>
                <p>Copyright:Kejani@2021</p>
            </div>
        </>
    )
}

