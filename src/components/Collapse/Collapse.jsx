import React, {useState} from "react"
import arrow from '../../assets/arrow.png'
import './Collapse.scss'

const Collapse = ({index, title, text}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div key={index} className="collapse">
                <p>{title}</p>
                <img 
                    src={arrow} 
                    className={isOpen ? "collapse-arrow_down": "collapse-arrow"}
                    onClick={() => setIsOpen(!isOpen)} 
                    alt="flèche du menu déroulant"
                />
                {isOpen ? (
                    <div className="collapse-menu">
                        <div className="collapse-menu_content">{text}</div>
                    </div>
                ) : null}
            </div>
        </>
    )
}

export default Collapse