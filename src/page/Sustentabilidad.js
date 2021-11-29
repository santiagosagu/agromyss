import React, { useContext, useEffect, useState } from "react";
import Styled from "@emotion/styled";
import idiomaContext from "../context/idioma/idiomaContext";
import imagenPrincipal from "../imagenes/imagen-principal-sustentabilidad.jpg";
import Header from "../components/Header";
import SustentabilidadEspañol from "../modules/sustentabilidad/español";
import SustentabilidadIngles from "../modules/sustentabilidad/ingles";
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

  const [userScroll, setUserScroll] = useState(0);

  const url = match.params.item;
  const width = window.innerWidth;

  useEffect(() => {
    if (idioma === "español") {
      if (!url) {
        setUserScroll(0);
      }
      if (url === "trabajando-con-agricultores") {
        setUserScroll(width > 1000 ? 600 : 1200);
      }
      if (url === "buscando-el-impacto-emprearial-con-produccion-sostenible") {
        setUserScroll(width > 1000 ? 1850 : 4500);
      }
      if (url === "impulsando-la-mejora-agricola") {
        setUserScroll(width > 1000 ? 2250 : 5480);
      }
      if (url === "modelo-empresarial-inclusivo") {
        setUserScroll(width > 1000 ? 3000 : 7500);
      }
      if (url === "trazabilidad") {
        setUserScroll(width > 1000 ? 3540 : 8830);
      }
      if (url === "cadena-de-suministro-del-cacao") {
        setUserScroll(width > 1000 ? 3800 : 9350);
      }
      if (url === "sostenibilidad-del-cacao") {
        setUserScroll(width > 1000 ? 4170 : 10000);
      }
    }

    if (idioma === "ingles") {
      if (!url) {
        setUserScroll(0);
      }
      if (url === "trabajando-con-agricultores") {
        setUserScroll(width > 1000 ? 600 : 1200);
      }
      if (url === "buscando-el-impacto-emprearial-con-produccion-sostenible") {
        setUserScroll(width > 1000 ? 1700 : 4100);
      }
      if (url === "impulsando-la-mejora-agricola") {
        setUserScroll(width > 1000 ? 2100 : 4950);
      }
      if (url === "modelo-empresarial-inclusivo") {
        setUserScroll(width > 1000 ? 2800 : 6800);
      }
      if (url === "trazabilidad") {
        setUserScroll(width > 1000 ? 3300 : 8000);
      }
      if (url === "cadena-de-suministro-del-cacao") {
        setUserScroll(width > 1000 ? 3500 : 8500);
      }
      if (url === "sostenibilidad-del-cacao") {
        setUserScroll(width > 1000 ? 3800 : 9000);
      }
    }
  }, [url, width, idioma]);

  scroll.scrollTo(userScroll);

  return (
    <Contenedor>
      <Header />

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
    </Contenedor>
  );
};

export default Sustentabilidad;
