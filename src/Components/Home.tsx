 import Nav from "./Nav"
 import Ban from "./Banner"
 import Service from "./Services"
 import Cost from "./Cost"
 import Dogcost from "./Dogcost"
 import Footer from "./Footer"
const Home=()=>{
    return(
        <div>
            <Nav/>
            <Ban></Ban>  
            <Service></Service>
            <Cost></Cost>
            <Dogcost></Dogcost>
            <Footer></Footer>
            
        </div>
    )
}
export default Home