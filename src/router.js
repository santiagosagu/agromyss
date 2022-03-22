import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacto from "./page/Contacto";
import Corporativo from "./page/Corporativo";
import DetalleProducto from "./page/DetalleProducto";
import Home from "./page/Home";
import SobreAgromyss from "./page/SobreAgromyss";
import Sustentabilidad from "./page/Sustentabilidad";
import VideoCorporativoPagina from "./page/VideoCorporativoPagina";
import ProductosChocolates from "./modules/Productos/ProductosChocolates";
import Admin from "./page/Admin";
import Galeria from "./page/Galeria";
import ProductosServicios from "./page/ProductosServicios";
import ProductosBombones from "./modules/Productos/ProductosBombones";
import ProductosSnack from "./modules/Productos/ProductosSnacks";

const RouterUser = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/corporativo" component={Corporativo} />
        <Route exact path="/contacto" component={Contacto} />
        <Route
          exact
          path="/corporativo/video-corporativo"
          component={VideoCorporativoPagina}
        />

        <Route exact path="/sobre-agromyss" component={SobreAgromyss} />
        <Route exact path="/sobre-agromyss/:item" component={SobreAgromyss} />

        <Route
          exact
          path="/productos-servicios"
          component={ProductosServicios}
        />

        <Route exact path="/sustentabilidad" component={Sustentabilidad} />
        <Route
          exact
          path="/sustentabilidad/:item"
          component={Sustentabilidad}
        />

        <Route exact path="/galeria" component={Galeria} />

        <Route exact path="/admin" component={Admin} />

        {/* productos chocolates */}
        <Route
          exact
          path="/productos-servicios/productos/chocolatinas"
          component={ProductosChocolates}
        />

        <Route
          exact
          path="/productos-servicios/productos/bombones"
          component={ProductosBombones}
        />

        <Route
          exact
          path="/productos-servicios/productos/snacks"
          component={ProductosSnack}
        />

        <Route
          exact
          path="/productos-servicios/productos/:producto/:detalle"
          component={DetalleProducto}
        />
      </Switch>
    </Router>
  );
};

export default RouterUser;
