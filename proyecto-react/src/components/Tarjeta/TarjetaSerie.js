import React, {Component} from 'react';
import "./Tarjeta.css"
const imagen = "https://image.tmdb.org/t/p/w342";


class TarjetaSerie extends Component {
    constructor(props) {
        super(props);
        this.state = {textoboton: "Agregar" };
    }
    componentDidMount (){

        let recuperoStorage = localStorage.getItem('favoritos');

        if (recuperoStorage !== null){
            let favoritos = JSON.parse(recuperoStorage);
    
            //si está el id, cambiar el texto del botón
            if(favoritos.includes(this.props.datosSerie.id)){
                this.setState({
                    textoBoton: "Quitar"
                })
            }

        }
    }
    FavoritosPonerSacar(id){

            let Favoritos = []
            let recuperoStorage = localStorage.getItem('StorageFavsSeries');
            
            if(recuperoStorage !== null){
               Favoritos = JSON.parse(recuperoStorage);   
            }
               
            if(Favoritos.includes(id)){
               
           
                Favoritos = Favoritos.filter( function(id){
                    return id in Favoritos
//los id que esten en favoritos quedan porque estan "in"
                });
                this.setState({
                    textoboton: "Agregar"
                })
    
    
            } else {
               Favoritos.push(id);
                this.setState({
                    textoboton: "Sacar"
                })
            }
    
            let Stringify = JSON.stringify(Favoritos)
            localStorage.setItem('StorageFavsSeries', Stringify)
    
            console.log(localStorage)
        }
    render(){
        return (
            <section className="PeliculasPopulares">
                <article className='article'>
                <img className="Fotos" src={imagen + this.props.datosSerie.poster_path} alt={this.props.datosSerie.title} />
                <h2>{this.props.datosSerie.name}</h2>
                <button onClick={()=>this.FavoritosPonerSacar(this.props.datosSerie.id)} type='button'>{this.state.textoboton}</button>
                
                </article>
            </section>
        )
    }
    
}


export default TarjetaSerie;