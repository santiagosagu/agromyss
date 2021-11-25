import React from "react";
import AuthState from "./context/auth/AuthState";

/* context */
import IdiomaState from "./context/idioma/idiomaState";
import RouterUser from "./router";

function App() {
  return (
    <>
      <IdiomaState>
        <AuthState>
          <RouterUser />
        </AuthState>
      </IdiomaState>
    </>
  );
}

export default App;
