import React from "react";
import AuthState from "./context/auth/AuthState";
import CarritoState from "./context/carritoContext/CarritoContext";

/* context */
import IdiomaState from "./context/idioma/idiomaState";
import UseEnlaces from "./context/enlaces/UseEnlaces";
import RouterUser from "./router";

function App() {
  return (
    <>
      <UseEnlaces>
        <CarritoState>
          <IdiomaState>
            <AuthState>
              <RouterUser />
            </AuthState>
          </IdiomaState>
        </CarritoState>
      </UseEnlaces>
    </>
  );
}

export default App;
