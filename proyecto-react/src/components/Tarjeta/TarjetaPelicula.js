import React, {Component} from 'react';
import "./Tarjeta.css"
import { Link } from "react-router-dom";
const imagen = "https://image.tmdb.org/t/p/w342";


class TarjetaPeliculas extends Component {
    constructor(props) {
        super(props);

        this.state = {textoDescripcion:"Mostrar descripción" , textoBoton: "Agregar a favoritos"}
    }

    Descrip(){
        if(this.state.description === false){
            this.setState({
                description:true,
                textoDescripcion:"Ocultar descripción "
            })
        } 
        else{
            this.setState({
                description:false,
                textoDescripcion:"Mostrar descripción"
            })
        }

    }
    
    componentDidMount (){

        let recuperoStorage = localStorage.getItem('pelicula');



        if (recuperoStorage === null) {
            this.setState({
                textoBoton: "Agregar a favoritos",
            });
          } else if (recuperoStorage.includes(this.props.datosPelicula.id)) {
            this.setState({
                textoBoton: "Quitar de favoritos",
            });
          }




    }

    FavoritosPonerSacar(){
        let arrayPersonajes = [this.props.datosPelicula.id];
        let Pelistraidas = localStorage.getItem("pelicula");
        let LocasStorage = "";
    
        if (Pelistraidas === null) {
          Pelistraidas = [];
          LocasStorage = JSON.stringify(arrayPersonajes);
          this.setState({
            textoBoton: "Quitar de favoritos",
          });
        }

    
        let PelisFinales = "";
    
        if (Pelistraidas.length !== 0) {
          let TraigoStorage = JSON.parse(Pelistraidas);
          PelisFinales = TraigoStorage.concat(arrayPersonajes);
          LocasStorage = JSON.stringify(PelisFinales);
          this.setState({
            textoBoton: "Quitar de favoritos",
          });
        }
    
        if (Pelistraidas.includes(this.props.datosPelicula.id)) {
          let TraigoStorage = JSON.parse(Pelistraidas);
          PelisFinales = TraigoStorage.filter(
            (item) => item !== this.props.datosPelicula.id
          );
          LocasStorage = JSON.stringify(PelisFinales);
          this.setState({
            textoBoton: "Agregar a favoritos",
          });
        }
    
        localStorage.setItem("pelicula", LocasStorage);
 
        }
        
    render(){
        return (
            <section className="PeliculasPopulares">
                <article className='article'>
                  <ul>
                    <Link to = {`/Detallepelicula/id/${this.props.datosPelicula.id}`}>
                    <img className="Fotos" src={imagen + this.props.datosPelicula.poster_path} alt={this.props.datosPelicula.title} />
                    </Link>
                    <h2>{this.props.datosPelicula.title}</h2>
                    <button onClick={()=>this.FavoritosPonerSacar()} type='button'>{this.state.textoBoton}</button>
                    {this.state.description ? <div><p>{this.props.datosPelicula.overview}</p></div>: false}
                    <button onClick={() =>this.Descrip()} type="button" >{this.state.textoDescripcion}</button>
                    </ul>
                </article>
            </section>
        )
    }
    
}


export default TarjetaPeliculas;

