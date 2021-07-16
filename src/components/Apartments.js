import React, { useEffect,useState} from 'react'
import { firestore } from "../firebase"
import {Link, useHistory} from "react-router-dom"
import Whatsapp from 'react-whatsapp'
import Header from './header'
import useAuth from '../Context/AuthContext';


function Apartments() {
    const [loading,setLoading] = useState(false);
    const [apartments, setApartments] = useState([]);
    const { email } = useAuth()
    const userEmail = email;
    const history = useHistory()
    // You can map through the mobile numbers of the owners
    // then add them to each apartment div.
    // You can use the real numbers for testing purposes.
    const apartmentOwners = [
        '254708208637', // Nikkie's number
        '254724045240', // caleb number
        '254799352229', //christine number
        '254741767529',  //hope number
        '254798075768', // tenge number
        '254704550946', // sally number
        
    ]

    const deleteApartment = (e) => {
        const id = e.target.parentElement.parentElement.getAttribute("datakey")
        const apartmentRef = firestore.collection("addedApartments")
        apartmentRef.doc(id).delete().then(() => {
            history.push("/home")
            alert("Document successfully deleted!");
        })
    }
    useEffect(() => {
        setLoading(true)
        const getApartments = [];
        firestore
            .collection("addedApartments")
            .where("amenities", "!=", null)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    getApartments.push({
                        ...doc.data(),
                        key: doc.id
                    })
                    
                })
                setApartments( getApartments )
                setLoading(false)
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
                setLoading(false)
            });
    }, []);
    if (loading) {
        return<h1>Loading Available Apartments...</h1>
    }

    return (
        <div className="viewApartmentsContainer" >
            <Header />
            <h2>View Apartments.</h2>
            {apartments.length > 0 ? (apartments.map((apartment, index) => {
                return(
                    <div className="viewApartment" key={apartment.key} datakey={ apartment.key}>
                            <h2 className= "viewApartmentsName">{apartment.name}</h2>
                            <img className= "viewApartmentsImg" src={apartment.image} alt={apartment.name} />
                            <p>{apartment.location}</p>
                            <p>{apartment.type}</p>
                            <p>{apartment.details}</p>
                            <p>{apartment.amenities}</p>
                            <h3>{apartment.rent}</h3>
                            <p>Like what you see? Send the owner an email at {apartment.email}</p>
                        <div className={ userEmail === apartment.email ?"editanddeleteContainer":"noContainer"}>
                            <Link to="/EditApartment" className="editButton">Edit</Link>
                            <button type="submit" onClick={ deleteApartment} className="deleteButton">Delete</button>
                        </div>
                        {/* This is to tenary operator i.e. 'apartmentOwners[index] ? apartmentOwners[index] : '254739303393'' is just to pass in
                        a default number incase the numbers in the apartmentOwners array ran out before the mapping is done. */}
                        <Whatsapp number={apartmentOwners[index] ? apartmentOwners[index] : '254708208637'} message="Hello, I would love to know more about the apartment." className="whatsapp_float" >
                            <i class="fa fa-whatsapp whatsapp-icon"></i>
                        </Whatsapp>
                    </div>
                    )
                })) : <h1>No Apartments Available to Show</h1>
            }
        </div>
    )
}

export default Apartments
