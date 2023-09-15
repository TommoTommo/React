import React from "react";

import Home from "./screens/Home/Home";
import Favoritos from "./screens/Favoritos/Favoritos";
import Vertodaspelis from "./screens/VerTodo/Vertodaspelis";
import Vertodaspopulares from "./screens/VerTodo/Vertodaspopulares";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import DetallePelicula from "./screens/Detalle/DetallePelicula"
import DetalleSerie from "./screens/Detalle/DetalleSerie"
import ResultadoBusqueda from "./screens/ResultadoBusqueda/ResultadoBusqueda"

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
  <React.Fragment>
    
    <Navbar/>
      <Switch>
      
        <Route path="/" exact={ true } component= { Home } />
        <Route path="/favoritos" component= { Favoritos } />
        <Route path="/Vertodaspelis" component= { Vertodaspelis } />
        <Route path="/Vertodaspopulares" component= { Vertodaspopulares } />
        <Route path="/Detallepelicula/id/:id" component={ DetallePelicula }/>
        <Route path="/Detalleserie/id/:id" component={ DetalleSerie }/>
        <Route path="/Resultadobusqueda/:querry" component={ResultadoBusqueda}/>

      </Switch>
      <Footer/>
      
  </React.Fragment>
  );
}

export default App;












