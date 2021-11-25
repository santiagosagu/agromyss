import React, { useState, useContext } from "react";
import idiomaContext from "../context/idioma/idiomaContext";
import Styled from "@emotion/styled";
import Header from "../components/Header";
import FormContacto from "../components/formularios/FormContacto";
import banner from "../imagenes/imagen-galeria-principal.jpg";

const Contenedor = Styled.div`
    text-align: center;
    height: 100%;

    h1{
        font-weight: bold;
        margin-top: 4rem;

        @media(min-width: 768px){
            margin-top: 2rem;
        }

        @media(min-width: 1200px){
            margin-top: 5rem;
        }
    }

    

    @media(min-width: 1200px){
        margin-top: 4.5%;
    }

    .banner{
        background-image: url(${banner});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        padding: 0;




        .contenedor{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.6);
            color: #fff;

            .titulo{

                cursor: pointer;

                hr{

                    width: 100%;
                    text-align: center;
                    align-items: center;

                    @media(min-width: 1200px){
                        width: 60rem;
                    }
                }
            }
            
        }

        .botones{
            margin-top: 3rem;
            height: 100vh;
            h3{
                border: 2px solid #fff;
                padding: 1rem;
                cursor: pointer;
            }
            
        }
    }
`;

const Contacto = () => {
  const [formulario, setFormulario] = useState("");

  /* context para el idioma */
  const { idioma } = useContext(idiomaContext);

  const FnFormularios = () => {
    if (formulario.length === 0) {
      if (idioma === "español") {
        return (
          <div className="botones">
            <h3 onClick={() => setFormulario("quiero-comprar")}>
              Quiero Comprar
            </h3>
            <h3 onClick={() => setFormulario("quiero-vender")}>
              Quiero Vender
            </h3>
            <h3 onClick={() => setFormulario("pqrs")}>PQRS</h3>
            <h3 onClick={() => setFormulario("otro")}>Otro</h3>
          </div>
        );
        //ingles
      } else {
        return (
          <div className="botones">
            <h3 onClick={() => setFormulario("quiero-comprar")}>Purchase</h3>
            <h3 onClick={() => setFormulario("quiero-vender")}>Sell</h3>
            <h3 onClick={() => setFormulario("pqrs")}>PQRS</h3>
            <h3 onClick={() => setFormulario("otro")}>Others</h3>
          </div>
        );
      }
    } else if (formulario === "quiero-comprar") {
      return (
        <FormContacto
          tipoForm={idioma === "español" ? "comprar" : "Purchase"}
        />
      );
    } else if (formulario === "quiero-vender") {
      return (
        <FormContacto tipoForm={idioma === "español" ? "vender" : "Sell"} />
      );
    } else if (formulario === "pqrs") {
      return <FormContacto tipoForm={"pqrs"} />;
    } else if (formulario === "otro") {
      return (
        <FormContacto tipoForm={idioma === "español" ? "otro" : "Others"} />
      );
    }
  };

  return (
    <>
      <Header />
      <Contenedor>
        {idioma === "español" && (
          <>
            <div className="banner">
              <div className="contenedor">
                <div className="titulo">
                  <h1 onClick={() => setFormulario("")}>Contactenos</h1>
                  <hr />
                </div>

                <FnFormularios />
              </div>
            </div>
          </>
        )}
        {idioma === "ingles" && (
          <>
            <div className="banner">
              <div className="contenedor">
                <div className="titulo">
                  <h1 onClick={() => setFormulario("")}>Contact</h1>
                  <hr />
                </div>

                <FnFormularios />
              </div>
            </div>
          </>
        )}
      </Contenedor>
    </>
  );
};

export default Contacto;
