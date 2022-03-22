import React from "react";
import AuthState from "./context/auth/AuthState";
import CarritoState from "./context/carritoContext/CarritoContext";

/* context */
import IdiomaState from "./context/idioma/idiomaState";
import UseEnlaces from "./context/enlaces/UseEnlaces";
import RouterUser from "./router";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <script
          type="text/javascript"
          scr="https://checkout.wompi.co/widget.js"
        ></script>
      </Helmet>
      <AuthState>
        <IdiomaState>
          <CarritoState>
            <UseEnlaces>
              <RouterUser />
            </UseEnlaces>
          </CarritoState>
        </IdiomaState>
      </AuthState>
    </>
  );
}

export default App;
