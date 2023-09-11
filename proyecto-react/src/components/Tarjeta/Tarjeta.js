import React, {Component} from 'react';


class TarjetaPeliculas extends Component {
   

    render(){
        return (
            <article className='character-card'>
                <img src={this.props.datosPelicula.poster_path} alt={this.props.datosPelicula.title} />
                <h2>{this.props.datosPersonaje.title}</h2>
            </article>
        )
    }
    
}

export default TarjetaPeliculas;

