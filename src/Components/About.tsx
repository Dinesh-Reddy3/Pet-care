import Nav from "./Nav"
import '../assets/css/about.css'
import banner6 from '../assets/images/banner6.jpg'
import dog2 from '../assets/images/dog2.png'
import Footer from "./Footer"
 
const About=()=>{
     const divStyle = {
    backgroundImage: `url(${banner6})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '550px',
    width: '100%',
  };
   
    return(
        <div>
              <Nav></Nav>
             <div style={divStyle}>
                <h1 className="about1">ABOUT US</h1>
                <div className="about2">“Dedicated to providing top-notch care <br />and companionship for your beloved pets.”</div>
             </div>
             <div className="story"  >
                <h1 className="story1">OUR STORY</h1>
                <div className="story2">
                    <div className="story3" > <img src={dog2} alt="poster1" className="story3"  width={"320px"} /></div>
                     <div className="story4">
                    <p>
                        We at VND are committed to redefining pet parenting and making <br /> 
                        it a more joyful and convenient journey for all pet lovers. With great <br /> 
                        obsession towards quality and ease we are creating a platform which <br /> 
                        will be a one stop solution for all your pet parenting needs. We have <br />
                        started this journey by providing a bouquet of doorstep services <br />
                         across Bengaluru, which include grooming, training, vet consulting <br />
                          and nutrition planning. We are a group of passionate pet lovers who <br /> 
                          ensure a safe and joyful experience is provided to your furry friends <br /> 
                           and at the same time provide you with flexibility of scheduling <br /> 
                           appointments that fit in your schedule perfectly.
                    </p>
                </div>
                </div>
                
             </div>
            <Footer></Footer>
        </div>
    )
}
export default  About