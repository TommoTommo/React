import React, {Component} from 'react';
const imagen = "https://image.tmdb.org/t/p/w342$"

class TarjetaPeliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return (
            <article className='character-card'>
                <img src={imagen + this.props.datosPelicula.poster_path} alt={this.props.datosPelicula.title} />
                <h2>{this.props.datosPelicula.title}</h2>
            </article>
        )
    }
    
}


export default TarjetaPeliculas;

