import React, {Component} from 'react';
import "./Tarjeta.css"
const imagen = "https://image.tmdb.org/t/p/w342";


class TarjetaSerie extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return (
            <section className="PeliculasPopulares">
                <article className='article'>
                <img className="Fotos" src={imagen + this.props.datosSerie.poster_path} alt={this.props.datosSerie.title} />
                <h2>{this.props.datosSerie.name}</h2>
                </article>
            </section>
        )
    }
    
}


export default TarjetaSerie;