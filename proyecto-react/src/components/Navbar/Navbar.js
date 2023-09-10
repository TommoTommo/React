
import { Link } from  'react-router-dom';

function Menu(){
    return(
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/favoritos">Favoritos</Link></li>
            <li><Link to="/Vertodaspelis">Vertodaspelis</Link></li>
            <li><Link to="/Vertodaspopulares">Vertodaspopulares</Link></li>
        </ul>

    )
}

export default Menu