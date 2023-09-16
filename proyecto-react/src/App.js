import React from "react";

import  Home from "./screens/Home/Home";
import Favoritos from "./screens/Favoritos/Favoritos";
import VerTodasSeries from "./screens/Vertodasseries/Vertodasseries";
import VerTodasPeliculas from "./screens/Peliculaspopulares/Peliculaspopulares";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import DetallePelicula from "./screens/Detalle/DetallePelicula"
import DetalleSerie from "./screens/Detalle/DetalleSerie"
import ResultadoBusqueda from "./screens/ResultadoBusqueda/ResultadoBusqueda"
import NotFound from "./components/NotFound/NotFound";

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
  <React.Fragment>
    
    <Navbar/>
      <Switch>
      
        <Route path="/" exact={ true } component= { Home } />
        <Route path="/Favoritos" component= { Favoritos } />
        <Route path="/Vertodasseries" component= { VerTodasSeries } />
        <Route path="/Peliculaspopulares" component= { VerTodasPeliculas } />
        <Route path="/Detallepelicula/id/:id" component={ DetallePelicula }/>
        <Route path="/Detalleserie/id/:id" component={ DetalleSerie }/>
        <Route path="/Resultadobusqueda/:querry" component={ResultadoBusqueda}/>
        <Route exact path=""  component={ NotFound } />

      </Switch>
      <Footer/>
      
  </React.Fragment>
  );
}

export default App;












