import React, { Component } from "react";
import './Detalle.css';
const imagen = "https://image.tmdb.org/t/p/w342";


class DetallePelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelicula: null
        }
    }

    componentDidMount() {
        //busco el id de la pelicula en cuestion
        let peliculaId = this.props.match.params.id;

        // fetch de peliculas
        fetch(`https://api.themoviedb.org/3/movie/${peliculaId}?api_key=f2acabc2f1f7dfa29f6493c2fcca003f`) //peliculas populares
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    pelicula: data,
                })
            })
            .catch(e => console.log(e))

    }

    render() {
        return (
            <main>
                {this.state.pelicula ?
                    (<React.Fragment>
                        <h2>Titulo: {this.state.pelicula.title}</h2>
                        <section>
                            <article>
                                <img src={imagen + this.state.pelicula.poster_path} alt={this.state.pelicula.title} />
                            </article>

                            <article>
                                <ul>
                                    <li> <h3>Calificación/ raiting:</h3> {this.state.pelicula.vote_average}</li>
                                    <br></br>
                                    <li> <h3>Generos:</h3> {this.state.pelicula.genres.map((genre, idx) => <li>{genre.name}</li>)} </li>
                                    <br></br>
                                    <li><h3>Fecha de estreno:</h3> {this.state.pelicula.release_date}</li>
                                    <br></br>
                                    <p><h3>Sinópsis:</h3>   {this.state.pelicula.overview}</p>
                                </ul>
                            </article>
                        </section>
                    </React.Fragment>
                    ) : (
                        <h3>Cargando..</h3>
                    )}
            </main>
        );
    }
}




export default DetallePelicula;