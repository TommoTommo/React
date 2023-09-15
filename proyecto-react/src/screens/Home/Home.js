import React, { Component } from "react";
import "./Home.css"
import PeliculasConteiner from "../../components/PeliculasConteiner/PeliculasConteiner";


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            series: []
        }
    }


    componentDidMount() {
        // fetch de peliculas
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f2acabc2f1f7dfa29f6493c2fcca003f`) //peliculas populares
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    peliculas: data.results
                })
            })
            .catch(e => console.log(e))

        // fetch de series    
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=f2acabc2f1f7dfa29f6493c2fcca003f`) //series mas vistas
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    series: data.results
                })
            })
            .catch(e => console.log(e))
    }

    render() {

        return (
            <main>
            <div className = "hola">
              <h2 className="titulos">Peliculas Populares</h2>
                {this.state.peliculas.length > 0 ? <PeliculasConteiner infoPeliculas={this.state.peliculas}/> : <h3>Cargando...</h3> }
            </div>
            
            
  
            <div className = "hola">
              
                <h2 className="titulos">Series mas vistas</h2> 
               
              {this.state.series.length > 0 ? <PeliculasConteiner infoSeries={this.state.series}/> : <h3>Cargando...</h3> }
  
            </div>
  
          </main>
           
        )
    }

}

export default Home;
