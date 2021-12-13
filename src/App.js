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
