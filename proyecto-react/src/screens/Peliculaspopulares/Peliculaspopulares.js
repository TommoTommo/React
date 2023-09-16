import React, { Component } from "react";
import './Peliculaspopulares.css';
import PeliculasConteiner from "../../components/PeliculasConteiner/PeliculasConteiner";

class VerTodasPeliculas extends Component {
    constructor(props) {
      super(props);
      this.state = {
        peliculas:[],
        otras: 2
      };
    }

componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US&page=1`)
    .then((response) => response.json())
    .then((data) =>{
        this.setState({
          peliculas : data.results
        })
    })
    .catch((error) => console.log(error));
}

MostrasrMasPeliculas() {
    let numero = this.state.otras;
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US&page=${numero}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          peliculas: data.results.concat(this.state.peliculas),
          otras: numero + 1,
        })
      )
      .catch((error) => console.log(error));
  }
  

  render() {
    return(
      <React.Fragment>
        
        {this.state.peliculas.length > 0 ?  
            <main>
              <div>
                <h2 className="white">Peliculas populares</h2>
                <button onClick={() => this.MostrasrMasPeliculas()} > <h2>Mas Titulos</h2></button>
              </div>
            <PeliculasConteiner datosPelicula={this.state.peliculas} /> 
            </main>
        :
        <h3>Cargando ...</h3>}
       
        
      </React.Fragment>
    )
  }
}

export default VerTodasPeliculas;