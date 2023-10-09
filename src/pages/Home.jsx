import React from "react"
import Banner from "../components/Banner/Banner"
import logements from '../assets/logements.json'
import { Link } from "react-router-dom"
import '../styles/Home.scss'

function Home() {
    return (
        <div className="home">
            <Banner />
            <section className="home-logements">
            {logements.map(logement => (
                <div className="logement" key={logement.id}>
                    <Link to={`/logements/${logement.id}`}>
                        <img src={logement.cover} alt="logement" />
                        <p className='logement_title'>{logement.title}</p>
                    </Link>
                </div>
            ))}
            </section>
        </div>
    )
}

export default Home