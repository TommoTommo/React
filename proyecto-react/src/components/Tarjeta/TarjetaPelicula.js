import React, {Component} from 'react';
import "./Tarjeta.css"
import { Link } from "react-router-dom";
const imagen = "https://image.tmdb.org/t/p/w342";


class TarjetaPeliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {textoDescripcion:"Mostrar descripción" , textoBoton: "Agregar"}
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

        let recuperoStorage = localStorage.getItem('favoritos');

        if (recuperoStorage !== null){
            let favoritos = JSON.parse(recuperoStorage);
    
            //si está el id, cambiar el texto del botón
            if(favoritos.includes(this.props.datosPelicula.id)){
                this.setState({
                    textoBoton: "Quitar"
                })
            }

        }
    }
    FavoritosPonerSacar(id){

            let Favoritos = []
            let recuperoStorage = localStorage.getItem('StorageFavsPelis');
            
            if(recuperoStorage !== null){
               Favoritos = JSON.parse(recuperoStorage);   
            }
               
            if(Favoritos.includes(id)){
               
                Favoritos = Favoritos.filter( unId => unId !== id)
                //saca el id de la pelic clickeada de array favoritos
               
//los id que esten en favoritos quedan porque estan "in"
              
                this.setState({
                    textoBoton: "Agregar"
                })
            } 
            else {
               Favoritos.push(id);
                this.setState({
                    textoBoton: "Sacar"
                })
            }
    
            let Stringify = JSON.stringify(Favoritos)
            localStorage.setItem('StorageFavsPelis', Stringify)

            console.log("StorageFavsPelis");
            console.log(localStorage.StorageFavsPelis);
        }
        
    render(){
        return (
            <section className="PeliculasPopulares">
                <article className='article'>
                    <Link to = {`/Detallepelicula/id/${this.props.datosPelicula.id}`}>
                    <img className="Fotos" src={imagen + this.props.datosPelicula.poster_path} alt={this.props.datosPelicula.title} />
                    </Link>
                    <h2>{this.props.datosPelicula.title}</h2>
                    <button onClick={()=>this.FavoritosPonerSacar(this.props.datosPelicula.id)} type='button'>{this.state.textoBoton}</button>
                    {this.state.description ? <div><p>{this.props.datosPelicula.overview}</p></div>: false}
                    <button onClick={() =>this.Descrip()} type="button" >{this.state.textoDescripcion}</button>
                </article>
            </section>
        )
    }
    
}


export default TarjetaPeliculas;

