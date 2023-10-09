import React from "react"
import star from '../../assets/star.png'
import starFull from '../../assets/star_full.png'
import './StarRating.scss'

const StarRating = ({rating}) => {
    const num = rating
    return (
        <div className="stars-container">
            {[...Array(5)].map((_, index) => {        
                return (  
                    <img 
                        key={index}
                        src={index < num ? starFull : star}
                        className="star"
                        alt={index < num ? starFull : star}
                    />
                )
            })}
        </div>
    )
}

export default StarRating