import React from "react";
import Tarjeta from "../Tarjeta/Tarjeta";

function PeliculasConteiner(props) {
    // Asegúrate de que props.contenido es un arreglo antes de mapearlo
    if (!Array.isArray(props.contenido)) {
      return null; // o puedes manejar el error de otra manera
    }
    console.log(props.contenido);
  
    return (
      <div>
        {props.contenido.map(function (unaPelicula) {
          return <Tarjeta key={unaPelicula.id} datosPersonaje={unaPelicula} />;
        })}
      </div>
    );
  }
  
  

export default PeliculasConteiner;