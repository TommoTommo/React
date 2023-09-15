import React, { Component } from "react";
import "./ResultadoBusqueda.css"
import PeliculasConteiner from "../../components/PeliculasConteiner/PeliculasConteiner";

class ResultadoBusqueda extends Component{
    constructor(props) {
        super(props);
        this.state = {
            resultadoPelis: [],
            resultadoSeries: []
        }
    }

    componentDidMount() {
        // fetch de peliculas
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.querry}&api_key=8316164d28e6834ac04fce13a384de41`) //peliculas populares
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    resultadoPelis: data.results
                })
            })
            .catch(e => console.log(e))

        // fetch de series    
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.querry}&api_key=8316164d28e6834ac04fce13a384de41`) //series mas vistas
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    resultadoSeries: data.results
                })
            })
            .catch(e => console.log(e))
    }

    render() {
        return (
            
           
          <section>
            <h1 className="blanco">Tu resultado de búsqueda es: '{this.props.match.params.querry}'</h1>
            {/* Renderizar resultados de películas */}
            {this.state.resultadoPelis.length > 0 ? <PeliculasConteiner infoPeliculas={this.state.resultadoPelis}/> : null}
    
            {/* Renderizar resultados de series */}
            {this.state.resultadoSeries.length > 0 ? <PeliculasConteiner infoSeries={this.state.resultadoSeries}/> : null}
            
            {/* Mensaje de carga */}
            {this.state.resultadoPelis.length === 0 && this.state.resultadoSeries.length === 0 ? <h3>Cargando... </h3> : null}
          </section>
        )
      }
    }
    
    export default ResultadoBusqueda;