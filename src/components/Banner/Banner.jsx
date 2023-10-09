import React from "react"
import '././Banner.scss'
import homeBanner from "../../assets/homeBanner.png"

function Banner() {
    return (
        <div className="banner">
            <img src={homeBanner} alt="bannière page d'accueil"/>
        </div>
    )
}

export default Banner