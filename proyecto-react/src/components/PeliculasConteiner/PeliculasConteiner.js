import React, { Component } from "react";
import Tarjeta from "../Tarjeta/Tarjeta";

class PeliculasConteiner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { peliculas } = this.props; // Acceder al array de películas desde props
    console.log(peliculas);
    return (
      <section>
        {peliculas.map((peliculas, indice) => {
         if (indice < 6) {
          return <Tarjeta key={peliculas.id} datosPelicula={peliculas} />;
         }
        })}
        
      </section>
    );
  }
}

export default PeliculasConteiner;