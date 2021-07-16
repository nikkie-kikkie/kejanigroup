import React, { useState} from 'react'
import { apartmentData } from '../../Data'
import {SliderContainer,LeftArrow,RightArrow } from "./ImageSliderElements"


export default function ImageSlider({ apartments }) {
    const [current, setCurrent] = useState(0)
    const length = apartments.length

    if (!Array.isArray(apartments) || length <=0) {
        return null
    }

    const prevImage = () => {
        setCurrent(current === 0? length-1:current -1)
    }
    const nextImage = () => {
        setCurrent(current ===  length-1?0:current +1)
    }
    return (
        <SliderContainer>
            <LeftArrow onClick={ prevImage}/>
            {apartmentData.map((apartment,index) => {
                return (
                    < div className={index === current ? 'slide-active':'slide'} key={index}>
                        {index === current && (<h3>{apartment.name}</h3>)}
                        {index === current && (<img src={apartment.image} alt={apartment.name} />)}
                        {index === current && (<p>{apartment.location}</p>)}
                        {index === current && (<p>{apartment.details}</p>)}
                        {index === current && (<p>{apartment.amenties}</p>)}
                        {index === current && (<h3>{apartment.rent}</h3>)}
                    </div>
                )
            })}
            < RightArrow onClick={ nextImage}/>
        </SliderContainer>
    )
}
