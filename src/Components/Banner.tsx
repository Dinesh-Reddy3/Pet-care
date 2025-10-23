import bannera from "../assets/images/bannera.jpg"
import '../assets/css/Banner.css'
const Ban = () => {
     const divStyle = {
    backgroundImage: `url(${bannera})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: "500px",
    width: 'auto',
    backgroundRepeat:"no-repeat"

  };

     return (
          <div className="banner">
               <div style={divStyle}>
                    
               </div>
          </div>
     )
}
export default Ban