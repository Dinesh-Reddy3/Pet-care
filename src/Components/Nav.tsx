 import { useState } from 'react';
import logo1 from '../assets/images/logo1.jpg';
import '../assets/css/Nav.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='navv'>

            <div className='navv1'>
                <img src={logo1} className='navv1' alt="logo1" width={"120px"} />
            </div>

            {/* Hamburger Icon */}
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </div>

            {/* Nav Links */}
            <div className={isOpen ? 'navv2 open' : 'navv2'}>
                <div><Link to="/" className='ho1'>Home</Link></div>
                <div><Link to="/about" className='ho1'>About Us</Link></div>
                <div><Link to="/breed" className='ho1'>Breeds</Link></div>
                <div><Link to="/contact" className='ho1'>Contact Us</Link></div>
            </div>

            <div className='navv3'>
                <Link to='/register'><div className='n'><FontAwesomeIcon icon={faUser} style={{color:'white'}} /></div></Link>
            </div>
        </div>
    );
}

export default Nav;
