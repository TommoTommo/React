
import { Link } from  'react-router-dom';
import "./Navbar.css"
function Menu(){
    return(
        <ul className="genero-titulo-div">
            <Link className="titulo-href" to="/">HOME</Link>
            <Link className="titulo-href" to="/favoritos">Favoritos</Link>
            <Link className="titulo-href" to="/Vertodaspelis">Vertodaspelis</Link>
            <Link className="titulo-href" to="/Vertodaspopulares">Vertodaspopulares</Link>
        </ul>

    )
}

export default Menu