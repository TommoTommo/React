import React, { Component } from "react";
import PeliculasConteiner from "../../components/PeliculasConteiner/PeliculasConteiner"


class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ArrayPelisFav:[],
             ArraySeriesFav:[] }

    }
    componentDidMount (){       
         


        //Traigo el storage de Pelis Y Series, Los guardo en arrays
        
        let  PelisFav=[];
    let  SeriesFav=[]
        
       let recuperoStoragePelis = localStorage.getItem('StorageFavsPelis');
            
       if(recuperoStoragePelis !== null){
          PelisFav = JSON.parse(recuperoStoragePelis);   
       }
       let recuperoStorageSeries = localStorage.getItem('StorageFavsSeries');
            
       if(recuperoStorageSeries !== null){
          SeriesFav = JSON.parse(recuperoStorageSeries);   
       }
        
        // fetch de peliculas
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f2acabc2f1f7dfa29f6493c2fcca003f`) //peliculas populares
            .then((response) => response.json())
            .then((data) => {
               
                data.results.filter((infopeli)=>{
                    if (PelisFav.includes(infopeli.id)) {
                  
                        console.log(infopeli)
                        this.state.ArrayPelisFav.push(infopeli)
                 
                    }
                    
                })


                this.setState({

                    ArrayPelisFav:this.state.ArrayPelisFav
                })
            })
            .catch(e => console.log(e))

        // fetch de series    
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=f2acabc2f1f7dfa29f6493c2fcca003f`) //series mas vistas
            .then((response) => response.json())
            .then((data) => {
                data.results.filter((infoserie)=>{
                    if (SeriesFav.includes(infoserie.id)) {
                        this.state.ArraySeriesFav.push(infoserie)
                    }
                    
                })
                this.setState({


                    ArraySeriesFav: this.state.ArraySeriesFav
                })
            })
            .catch(e => console.log(e))}

//le tiene que llegar un array de objetos de peliculas/series
            render(){
                return (
                    <section >
                        <article >
                        <h1 className = "tituloPopulares">Favoritos</h1>
                        { <PeliculasConteiner infoPeliculas={this.state.ArrayPelisFav}/> }
                        { <PeliculasConteiner infoSeries={this.state.ArraySeriesFav}/>  }
                        </article>
                    </section>
                )
            }

}

export default Favoritos;