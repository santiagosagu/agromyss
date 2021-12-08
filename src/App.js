import React from "react";
import AuthState from "./context/auth/AuthState";
import CarritoState from "./context/carritoContext/CarritoContext";

/* context */
import IdiomaState from "./context/idioma/idiomaState";
import RouterUser from "./router";

function App() {
  return (
    <>
      <CarritoState>
        <IdiomaState>
          <AuthState>
            <RouterUser />
          </AuthState>
        </IdiomaState>
      </CarritoState>
    </>
  );
}

export default App;
