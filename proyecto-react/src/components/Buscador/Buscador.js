import React, {Component} from "react"
import './Buscador.css'
import { Link } from "react-router-dom";

class Buscador extends Component{
    constructor(){
        super();
        this.state = {
            value: ''
        }
    }
    detenerDefault(evento) {
        evento.preventDefault();
      }
    
    
    Guardartexto(event){
        this.setState(
            {value: event.target.value}
            )
    }
    render(){
        return(
            <form class="wrap" onSubmit={(e) => this.detenerDefault(e)}>
              <div class="search">
                  <input className="cuadro_buscar" type="text" placeholder="Buscar" onChange={(e) => this.Guardartexto(e)}
          value={this.state.value}/>
                  <Link to={`/Resultadobusqueda/${this.state.value}`}>
                  <button class="buscarbotton" type="submit" fdprocessedid="7hvi4l">Buscar</button>
                </Link>
              </div>
            </form>
        )
    }
}
export default Buscador;

