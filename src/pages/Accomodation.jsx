import React from "react"
import { useParams } from "react-router-dom"
import Collapse from "../components/Collapse/Collapse"
import logements from '../assets/logements.json'
import Slideshow from "../components/Slideshow/Slideshow"
import Error from '../components/Error/Error'
import Host from "../components/Host/Host"
import StarRating from "../components/StarRating/StarRating"
import '../styles/Accomodation.scss'

function Accomodation() {
    const {id} = useParams()
    const data = logements.find((logement) => logement.id === id)
    console.log(data)

    if(!data) {
        return <Error />
    }

    const tags = data.tags
    const equipments = data.equipments.map((equipment, index) => (
        <li 
            key={index}
            className="location-collapse_equipment"
        >
            {equipment}
        </li>
    ))

    return (
        <section className="section-location">
            <div key={id} className="location">
                <Slideshow images={data.pictures} />
                <div className="location-desc">
                    <div className="location-desc_column">
                        <div className="location-info">
                            <h1>{data.title}</h1>
                            <p>{data.location}</p>
                        </div>
                        <div className="location-tags">
                            {tags.map((tag) => {
                                return (
                                    <span key={tag}>{tag}</span>
                                )
                            })}
                        </div>
                    </div>
                    <div className="location-host">
                        <Host 
                            name={data.host.name}
                            picture={data.host.picture}
                        />
                        <StarRating rating={parseInt(data.rating)}/>
                    </div>
                </div>
                <div className="location-collapse">
                    <Collapse 
                        title="Description" 
                        text={data.description}
                    />
                    <Collapse 
                        title="Équipements" 
                        text={equipments}
                    />
                </div>
            </div>
        </section>
    )
}

export default Accomodation
