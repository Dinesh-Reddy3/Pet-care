import '../assets/css/Booking.css'
import banner2 from '../assets/images/banner2.jpg'
import { Link } from "react-router-dom"
import Nav from './Nav'
import Footer from './Footer'
const Booking = () => {
    const divStyle = {
    backgroundImage: `url(${banner2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px',
    width: '100%',
  };

    return (
       
        <div>
            <Nav></Nav>
             <div className='booking'style={divStyle}>
            <div className='book'>
                <div className='book1'>Connect With <br />VND Caring Hosts</div>
                <input type="text" placeholder='Name' className='infoname' />
                <input type="text" placeholder='Pet Name' className='infopet' />
                <input type="text" placeholder='Whatsapp Number' className='infonumber' />
                <div className='bookbuttona'><Link to="/thanku" className='bookbuttonb'>Book Now</Link></div>
            </div>
        </div>
         <Footer></Footer>
        </div>
        
    )
}
export default Booking