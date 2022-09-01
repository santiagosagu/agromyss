import React, { useContext } from "react";
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
      <div onMouseOver={ocultarEnlaces}>
        {idioma === "español" ? (
          <h1 className="text-[2.5rem]">Productos y Servicios</h1>
        ) : (
          <h1 className="text-[2.5rem]">Product and Service</h1>
        )}

        <div className="contenedor-imagen"></div>

        <div style={{ marginBottom: "10rem" }}></div>
      </div>
    </Contenedor>
  );
};

export default ProductosServicios;
