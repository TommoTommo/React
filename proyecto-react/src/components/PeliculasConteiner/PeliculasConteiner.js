import React, { Component } from "react";
import "./PeliculasConteiner.css"
import TarjetaPelicula from "../Tarjeta/TarjetaPelicula";
import TarjetaSerie from "../Tarjeta/TarjetaSerie";

class PeliculasConteiner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="containerPeliculas">
        {this.props.infoPeliculas ?
          this.props.infoPeliculas.map((peliculas, indice) => {
            if (indice < 5) {
              return <TarjetaPelicula key={peliculas.id} datosPelicula={peliculas} />;
            }
          }
          )
          : false}

        {this.props.infoSeries ?
          this.props.infoSeries.map((series, indice) => {
            if (indice < 5) {
              return <TarjetaSerie key={series.id} datosSerie={series} />;
            }
          }
          )
          : false}


        {this.props.datosSerie ?
          this.props.datosSerie.map((series) =>
            <TarjetaSerie key={series.id} datosSerie={series} />
          )

          : false}

        {this.props.datosPelicula ?
          this.props.datosPelicula.map((peliculas) =>
            <TarjetaPelicula key={peliculas.id} datosPelicula={peliculas} />
          )

          : false}


      </section>
    )
  }
}

export default PeliculasConteiner;
