import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/navbar.scss'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <i className="fas fa-truck"></i>
                    TS-Platform
                </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Strona główna</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/NewLoad/' className='nav-links' onClick={closeMobileMenu}>Dodaj ładunek</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/ShowOffer/' className='nav-links' onClick={closeMobileMenu}>Lista ładunków</Link>
                        </li>

                    </ul>

                </div>
            </nav>
        </>

    );
}

export default Navbar
