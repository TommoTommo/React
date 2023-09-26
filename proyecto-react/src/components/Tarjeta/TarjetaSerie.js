import React, {Component} from 'react';
import "./Tarjeta.css"
import { Link } from "react-router-dom";
const imagen = "https://image.tmdb.org/t/p/w342";


class TarjetaSerie extends Component {
  constructor(props) {
    super(props);

    this.state = {textoDescripcion:"Mostrar descripción" , textoBoton: "Agregar a favoritos"}
  }

  Descrip(){
    if(this.state.description === false){
      this.setState({
        description:true,
        textoDescripcion:"Ocultar descripción"
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
    let recuperoStorage = localStorage.getItem('serie');

    if (recuperoStorage === null) {
      this.setState({
        textoBoton: "Agregar a favoritos",
      });
    } 
    else if (recuperoStorage.includes(this.props.datosSerie.id)) {
      this.setState({
        textoBoton: "Quitar de favoritos",
      });
    }
  }

  FavoritosPonerSacar(){
    let ArraySeries = [this.props.datosSerie.id];
    let SeriesTraidas = localStorage.getItem("serie");
    let LocasStorage = "";

    if (SeriesTraidas === null) {
      SeriesTraidas = [];
      LocasStorage = JSON.stringify(ArraySeries);
      this.setState({
        textoBoton: "Quitar de favoritos",
      });
    }

    let StorageSeries = "";

    if (SeriesTraidas.length !== 0) {
      let TraigoStorage = JSON.parse(SeriesTraidas);
      StorageSeries = TraigoStorage.concat(ArraySeries);
      LocasStorage = JSON.stringify(StorageSeries);
      this.setState({
        textoBoton: "Quitar de favoritos",
      });
    }

    if (SeriesTraidas.includes(this.props.datosSerie.id)) {
      let TraigoStorage = JSON.parse(SeriesTraidas);
      StorageSeries = TraigoStorage.filter((item) => item !== this.props.datosSerie.id);
      LocasStorage = JSON.stringify(StorageSeries);
      this.setState({
        textoBoton: "Agregar a favoritos",
      });
    }

    localStorage.setItem("serie", LocasStorage);
  }

  render(){
    return (
      <section className="SeriesPopulares">
        <article className='article'>
          <ul>
            <Link to = {`/Detalleserie/id/${this.props.datosSerie.id}`} className = 'link'>
              <img className="Fotos" src={imagen + this.props.datosSerie.poster_path} alt={this.props.datosSerie.title} />
              <h2>{this.props.datosSerie.name}</h2>
            </Link>
            <button onClick={()=>this.FavoritosPonerSacar()} type='button' className='botonPelisSeries'>{this.state.textoBoton}</button>
            {this.state.description ? <div><p>{this.props.datosSerie.overview}</p></div>: false}
            <button onClick={() =>this.Descrip()} type="button" className='botonPelisSeries'>{this.state.textoDescripcion}</button>
          </ul>
        </article>
      </section>
    )
  }  
}

export default TarjetaSerie;