import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/navbar.scss';
import { Link as scrollLink } from 'react-scroll';


function Navbar() {

    const [click, setClick] = useState(true);
    const handleClick = () => setClick(!click);

    return (
        <>

            <nav className='navbar'>
                <div className='navbar-container'>


                    <div className='menu-icon' onClick={handleClick}>
                        <div className={click ? 'x-icon' : 'bars-icon'} />
                    </div>

                    <ul className={click ? 'nav-menu' : 'active'}>

                        <li className='nav-items'>
                            <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                                Test 1 </Link>

                            <Link to='/' className='nav-links' onClick={handleClick}>
                                Start
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link
                                to='/'
                                className='nav-links'
                                onClick={handleClick}
                            >
                                O co chodzi?
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link
                                to='/'
                                className='nav-links'
                                onClick={handleClick}
                            >
                                O nas
                            </Link>
                        </li>

                        <li className='nav-items'>
                            <Link
                                to='/'
                                className='nav-links'
                                onClick={handleClick}
                            >
                                Fundacja i organizacje
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link
                                to='/'
                                className='nav-links'
                                onClick={handleClick}
                            >
                                Kontakt
                            </Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    );
}

export default Navbar;