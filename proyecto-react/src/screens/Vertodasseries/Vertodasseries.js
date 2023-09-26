import React, { Component } from "react";
import  Filtro from "../../components/Filtro/Filtro";
import './Vertodasseries.css';
import PeliculasConteiner from "../../components/PeliculasConteiner/PeliculasConteiner";

class VerTodasSeries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series:[],
      otras: 2
    };
  }

componentDidMount() {
  fetch(`https://api.themoviedb.org/3/tv/popular?api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US&page=1`)
  .then((response) => response.json())
  .then((data) =>{
      this.setState({
        series : data.results
      })
  })
  .catch((error) => console.log(error));
}

filtrarSeries(textoAFiltrar){
  //  Desarrollar el método para que deje solo los personajes en donde el texto a filtrar esté incluido en el nombre.
  let SeriesFiltrados = this.state.series.filter(function(unaserie){
    return unaserie.title.includes(textoAFiltrar) //includes retorna TRUE o FALSE
  })

  this.setState({
    datosSerie: SeriesFiltrados,
  })
}

MostrasrMasSeries() {
  let numero = this.state.otras;
  fetch(`https://api.themoviedb.org/3/tv/popular?api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US&page=${numero}`)
    .then((response) => response.json())
    .then((data) =>
      this.setState({
        series: data.results.concat(this.state.series),
        otras: numero + 1,
      })
    )
    .catch((error) => console.log(error));
}
  

  render() {
    return(
      <React.Fragment>
        
        {this.state.series.length > 0 ?  
            <main>
              <div>
                <h2 className="white">Series</h2>
                
                <button onClick={() => this.MostrasrMasSeries()} > <h2>Mas Titulos</h2></button>
                <Filtro filtrar={(texto) => this.filtrarSeries(texto)} />
              </div>
            <PeliculasConteiner datosSerie={this.state.series} /> 
            </main>
        :
        <h3>Cargando ...</h3>}
        
      </React.Fragment>
    )
  }
}

export default VerTodasSeries;