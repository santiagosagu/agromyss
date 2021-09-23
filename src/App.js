import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import Contacto from './components/page/Contacto';
import Corporativo from './components/page/Corporativo';
import DetalleProducto from './components/page/DetalleProducto';
import Home from './components/page/Home';
import SobreAgromyss from './components/page/SobreAgromyss';
import Sustentabilidad from './components/page/Sustentabilidad';
import VideoCorporativoPagina from './components/page/VideoCorporativoPagina';
import Productos from './components/Productos/Productos';
import AuthState from './context/auth/AuthState';

/* context */
import IdiomaState from './context/idioma/idiomaState'



function App() {

  return (
    <>
      <IdiomaState>
        <AuthState>

          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/corporativo' component={Corporativo} />
              <Route exact path='/contacto' component={Contacto} />
              <Route exact path='/corporativo/video-corporativo' component={VideoCorporativoPagina} />
              <Route exact path='/sobre-agromyss/:item' component={SobreAgromyss} />
              <Route exact path='/sustentabilidad/:item' component={Sustentabilidad} />

              {/* productos chocolates */}
              <Route exact path='/productos-servicios/productos/:producto' component={Productos} />
              <Route exact path='/productos-servicios/productos/:producto/:detalle' component={DetalleProducto} />
            </Switch>
          </Router>

        </AuthState>
      </IdiomaState>
    </>
  );
}

export default App;
