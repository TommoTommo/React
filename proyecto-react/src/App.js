import React from "react";

import Home from "./screens/Home/Home";
import Favoritos from "./screens/Favoritos/Favoritos";
import Vertodaspelis from "./screens/Vertodaspelis/Vertodaspelis";
import Vertodaspopulares from "./screens/Vertodaspopulares/Vertodaspopulares";
import Navbar from "./components/Navbar/Navbar";

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
  <React.Fragment>
    
    <Navbar/>
      <Switch>
      
        <Route path="/" exact={ true } component= { Home } />
        <Route path="/favoritos" component= { Favoritos } />
        <Route path="/Vertodaspelis" component= { Vertodaspelis } />
        <Route path="/Vertodaspelis" component= { Vertodaspelis } />
        <Route path="/Vertodaspopulares" component= { Vertodaspopulares } />

      </Switch>
      
  </React.Fragment>
  );
}

export default App;












