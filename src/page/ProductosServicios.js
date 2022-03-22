import React, { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Styled from "@emotion/styled";
import { useEnlacesContext } from "../context/enlaces/UseEnlaces";
import imagenPrincipal from "../imagenes/imagen-principal-sobre-agromyss.jpg";
import idiomaContext from "../context/idioma/idiomaContext";

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

const ProductosServicios = () => {
  const { idioma } = useContext(idiomaContext);
  const { ocultarEnlaces } = useContext(useEnlacesContext);

  return (
    <Contenedor>
      <Header />

      <div onMouseOver={ocultarEnlaces}>
        {idioma === "español" ? (
          <h1>Productos y Servicios</h1>
        ) : (
          <h1>Product and Service</h1>
        )}

        <div className="contenedor-imagen"></div>

        <div style={{ marginBottom: "10rem" }}></div>
      </div>

      <Footer />
    </Contenedor>
  );
};

export default ProductosServicios;
