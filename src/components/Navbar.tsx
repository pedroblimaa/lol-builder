import { useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import styles from '../styles/Navbar.module.css'
import iconLol from '../assets/lol-icon.png'
import Sandwich from './Sandwich'
import '../index.css'

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(Boolean)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <nav className={styles.Navbar}>
            <menu className="menu">
                <Sandwich onClick={toggleMenu} />
                <ul className={styles.SideMenu + ' ' + (showMenu ? 'show' : 'hide-menu')}>
                    <Link to="/" onClick={toggleMenu}>
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link to="/champs" onClick={toggleMenu}>
                        <li>
                            Champions
                        </li>
                    </Link>
                </ul>
            </menu>
            <img className={styles.MainIcon} src={iconLol} alt="League of Legends Icon" />
        </nav>
    )
}
