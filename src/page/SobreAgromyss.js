import React, { useContext, useEffect, useState } from "react";
import Styled from "@emotion/styled";
import idiomaContext from "../context/idioma/idiomaContext";
import imagenPrincipal from "../imagenes/imagen-principal-sobre-agromyss.jpg";
import Header from "../components/Header";
import SobreAgromyssEspañol from "../modules/sobreAgromyss/español";
import SobreAgromyssIngles from "../modules/sobreAgromyss/ingles";
import { animateScroll as scroll, scroller } from "react-scroll";
import { useEnlacesContext } from "../context/enlaces/UseEnlaces";

const Contenedor = Styled.div`
    @media(min-width: 1200px){
        margin-top: 11%;

    }

    h1{
        text-align: center;
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

  const [section, setSection] = useState("");

  const [scrollType] = useState({
    duration: 100,
    delay: 0,
    smooth: true, // linear “easeInQuint” “easeOutCubic”
    offset: window.innerWidth > 1000 ? -200 : -100,
  });

  const { ocultarEnlaces } = useContext(useEnlacesContext);

  const url = match.params.item;
  const width = window.innerWidth;

  useEffect(() => {
    if (!url) {
      setSection("inicio");

      scroll.scrollTo();
    }
    if (idioma === "español") {
      if (url === "responsabilidad-social-y-ambiental") {
        setSection("responsabilidad social y ambiental");
      }

      if (url === "codigo-de-conducta-del-proveedor") {
        setSection("codigo de conducta del proveedor");
      }

      if (url === "declaracion-de-esclavitud-moderna") {
        setSection("declaracion de esclavitud moderna");
      }

      if (url === "politica-ambiental-y-social") {
        setSection("politica ambiental y social");
      }

      if (url === "politica-de-inquietudes-eticas") {
        setSection("politica de inquietudes eticas");
      }
    }

    if (idioma === "ingles") {
      if (url === "responsabilidad-social-y-ambiental") {
        setSection("social and environmental");
      }

      if (url === "codigo-de-conducta-del-proveedor") {
        setSection("supplier code of conduct");
      }

      if (url === "declaracion-de-esclavitud-moderna") {
        setSection("modern slavery statement");
      }

      if (url === "politica-ambiental-y-social") {
        setSection("environmental and social policy");
      }

      if (url === "politica-de-inquietudes-eticas") {
        setSection("ethical concerns policy");
      }
    }
  }, [url, width, idioma]);

  scroller.scrollTo(section, scrollType);

  return (
    <Contenedor>
      <Header />

      <div onMouseOver={ocultarEnlaces}>
        {idioma === "español" ? (
          <h1>Sobre Agromyss</h1>
        ) : (
          <h1>About Agromyss</h1>
        )}

        <div className="contenedor-imagen"></div>

        {idioma === "español" ? (
          <SobreAgromyssEspañol />
        ) : (
          <SobreAgromyssIngles />
        )}
      </div>
    </Contenedor>
  );
};

export default SobreAgromyss;
