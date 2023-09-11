import { Link } from  'react-router-dom';
import "./Navbar.css"
function Menu(){
    return(
        <ul className="containHeader">
            <img className="logo" src="logo.png" alt="Logo" srcset=""></img>
            <Link className="titulo-href" to="/">HOME</Link>
            <Link className="titulo-href" to="/favoritos">FAVORITOS</Link>
            <Link className="titulo-href" to="/Vertodaspelis">VER TODO </Link>
            <Link className="titulo-href" to="/Vertodaspopulares">POPULARES</Link>
            <article class="formulario">
            <form action="./search-results.html" method="get">
                <input class="cuadro_buscar" type="text" name="Buscador" value="" placeholder=" Iniciar busqueda"/>
                <button class="buscarbotton" type="submit">Buscar</button>
            </form> 
        </article>
        </ul>
        

    )
}

export default Menu