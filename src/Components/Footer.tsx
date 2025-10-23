import '../assets/css/Footer.css'
import logo1 from "../assets/images/logo1.jpg"
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Footer = () => {

    return (
        <div>
            <div className='foot'>
                <div className='foot1'>
                    <img src={logo1} alt="logo" className='logo1' />
                    {/* <div className='heads'> 
                        HEADS UP FOR TALES
                    </div> */}
                     
                </div>
                <div className='foot2'>
                    <h3>Discover</h3>
                     <Link to="/" className='li'><h6 >Home</h6></Link>
                     <Link to="/about" className='li'><h6>About</h6></Link>
                    <Link to="/breed"   className='li'><h6 >Explore Breeds</h6></Link>
                </div>
                <div className='foot3'>
                    <h3>Quick Links</h3>
                    <Link to="/"   className='li'><h6 >Pet Breeding</h6></Link>
                    <Link to="/contact"   className='li'><h6 >Contact</h6></Link>
                    <Link to="/register"  className='li'><h6 > Register</h6></Link>
                </div>
                <div className='foot4'>
                    <h3>Contact</h3>
                    <div className='contact1'>
                        <i className="fa-solid fa-location-dot fa-lg cona" style={{ color: "#ffba6b" }}></i>
                        <h6 className='conb'>Address:</h6>
                        <div className='conc'>Banglore</div>
                    </div>
                    <div className='contact1'>
                        <i className="fa-solid fa-envelope fa-lg cona" style={{ color: "#ffba6b" }}></i>
                        <h6 className='conb'>Email:</h6>
                        <div className='conc'>vndpetservices@gmail.com</div>
                    </div>
                    <div className='contact1'>
                        <i className="fa-solid fa-phone fa-lg cona" style={{ color: "#ffba6b" }}></i>
                        <h6 className='conb'>Phone:</h6>
                        <div className='conc'>+91 1234567890</div>
                    </div>
                </div>

            </div>
            <p className='copy'>
                Copyright 2024,Design and develop by  <span className='copy1'>VND PET SERVICES </span>.All rights reserved
            </p>
            
        </div>
    )
}

export default Footer
