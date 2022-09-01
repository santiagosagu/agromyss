import React, { useContext } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Styled from "@emotion/styled";
import imagenPrincipal from "../../imagenes/Productos.png";
import { useEnlacesContext } from "../../context/enlaces/UseEnlaces";
import idiomaContext from "../../context/idioma/idiomaContext";
import { Link } from "react-router-dom";

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
            // background-attachment: fixed;
        }

    }
`;

const Productos = () => {
  const { idioma } = useContext(idiomaContext);
  const { ocultarEnlaces } = useContext(useEnlacesContext);

  return (
    <Contenedor>
      <Header />

      <div onMouseOver={ocultarEnlaces}>
        {idioma === "español" ? (
          <h1 className="text-[2.5rem]">Productos</h1>
        ) : (
          <h1 className="text-[2.5rem]">Product</h1>
        )}

        <div className="contenedor-imagen"></div>

        <div className="flex justify-center">
          <Link
            to="/productos-servicios/productos/chocolates"
            className="no-underline text-black"
          >
            <div className="w-[30rem] m-[2rem]">
              <h4 className="text-center text-[1.6rem]">
                {idioma === "español" ? "Chocolates" : "Chocolate"}
              </h4>
              <div className="w-[30rem] h-[30rem]">
                <img
                  className="w-full h-full object-contain"
                  src="https://www.evok.com.co/wp-content/uploads/2019/10/BarrasAmargo4.png"
                  alt=""
                />
              </div>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur incidunt dolor aliquid a dolorum quasi similique
                animi necessitatibus minus, nam voluptas recusandae sapiente
                ducimus cum, quae reprehenderit, saepe perspiciatis esse.
              </div>
            </div>
          </Link>

          <Link
            to="/productos-servicios/productos/cacao"
            className="no-underline text-black"
          >
            <div className="w-[30rem] m-[2rem]">
              <h4 className="text-center text-[1.6rem]">
                {idioma === "español" ? "Cacao" : "Cocoa"}
              </h4>
              <div className="w-[30rem] h-[30rem]">
                <img
                  className="w-full h-full object-contain"
                  src="https://www.evok.com.co/wp-content/uploads/2019/10/BarrasAmargo4.png"
                  alt=""
                />
              </div>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur incidunt dolor aliquid a dolorum quasi similique
                animi necessitatibus minus, nam voluptas recusandae sapiente
                ducimus cum, quae reprehenderit, saepe perspiciatis esse.
              </div>
            </div>
          </Link>

          <Link
            to="/productos-servicios/productos/mangos"
            className="no-underline text-black"
          >
            <div className="w-[30rem] m-[2rem]">
              <h4 className="text-center text-[1.6rem]">Mangos</h4>
              <div className="w-[30rem] h-[30rem]">
                <img
                  className="w-full h-full object-contain"
                  src="https://www.evok.com.co/wp-content/uploads/2019/10/BarrasAmargo4.png"
                  alt=""
                />
              </div>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur incidunt dolor aliquid a dolorum quasi similique
                animi necessitatibus minus, nam voluptas recusandae sapiente
                ducimus cum, quae reprehenderit, saepe perspiciatis esse.
              </div>
            </div>
          </Link>
        </div>

        <div style={{ marginBottom: "10rem" }}></div>
      </div>

      <Footer />
    </Contenedor>
  );
};

export default Productos;
