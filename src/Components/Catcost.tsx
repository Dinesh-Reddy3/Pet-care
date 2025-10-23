import '../assets/css/Dogcost.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"
import Nav from './Nav';
import Cost from './Cost';
import Footer from './Footer';
const Catcost = () => {
    return (
         <div>
            <Nav></Nav>
            <Cost></Cost>
            <div className='dog'>
             
            <div className='dog1'>
                <div className='da1'> Routine Grooming</div>
                <div className='dog1a'>
                    <div className='dog1b'>Subcribe at</div>
                    <div className='dog1c'> <FontAwesomeIcon icon={faRupeeSign} /> <span>999</span></div>
                    <div className='dogb'><Link to="/booking" className='dogbb'>Book Now</Link></div>
                </div>
                <div>
                    <div className='items1'><FontAwesomeIcon icon={faCheckCircle} className='che' />Bath</div>
                    <div className='items1'><FontAwesomeIcon icon={faCheckCircle} className='che' />Shampoop & Conditing</div>
                    <div className='items1'><FontAwesomeIcon icon={faCheckCircle} className='che' />Deshedding</div>
                    <div className='items1'><FontAwesomeIcon icon={faCheckCircle} className='che' />Blow Drying</div>
                    <div className='items1'><FontAwesomeIcon icon={faCheckCircle} className='che' />Combing & Brushing</div>
                </div>
            </div>
            <div className='dog2'>
                <div className='da2'>Bath & Basic Grooming</div>
                <div className='dog2a'>
                    <div className='dog1b'>Subcribe at</div>
                    <div className='dog2c'> <FontAwesomeIcon icon={faRupeeSign} /> <span>1699</span></div>
                    <div className='dogb'><Link to="/booking" className='dogbb'>Book Now</Link></div>
                </div>
                <div>
                    <div className='items1'><FontAwesomeIcon icon={faCheckCircle} className='che' />Bath</div>
                    <div className='items1'><FontAwesomeIcon icon={faCheckCircle} className='che' />Shampoop & Conditing</div>
                    <div className='items1'><FontAwesomeIcon icon={faCheckCircle} className='che' />Deshedding</div>
                    <div className='items1'><FontAwesomeIcon icon={faCheckCircle} className='che' />Blow Drying</div>
                    <div className='items1'><FontAwesomeIcon icon={faCheckCircle} className='che' />Combing & Brushing</div>
                    <div className='items1'><FontAwesomeIcon icon={faCheckCircle} className='che' />Nail Clipping</div>
                    <div className='items1'><FontAwesomeIcon icon={faCheckCircle} className='che' /> Paw Massage</div>
                    <div className='items1'><FontAwesomeIcon icon={faCheckCircle} className='che' /> Teeth Cleaning</div>
                    <div className='items1'><FontAwesomeIcon icon={faCheckCircle} className='che' /> Ear & Eye Cleaning</div>
                    <div className='items1'><FontAwesomeIcon icon={faCheckCircle} className='che' /> Sanitary Trimming</div>
                    <div className='items1'><FontAwesomeIcon icon={faCheckCircle} className='che' /> Minor Trimming on <br /> <span className='che2'>the face and paws</span></div>
                </div>
            </div>
            <div className='dog3'>
                <div className='da3'>Complete Makeover</div>
                <div className='dog3a'>
                    <div className='dog1b'>Subcribe at</div>
                    <div className='dog3c'> <FontAwesomeIcon icon={faRupeeSign} /> <span>2199</span></div>
                    <div className='dogb'><Link to="/booking" className='dogbb'>Book Now</Link></div>
                </div>
                <div>
                    <div className='items1'><FontAwesomeIcon icon={faCheckCircle} className='che' />Bath</div>
                    <div className='items1'><FontAwesomeIcon icon={faCheckCircle} className='che' />Shampoop & Conditing</div>
                    <div className='items1'><FontAwesomeIcon icon={faCheckCircle} className='che' />Deshedding</div>
                    <div className='items1'><FontAwesomeIcon icon={faCheckCircle} className='che' />Blow Drying</div>
                    <div className='items1'><FontAwesomeIcon icon={faCheckCircle} className='che' />Combing & Brushing</div>
                    <div className='items1'><FontAwesomeIcon icon={faCheckCircle} className='che' />Nail Clipping</div>
                    <div className='items1'><FontAwesomeIcon icon={faCheckCircle} className='che' /> Paw Massage</div>
                    <div className='items1'><FontAwesomeIcon icon={faCheckCircle} className='che' /> Teeth Cleaning</div>
                    <div className='items1'><FontAwesomeIcon icon={faCheckCircle} className='che' /> Ear & Eye Cleaning</div>
                    <div className='items1'><FontAwesomeIcon icon={faCheckCircle} className='che' /> Sanitary Trimming</div>
                    <div className='items1'><FontAwesomeIcon icon={faCheckCircle} className='che' /> Minor Trimming on <br /> <span className='che2'>the face and paws</span></div>
                    <div className='items1'><FontAwesomeIcon icon={faCheckCircle} className='che' />Hair Styling</div>
                    <div className='items1'><FontAwesomeIcon icon={faCheckCircle} className='che' />Full Body Trimming</div>
                </div>
            </div>
        </div>
        <Footer></Footer>
         </div>
    )
}
export default Catcost