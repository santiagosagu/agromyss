import React, { useContext } from "react";
import authContext from "../context/auth/authContext";
import { useEnlacesContext } from "../context/enlaces/UseEnlaces";

const Admin = () => {
  const { isAdmin } = useContext(authContext);

  const { ocultarEnlaces } = useContext(useEnlacesContext);

  return (
    <div>
      <div
        style={{ marginTop: "8rem", textAlign: "center" }}
        onMouseOver={ocultarEnlaces}
      >
        {isAdmin ? <h1>Hola Admin</h1> : <h1>No puedes estar aqui</h1>}
      </div>
    </div>
  );
};

export default Admin;
