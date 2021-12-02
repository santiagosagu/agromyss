import React, { useContext, useEffect, useState } from "react";
import Styled from "@emotion/styled";
import idiomaContext from "../context/idioma/idiomaContext";
import imagenPrincipal from "../imagenes/imagen-principal-sobre-agromyss.jpg";
import Header from "../components/Header";
import SobreAgromyssEspañol from "../modules/sobreAgromyss/español";
import SobreAgromyssIngles from "../modules/sobreAgromyss/ingles";
import { animateScroll as scroll } from "react-scroll";

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
  const [userScroll, setUserScroll] = useState(0);

  const url = match.params.item;
  const width = window.innerWidth;

  useEffect(() => {
    if (idioma === "español") {
      if (!url) {
        setUserScroll(0);
      }

      if (url === "responsabilidad-social-y-ambiental") {
        setUserScroll(width > 1000 ? 600 : 1100);
      }

      if (url === "codigo-de-conducta-del-proveedor") {
        setUserScroll(width > 1000 ? 800 : 1700);
      }

      if (url === "declaracion-de-esclavitud-moderna") {
        setUserScroll(width > 1000 ? 1150 : 2550);
      }

      if (url === "politica-ambiental-y-social") {
        setUserScroll(width > 1000 ? 1300 : 3040);
      }

      if (url === "politica-de-inquietudes-eticas") {
        setUserScroll(width > 1000 ? 1300 : 3900);
      }
    }

    if (idioma === "ingles") {
      if (!url) {
        setUserScroll(0);
      }

      if (url === "responsabilidad-social-y-ambiental") {
        setUserScroll(width > 1000 ? 600 : 1100);
      }

      if (url === "codigo-de-conducta-del-proveedor") {
        setUserScroll(width > 1000 ? 800 : 1700);
      }

      if (url === "declaracion-de-esclavitud-moderna") {
        setUserScroll(width > 1000 ? 1150 : 2550);
      }

      if (url === "politica-ambiental-y-social") {
        setUserScroll(width > 1000 ? 1300 : 3040);
      }

      if (url === "politica-de-inquietudes-eticas") {
        setUserScroll(width > 1000 ? 1300 : 3900);
      }
    }
  }, [url, width, idioma]);

  scroll.scrollTo(userScroll);

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
