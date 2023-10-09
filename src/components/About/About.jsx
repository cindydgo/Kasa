import React from "react"
import aboutBanner from '../../assets/aboutBanner.png'
import Collapse from '../Collapse/Collapse'
import './About.scss'

function About() {
    const collapseData= [
        {
            id: 0,
            title: "Fiabilité",
            text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        },
        {
            id: 1,
            title: "Respect",
            text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            id: 2,
            title: "Service",
            text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        },
        {
            id: 3,
            title: "Sécurité",
            text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
        
    ]
    
    return(
        <main className="about">
            <img 
                src={aboutBanner} 
                className="about-banner"
                alt="bannière de la page à propos"
            />
            <div className="about-collapse">
                {collapseData.map(data => {
                    return (
                            <Collapse 
                                    key={data.id}  
                                    title={data.title} 
                                    text={data.text}
                            />
                    )}
                )}
            </div>
        </main>
    )
}

export default About
