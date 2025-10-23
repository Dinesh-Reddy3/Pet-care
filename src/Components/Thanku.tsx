import '../assets/css/Thanku.css'
import Nav from './Nav'
import Footer from './Footer'
import {Link} from "react-router-dom"

const ThankYou = () => {
    
  return (
    <div>
      <Nav/>
      <div>
        <center> 
        <i className="fa-regular fa-circle-check fa-2xl mt-5" style={ {color:" #04865f"}}></i>
        <h1 className='you'>Thank You</h1>
        <div className='booked'>Your Appiontment is Booked <br /> Our Groomer Will Contact You
         </div>

         <Link to="/">
         <button className='mt-3 back'>
            Back to Home
        </button>
        </Link>
        </center>
      </div>
      <Footer/>
    </div>
  )
}

export default ThankYou
