import React, { Component } from "react";
import './Detalle.css';
const imagen = "https://image.tmdb.org/t/p/w342";

class DetalleSerie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: null 
        }
    }


    componentDidMount() {
        //busco el id de la serie en cuestion
        let serieId = this.props.match.params.id;

        // fetch de peliculas
        fetch(`https://api.themoviedb.org/3/tv/${serieId}?api_key=f2acabc2f1f7dfa29f6493c2fcca003f`) //peliculas populares
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    series: data,
                })
            })
            .catch(e => console.log(e))

    }
    render() {
        return (
            <main>
                {this.state.series ?
                    (<React.Fragment>
                        <h2 className="TituloDetalle">{this.state.series.title}</h2>
                        <section>
                            <article>
                                <img src={imagen + this.state.series.poster_path} alt={this.state.series.title} />
                            </article>

                            <article>
                                <ul>
                                    <li> <h3>Calificación/ raiting:</h3> {this.state.series.vote_average}</li>
                                    <br></br>
                                    <li> <h3>Generos:</h3> {this.state.series.genres.map((genres, idx) => <ul>{genres.name}</ul>)} </li>
                                    <br></br>
                                    <li><h3>Fecha de estreno:</h3> {this.state.series.first_air_date}</li>
                                    <br></br>
                                    <li><h3>Duracion:</h3>{this.state.series.number_of_seasons} temporadas</li>
                                    <p><h3>Sinópsis:</h3>   {this.state.series.overview}</p>
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

export default DetalleSerie;