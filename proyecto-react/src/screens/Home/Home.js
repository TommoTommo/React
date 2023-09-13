import PeliculasConteiner from "../../components/PeliculasConteiner/PeliculasConteiner";
import React, { Component } from "react";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            series: []
        }
    }


    componentDidMount() {

        fetch("'https://api.themoviedb.org/3/movie/popular?api_key=f2acabc2f1f7dfa29f6493c2fcca003f`") //peliculas populares
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    peliculas: data.results,
                })
            })
            .catch(e => console.log(e))

        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=f2acabc2f1f7dfa29f6493c2fcca003f`) //series mas vistas
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    series: data.results,
                })
            })
            .catch(e => console.log(e))

    }


    render() {

        return (
            
            <section>
                
                <PeliculasConteiner props={this.state.peliculas} />
                <PeliculasConteiner props={this.state.series} />

            </section>
        )
    }

}

export default Home;
