import React, { useContext } from "react";
import GaleriaComponent from "../components/galeria";
import styled from "@emotion/styled";
import { useEnlacesContext } from "../context/enlaces/UseEnlaces";

const Contenedor = styled.div`
  .container {
    margin-top: 8rem;
    margin-bottom: 2rem;

    h1 {
      text-align: center;
    }
  }
`;

const Galeria = () => {
  const { ocultarEnlaces } = useContext(useEnlacesContext);

  return (
    <Contenedor>
      <div className="container" onMouseOver={ocultarEnlaces}>
        <h1>Galeria</h1>
        <GaleriaComponent />
      </div>
    </Contenedor>
  );
};

export default Galeria;
