import React from 'react'
import '././Footer.scss'
import footerLogo from '../../assets/footer_logo.png'

function Footer() {
    return (
        <footer>
            <img src={footerLogo} 
                alt='logo pied de page'
            />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer