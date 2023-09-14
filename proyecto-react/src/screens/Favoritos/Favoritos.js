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
                let ArrayPelisFav = data.results.filter((cosas)=>{
                    return PelisFav.includes(cosas.id)
                })


                this.setState({

                    ArrayPelisFav:ArrayPelisFav
                })
            })
            .catch(e => console.log(e))

        // fetch de series    
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=f2acabc2f1f7dfa29f6493c2fcca003f`) //series mas vistas
            .then((response) => response.json())
            .then((data) => {
                let ArraySeriesFav = data.results.filter((cosas)=>{
                    return SeriesFav.includes(cosas.id)
                })
                this.setState({


                    ArraySeriesFav: ArraySeriesFav
                })
            })
            .catch(e => console.log(e))}


            render(){
                return (
                    <section >
                        <article >
                            <p>{this.state.ArrayPelisFav}</p>
                        { <PeliculasConteiner infoPeliculas={this.state.ArrayPelisFav}/> }
                        { <PeliculasConteiner infoSeries={this.state.ArraySeriesFav}/>  }
                        </article>
                    </section>
                )
            }

}

export default Favoritos;