import React, { useContext } from "react";

import Styled from "@emotion/styled";
import imagenPrincipal from "../../../imagenes/Productos.png";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useEnlacesContext } from "../../../context/enlaces/UseEnlaces";
import idiomaContext from "../../../context/idioma/idiomaContext";
import { Divider } from "@mui/material";

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

const Chocolates = () => {
  const { idioma } = useContext(idiomaContext);
  const { ocultarEnlaces } = useContext(useEnlacesContext);

  return (
    <Contenedor>
      <Header />

      <div onMouseOver={ocultarEnlaces}>
        {idioma === "español" ? <h1>Chocolates</h1> : <h1>Chocolate</h1>}

        <div className="contenedor-imagen"></div>

        <h3 className="text-center my-8">Chocolatinas</h3>

        <div className="flex lg:justify-center flex-nowrap overflow-x-scroll lg:overflow-x-hidden w-screen">
          <div className="w-[25rem] lg:m-[1rem]">
            <h4 className="text-center">
              {idioma === "español" ? "Chocolatias 1" : "Chocolatinas 1"}
            </h4>
            <div className="w-[25rem] h-[30rem]">
              <img
                className="w-full h-full object-contain"
                src="https://www.evok.com.co/wp-content/uploads/2019/10/BarrasAmargo4.png"
                alt=""
              />
            </div>
            <div className="flex justify-center">
              <p
                className=" p-3"
                style={{
                  border: "1px solid rgb(13, 130, 121)",
                  fontSize: "1.2rem",
                }}
              >
                $23.000
              </p>
              <p
                className=" p-3 hover:bg-red-800 hover:text-white "
                style={{
                  border: "1px solid rgb(13, 130, 121)",
                  fontSize: "1.2rem",
                }}
              >
                Añadir al carrito
              </p>
            </div>
          </div>

          <div className="w-[25rem] lg:m-[1rem]">
            <h4 className="text-center">
              {idioma === "español" ? "Chocolatinas 2" : "Chocolatinas 2"}
            </h4>
            <div className="w-[25rem] h-[30rem]">
              <img
                className="w-full h-full object-contain"
                src="https://www.evok.com.co/wp-content/uploads/2019/10/BarrasAmargo4.png"
                alt=""
              />
            </div>
            <div className="flex justify-center">
              <p
                className=" p-3"
                style={{
                  border: "1px solid rgb(13, 130, 121)",
                  fontSize: "1.2rem",
                }}
              >
                $23.000
              </p>
              <p
                className=" p-3 hover:bg-red-800 hover:text-white "
                style={{
                  border: "1px solid rgb(13, 130, 121)",
                  fontSize: "1.2rem",
                }}
              >
                Añadir al carrito
              </p>
            </div>
          </div>

          <div className="w-[25rem] lg:m-[1rem]">
            <h4 className="text-center">
              {idioma === "español" ? "Chocolatinas 3" : "Chocolatinas 3"}
            </h4>
            <div className="w-[25rem] h-[30rem]">
              <img
                className="w-full h-full object-contain"
                src="https://www.evok.com.co/wp-content/uploads/2019/10/BarrasAmargo4.png"
                alt=""
              />
            </div>
            <div className="flex justify-center">
              <p
                className=" p-3"
                style={{
                  border: "1px solid rgb(13, 130, 121)",
                  fontSize: "1.2rem",
                }}
              >
                $23.000
              </p>
              <p
                className=" p-3 hover:bg-red-800 hover:text-white "
                style={{
                  border: "1px solid rgb(13, 130, 121)",
                  fontSize: "1.2rem",
                }}
              >
                Añadir al carrito
              </p>
            </div>
          </div>
        </div>
        <Link to="/productos-servicios/productos/chocolates/chocolatinas">
          <p className="text-end mr-16">Ver mas...</p>
        </Link>
        <div className="mt-[4rem] mb-[3rem] ">
          <Divider>
            <h3 className="text-center">Bombones</h3>
          </Divider>
        </div>

        <div className="flex lg:justify-center flex-nowrap overflow-x-scroll lg:overflow-x-hidden w-screen">
          <div className="w-[25rem] lg:m-[1rem]">
            <h4 className="text-center">
              {idioma === "español" ? "Bombones 1" : "Bonbon 1"}
            </h4>
            <div className="w-[25rem] h-[30rem]">
              <img
                className="w-full h-full object-contain"
                src="https://www.evok.com.co/wp-content/uploads/2019/10/BarrasAmargo4.png"
                alt=""
              />
            </div>
            <div className="flex justify-center">
              <p
                className=" p-3"
                style={{
                  border: "1px solid rgb(13, 130, 121)",
                  fontSize: "1.2rem",
                }}
              >
                $23.000
              </p>
              <p
                className=" p-3 hover:bg-red-800 hover:text-white "
                style={{
                  border: "1px solid rgb(13, 130, 121)",
                  fontSize: "1.2rem",
                }}
              >
                Añadir al carrito
              </p>
            </div>
          </div>

          <div className="w-[25rem] lg:m-[1rem]">
            <h4 className="text-center">
              {idioma === "español" ? "Bombones 2" : "Bonbon 2"}
            </h4>
            <div className="w-[25rem] h-[30rem]">
              <img
                className="w-full h-full object-contain"
                src="https://www.evok.com.co/wp-content/uploads/2019/10/BarrasAmargo4.png"
                alt=""
              />
            </div>
            <div className="flex justify-center">
              <p
                className=" p-3"
                style={{
                  border: "1px solid rgb(13, 130, 121)",
                  fontSize: "1.2rem",
                }}
              >
                $23.000
              </p>
              <p
                className=" p-3 hover:bg-red-800 hover:text-white "
                style={{
                  border: "1px solid rgb(13, 130, 121)",
                  fontSize: "1.2rem",
                }}
              >
                Añadir al carrito
              </p>
            </div>
          </div>

          <div className="w-[25rem] lg:m-[1rem]">
            <h4 className="text-center">
              {idioma === "español" ? "Bombones 3" : "Bonbon 3"}
            </h4>
            <div className="w-[25rem] h-[30rem]">
              <img
                className="w-full h-full object-contain"
                src="https://www.evok.com.co/wp-content/uploads/2019/10/BarrasAmargo4.png"
                alt=""
              />
            </div>
            <div className="flex justify-center">
              <p
                className=" p-3"
                style={{
                  border: "1px solid rgb(13, 130, 121)",
                  fontSize: "1.2rem",
                }}
              >
                $23.000
              </p>
              <p
                className=" p-3 hover:bg-red-800 hover:text-white "
                style={{
                  border: "1px solid rgb(13, 130, 121)",
                  fontSize: "1.2rem",
                }}
              >
                Añadir al carrito
              </p>
            </div>
          </div>
        </div>
        <Link to="/productos-servicios/productos/chocolates/chocolatinas">
          <p className="text-end mr-16">Ver mas...</p>
        </Link>

        <div style={{ marginBottom: "10rem" }}></div>
      </div>

      <Footer />
    </Contenedor>
  );
};

export default Chocolates;
