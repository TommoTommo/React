
import { Link } from  'react-router-dom';
import "./Navbar.css"
function Menu(){
    return(
        <ul className="genero-titulo-div">
            <Link className="titulo-href" to="/">HOME</Link>
            <Link className="titulo-href" to="/favoritos">FAVORITOS</Link>
            <Link className="titulo-href" to="/Vertodaspelis">VERTODASPELIS</Link>
            <Link className="titulo-href" to="/Vertodaspopulares">VERTODASPOPULARES</Link>
        </ul>

    )
}

export default Menu