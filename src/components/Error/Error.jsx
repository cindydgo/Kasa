import React from 'react'
import { Link } from 'react-router-dom'
import ErrorImg from '../../assets/error404.png'
import './Error.scss'

function Error() {
    return (
        <div className='error'>
            <img src={ErrorImg} alt="Erreur 404"/>
            <h3>Oups! la page que vous demandez n'existe pas.</h3>
            <Link to="/" className='error_link'>Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error 