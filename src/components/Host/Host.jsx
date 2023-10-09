import React from "react"
import './Host.scss'

export default function Host({name, picture}) {
    return(
        <div className='host'>
            <p className="host-name">
            {name.split(" ").map((part, index) => (
                <React.Fragment key={index}>
                <span>{part}</span>
                <br />
                </React.Fragment>
            ))} 
            <br />
            </p>
            <img 
                className="host-picture"
                src={picture} 
                alt= {name} 
            />
        </div>
    )
}
