import React, {Component} from 'react';


class TarjetaPelicula extends Component {
    constructor(props){
        super(props)
        this.state = {
            textoBoton: "Agregar a favoritos",
        }
    }

    componentDidMount(){
        //Chequear si el id está en el array de favoritos
        let recuperoStorage = localStorage.getItem('favoritos');

        if (recuperoStorage !== null){
            let favoritos = JSON.parse(recuperoStorage);
    
            //si está el id, cambiar el texto del botón
            if(favoritos.includes(this.props.datosPelicula.id)){
                this.setState({
                    textoBoton: "Quitar de favoritos"
                })
            }

        }
    }

    //Si el id está en el array debe sacarlo.
    //Si el id NO ESTÁ en el array debe agregarlo.
    
    agergarYSacarDeFavs(id){
        //Guardar un id en un array y luego en localStorage
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos');

        if (recuperoStorage !== null){
            favoritos = JSON.parse(recuperoStorage);
        }

        if(favoritos.includes(id)){
            //Si el id está en el array. ¿Qué tenemos que hacer?
            //Sacarlo del array.
            favoritos = favoritos.filter( unId => unId !== id)

            //Mostrarle un cambio al usuario en la pantalla.
            this.setState({
                textoBoton : "Agregar a favoritos"
            })

        } else {
            //Si el id NO ESTÁ en el array. ¿Qué tenemos que hacer?
            favoritos.push(id);
    
            this.setState({
                textoBoton: "Quitar de favoritos",
            })

        }

        //Guardar en localStorage
        let favoritosToString = JSON.stringify(favoritos);        
        localStorage.setItem('favoritos', favoritosToString);

        console.log(localStorage);

    }



    render(){
        return (
            <article className='PeliculasPopulares'>
                <img src={this.props.datosPelicula.image} alt={this.props.datosPelicula.name} />
                <button onClick={()=>this.agergarYSacarDeFavs(this.props.datosPelicula.id)} type='button'>{this.state.textoBoton}</button>
                <h2>{this.props.datosPelicula.name}</h2> 
                <p>{this.props.datosPelicula.estreno}</p> 
            </article>
        )
    }
    
}

export default TarjetaPelicula;