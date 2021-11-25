import React, { useContext } from "react";
import Styled from "@emotion/styled";
import idiomaContext from "../context/idioma/idiomaContext";
import imagenPrincipal from "../imagenes/imagen-principal-sobre-agromyss.jpg";
import Header from "../components/Header";
import SobreAgromyssEspañol from "../modules/sobreAgromyss/español";
import SobreAgromyssIngles from "../modules/sobreAgromyss/ingles";

const Contenedor = Styled.div`
    @media(min-width: 1200px){
        margin-top: 8%;

    }

    h1{
        text-align: center;
        margin: 1rem;
        margin-top: 2rem;
    }


    .contenedor-imagen{
        background-image: url(${imagenPrincipal});
        background-position: top center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 300px;

        @media(min-width: 1200px){
            height: 450px;
            background-attachment: fixed;
        }

    }
`;

const SobreAgromyss = ({ match }) => {
  /* context para el idioma */
  const { idioma } = useContext(idiomaContext);

  return (
    <Contenedor>
      <Header />

      {idioma === "español" ? <h1>Sobre Agromyss</h1> : <h1>About Agromyss</h1>}

      <div className="contenedor-imagen"></div>

      {idioma === "español" ? (
        <SobreAgromyssEspañol />
      ) : (
        <SobreAgromyssIngles />
      )}
    </Contenedor>
  );
};

export default SobreAgromyss;
