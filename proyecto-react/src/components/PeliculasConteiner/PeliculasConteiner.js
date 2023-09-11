import React, { Component } from "react";
import Tarjeta from "../Tarjeta/Tarjeta";


class PeliculasConteiner extends Component{

    constructor(){
        super();
        this.state = {
           personajes : [],
        }
    }

    componentDidMount(){
        console.log("En componentDidMount");

        fetch("`https://api.themoviedb.org/3/movie/popular?api_key=f2acabc2f1f7dfa29f6493c2fcca003f`")
        .then(response => response.json())
        .then( data => this.setState({
            peliculas: data.results,
        }))
        .catch(e => console.log(e))
    }

   
    render(){
        console.log("Me monté");
        console.log(this.state)
        return(
            <section>
                { 
                   this.state.peliculas.map(function(unaPelicula){
                    return <Tarjeta key={ unaPelicula.id } datosPelicula={ unaPelicula }/>
                   })
                }
            </section>
        )
    }

}


export default PeliculasConteiner;

