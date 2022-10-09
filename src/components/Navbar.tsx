import { useState } from 'react'

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
                    <a href="/">
                        <li>
                            Home
                        </li>
                    </a>
                    <a href="/champs">
                        <li>
                            Champions
                        </li>
                    </a>
                </ul>
            </menu>
            <img className={styles.MainIcon} src={iconLol} alt="League of Legends Icon" />
        </nav>
    )
}
