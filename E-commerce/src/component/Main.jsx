
import Cards from "./Cards";
import Carusell from "./Carusell";
import elec from '../images/electrica.jpg'
import baj from '../images/bajo.jpg'
import acus from '../images/acustica.jpg'

const Main =()=>{
    const slider=[baj,elec,acus];

    return(
        <>
            <Carusell
            imagenes={slider} 
            />
            <Cards/>
        </>
    )
}
export default Main;