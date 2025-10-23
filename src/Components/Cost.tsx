 import '../assets/css/Cost.css';
import { Link, useLocation } from "react-router-dom";

const Cost = () => {
    const location = useLocation();

    const isDog = location.pathname === '/doggcost';
    const isCat = location.pathname === '/catcost';

    return (
        <div className="cost">
            <div className="cost1">
                <span className="cost2">Service  <span className="cost22">Cost</span></span>
            </div>
            <div className="cost3">
                <div className="icon-container">
                    <Link to="/doggcost" aria-label="Dog Service Cost">
                        <div
                            className="cost4" 
                            style={{ border: isDog ? '2px solid orange' :  '2px solid rgb(221,192,239)'  }} >
                        </div>
                    </Link>
                    <Link to="/catcost" aria-label="Cat Service Cost">
                        <div 
                            className="cost5" 
                            style={{ border: isCat ?  '2px solid orange' :  '2px solid rgb(221,192,239)' }} 
                        >
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cost;
