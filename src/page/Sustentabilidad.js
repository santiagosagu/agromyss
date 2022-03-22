import React, { useContext, useEffect, useState } from "react";
import Styled from "@emotion/styled";
import idiomaContext from "../context/idioma/idiomaContext";
import imagenPrincipal from "../imagenes/imagen-principal-sustentabilidad.jpg";
import Header from "../components/Header";
import SustentabilidadEspañol from "../modules/sustentabilidad/español";
import SustentabilidadIngles from "../modules/sustentabilidad/ingles";
import { animateScroll as scroll, scroller } from "react-scroll";

import { useEnlacesContext } from "../context/enlaces/UseEnlaces";
import Footer from "../components/Footer";

const Contenedor = Styled.div`
    @media(min-width: 1200px){
        margin-top: 11%;

    }

    h1{
        text-align: center;
    }

    .contenido{

        margin: 4rem 1rem;

        @media(min-width: 1200px){
            width: 70%;
            margin: 4rem auto;
        }

        h4{
            font-weight: bold;
            font-size: 1.4rem;
        }
        

        p{  

            margin-top: 2rem;
            font-size: 1.2rem;

            span{
                font-weight: bold;
            }
        }

        img{
            width: 100%;
        }

        h4{
            margin-top: 2rem;
        }

        ul{
            margin: 1rem 0;

            li{
                margin: 1.5rem 0;
            }
        }
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

const Sustentabilidad = ({ match }) => {
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
      if (url === "trabajando-con-agricultores") {
        setSection("trabajando con agricultores");
      }
      if (url === "buscando-el-impacto-emprearial-con-produccion-sostenible") {
        setSection("buscando el impacto empresarial");
      }
      if (url === "impulsando-la-mejora-agricola") {
        setSection("impulsando la mejora agricola");
      }
      if (url === "modelo-empresarial-inclusivo") {
        setSection("modelo empresarial inclusivo");
      }
      if (url === "trazabilidad") {
        setSection("trazabilidad");
      }
      if (url === "cadena-de-suministro-del-cacao") {
        setSection("cadena de suministro del cacao");
      }
      if (url === "sostenibilidad-del-cacao") {
        setSection("sostenibilidad del cacao");
      }
    }

    if (idioma === "ingles") {
      if (url === "trabajando-con-agricultores") {
        setSection("working with farmers");
      }
      if (url === "buscando-el-impacto-emprearial-con-produccion-sostenible") {
        setSection("looking for the business");
      }
      if (url === "impulsando-la-mejora-agricola") {
        setSection("promoting agricultural improvement");
      }
      if (url === "modelo-empresarial-inclusivo") {
        setSection("inclusive business model");
      }
      if (url === "trazabilidad") {
        setSection("traceability");
      }
      if (url === "cadena-de-suministro-del-cacao") {
        setSection("cocoa supply chain");
      }
      if (url === "sostenibilidad-del-cacao") {
        setSection("cocoa sustainability");
      }
    }
  }, [url, width, idioma]);

  scroller.scrollTo(section, scrollType);

  return (
    <Contenedor>
      <Header />

      <div onMouseOver={ocultarEnlaces}>
        {idioma === "español" ? (
          <h1>Sustentabilidad</h1>
        ) : (
          <h1>Sustainability</h1>
        )}

        <div className="contenedor-imagen"></div>

        {idioma === "español" ? (
          <SustentabilidadEspañol />
        ) : (
          <SustentabilidadIngles />
        )}
      </div>

      <Footer />
    </Contenedor>
  );
};

export default Sustentabilidad;
