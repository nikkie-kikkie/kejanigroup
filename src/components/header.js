import React, { useState} from 'react'
import { Link } from "react-router-dom"
import { firestore } from "../firebase"
import { ImCross} from "react-icons/im"


export default function Header() {
    const [state, setState] = useState({ location: ""})
    const [filtered, setFiltered] = useState([])
    const [submitted,setSubmitted]=useState(false)
    const handleChange = (e) => {
        //will be on lookout for change of state
        const { name, value } = e.target;
        setState({ ...state, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        const getFilteredApartments = []
        const value=state.location
        const db = firestore.collection("addedApartments");
           db.where("location","==",value)
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    getFilteredApartments.push({
                        ...doc.data(),
                        key: doc.id
                    })
                })
                setFiltered(getFilteredApartments)
            })
    }
    const toggleContainer = () => {
        setSubmitted(false)
    }
    
    
    return (
        <>
            <div className="headerContainer">
                <Link to="/home" className="kejaniLink">KEJANI</Link>
                <div className="searchContainer">
                    <label>Search for apartments in your desired location</label>
                    <div className="searchInput">
                        <input type="text" name="location" placeholder="Enter your desired location..." onChange={handleChange} />
                        <button type="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
            <div  className={submitted ?"filteredApartment": "noFilteredApartments"}>
                {filtered.length>0 ?<div>{filtered.map((filter) => {
                    return(
                        < div className="viewApartment" key={filter.key} datakey={filter.key}>
                            <button onClick={toggleContainer} ><ImCross/></button>
                            <h2 className= "viewApartmentsName">{filter.name}</h2>
                            <img className= "viewApartmentsImg" src={filter.image} alt={filter.name} />
                            <p>{filter.location}</p>
                            <p>{filter.type}</p>
                            <p>{filter.details}</p>
                            <p>{filter.amenities}</p>
                            <h3>{filter.rent}</h3>
                            <p>Like what you see? Send the owner an email at {filter.email}</p>
                        </div>
                    )
                })}</div> : <p style={{ color: "white" }}>No apartments fit that description</p>}
            </div>
        </>
    )
}
