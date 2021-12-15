import React, { useContext } from "react";
import GaleriaComponent from "../components/galeria";
import Header from "../components/Header";
import styled from "@emotion/styled";
import { useEnlacesContext } from "../context/enlaces/UseEnlaces";

const Contenedor = styled.div`
  .container {
    margin-top: 8rem;

    h1 {
      text-align: center;
    }
  }
`;

const Galeria = () => {
  const { ocultarEnlaces } = useContext(useEnlacesContext);

  return (
    <Contenedor>
      <Header />
      <div className="container" onMouseOver={ocultarEnlaces}>
        <h1>Galeria</h1>
        <GaleriaComponent />
      </div>
    </Contenedor>
  );
};

export default Galeria;
