import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/navbar.scss'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>

            <nav className="navbar">

                <div className="nav_container">
                    <div className="mobile_icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />

                        <ul className={click ? "nav-menu active" : "nav-menu"}>

                            <li className='nav-item'>
                                <Link to='/' className='nav' onClick={closeMobileMenu}>Strona główna</Link>
                            </li>
                            <li className="nav_item">O co chodzi?</li>
                            <li className="nav_item">O nas</li>
                            <li className="nav_item">Fundacja i organizacje</li>
                            <li className="nav_item">Konatkt</li>
                        </ul>
                    </div>
                </div>

            </nav>

        </>

    );
}

export default Navbar

