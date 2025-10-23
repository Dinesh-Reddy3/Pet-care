import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
// import { faHouse } from '@fortawesome/free-solid-svg-icons';
// import { faDog } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom"

import "../assets/css/Services.css"
const Service = () => {
    return (
        <div>
            <div className='serve'>
                <FontAwesomeIcon icon={faPaw} size="2x" color="black" className='serve1' />
                <div className='serve2'>Our Services</div>
            </div>
            <div className='serve3'>
                <Link to='/petgrooming'>
                    <div className='serve4'>
                        <div className='servea' style={{width:"220px",height:"120px"}} >
                        </div>
                        <h6 className='served'>Pet Grooming</h6>
                    </div>
                </Link>
            </div>
        </div>


    )
}
export default Service

{ /*  <div className='serve5'>
                    <FontAwesomeIcon icon={faHouse} size="3x" color="black"className='serveb' />
                    <h6 className='servee'>Pet Boarding</h6>

                </div>
                <div className='serve6'>
                     <FontAwesomeIcon icon={faDog} size="4x" color="black" className='servec' />
                    <h6 className='servef'>Dog Walking</h6>
                </div> */}