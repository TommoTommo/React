import { Link } from 'react-router-dom';
import "./Navbar.css"
import Buscador from "../Buscador/Buscador"
function Menu() {
    return (
        <ul className="containHeader">
            <Link to="/">  <img className="logo" src="logo.png" alt="Logo" srcset=""></img> </Link>
            <Link className="titulo-href" to="/">HOME</Link>
            <Link className="titulo-href" to="/favoritos">FAVORITOS</Link>
            <Link className="titulo-href" to="/Vertodasseries"> SERIES </Link>
            <Link className="titulo-href" to="/Vertodaspopulares"> POPULARES</Link>

            <Buscador></Buscador>
        </ul >


    )
}

export default Menu