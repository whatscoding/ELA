import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">
                    Entry Level Analyst
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} to="/">Home</Link>
                    </li>
                    <li>    
                        <Link className={headerStyles.navItem} to="/analyst">Analyst</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} to="/about">About</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header