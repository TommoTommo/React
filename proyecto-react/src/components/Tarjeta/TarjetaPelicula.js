import React, {Component} from 'react';
import "./Tarjeta.css"
const imagen = "https://image.tmdb.org/t/p/w342";


class TarjetaPeliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return (
            <section className="PeliculasPopulares">
                <article className='article'>
                <img className="Fotos" src={imagen + this.props.datosPelicula.poster_path} alt={this.props.datosPelicula.title} />
                <h2>{this.props.datosPelicula.title}</h2>
                </article>
            </section>
        )
    }
    
}


export default TarjetaPeliculas;

