import React, { useContext } from "react";
import Styled from "@emotion/styled";
import Header from "../components/Header";
import idiomaContext from "../context/idioma/idiomaContext";
import imagenMision from "../imagenes/imagen-mision.png";
import imagenVision from "../imagenes/imagen-vision.png";
import imagenPrincipios from "../imagenes/imagen-principios.png";
import imagenValores from "../imagenes/imagen-valores.png";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import { Link } from "react-router-dom";
import { useEnlacesContext } from "../context/enlaces/UseEnlaces";
import { animateScroll as scroll } from "react-scroll";
import Footer from "../components/Footer";

const Contenido = Styled.div`
    @media(min-width: 1200px){
        margin-top: 12%;

    }

    h1{
        text-align: center;
        margin: 1rem;
        margin-top: 2rem;
    }

    a{
      text-decoration: none;
      color: #fff;

    }

    .contenido{

        margin: 4rem 1rem;

        @media(min-width: 1200px){
            width: 80%;
            margin: 4rem auto;
        }

        .card{

          margin-bottom: 2rem;
          border: none;
          
          @media(min-width: 1200px){
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            padding: 4rem 0;
          }

          

          .contenido-imagen{
            width: 100%;

            @media(min-width: 1200px){
              width: 50%;
            }

            img{
            width:4rem;
            margin-bottom: 2rem;
            width: 100%;
            
              @media(min-width: 1200px){
                height: 25rem;
              }
            }
          }

          p{
            font-size: 1.3rem;
          }

          li{
            font-size: 1.3rem;
          }
        }

        .card-reverse{
            @media(min-width: 1200px){
              flex-direction: row-reverse;
            }

            .contenido-texto{
            @media(min-width: 1200px){
              width: 50%;
              margin-right: 2rem;
            }
          }
          }

          .card-no-reverse{
            @media(min-width: 1200px){
              flex-direction: row;
            }

            .contenido-texto{
            @media(min-width: 1200px){
              width: 50%;

              margin-left: 2rem;
            }
          }
          }
    }

`;

const Corporativo = () => {
  /* context para el idioma */
  const { idioma } = useContext(idiomaContext);

  const { ocultarEnlaces } = useContext(useEnlacesContext);

  scroll.scrollTo();

  return (
    <Contenido>
      <Header />
      {idioma === "español" && (
        <div onMouseOver={ocultarEnlaces}>
          <h1>Filosofia, Principios y Valores</h1>
          <h5>
            <Link
              to="/corporativo/video-corporativo"
              style={{ display: "flex", alignItems: "center" }}
            >
              <SlowMotionVideoIcon /> Ver Nuestro video
            </Link>
          </h5>
          <div className="contenido">
            <div className="card card-reverse">
              <div className="contenido-imagen">
                <img
                  src="/images/filosofia/filosofia nuestra mision.jpg"
                  alt="escala-de-mejora"
                />
              </div>
              <div className="contenido-texto">
                <h2>Nuestra Misión</h2>
                <p>
                  Cultivar, transformar y comercializar productos sustentables y
                  sostenibles de óptima calidad, fundamentados en el
                  mejoramiento continuo, enmarcado en políticas corporativas que
                  garantizan el bienestar de nuestros colaboradores, la
                  protección al medio ambiente y la rentabilidad económica y
                  social.
                </p>
              </div>
            </div>
            <div className="card card-no-reverse">
              <div className="contenido-imagen">
                <img
                  src="/images/filosofia/filosofia nuestra vision.JPG"
                  alt="escala-de-mejora"
                />
              </div>
              <div className="contenido-texto">
                <h2>Nuestra Visión</h2>
                <p>
                  Ser reconocidos a nivel nacional como una empresa líder en la
                  producción, transformación y exportación de productos y sub
                  productos agrícolas y agroindustriales sostenibles y
                  sustentables, con los más altos estándares de calidad e
                  innovación, para la satisfacción de nuestros clientes y el
                  desarrollo humano integral de colaboradores y comunidades.
                </p>
              </div>
            </div>
            <div className="card card-reverse">
              <div className="contenido-imagen">
                <img
                  src="/images/filosofia/filosofia principios.JPG"
                  alt="escala-de-mejora"
                />
              </div>
              <div className="contenido-texto">
                <h2>Principios</h2>
                <li>Amar a Dios sobre todas las cosas</li>
                <li>Lealtad</li>
                <li>Honestidad</li>
                <li>Respeto</li>
                <li>Amabilidad</li>
              </div>
            </div>
            <div className="card card-no-reverse">
              <div className="contenido-imagen">
                <img
                  src="/images/filosofia/filosofia valores.jpg"
                  alt="escala-de-mejora"
                />
              </div>
              <div className="contenido-texto">
                <h2>Valores</h2>
                <li>Pasión por el servicio</li>
                <li>Trabajo en equipo</li>
                <li>Enfoque al resultado</li>
                <li>Resiliencia</li>
                <li>Liderazgo</li>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      )}

      {idioma === "ingles" && (
        <>
          <Header />
          <h1>Philosophy, Principles and Values</h1>
          <h5>
            <Link to="/corporativo/video-corporativo">See our video</Link>
          </h5>
          <div className="contenido">
            <div className="card">
              <h2>Our Mission</h2>
              <div>
                <img src={imagenMision} alt="" />
              </div>

              <p>
                Cultivate, transform and trade sustainable products with high
                quality, based on the constant improvement, framed on corporate
                policies to ensure the welfare of our partners, the protection
                of the environment and the economic and social profitability.
              </p>
            </div>
            <div className="card">
              <h2>Our Vision</h2>
              <div>
                <img src={imagenVision} alt="" />
              </div>
              <p>
                To be recognize at national level as a leading Company on the
                production, transformation and exportation of products,
                sustainable farming and agro-industry sector by-products with
                the highest standars of quality and innovation for costumer
                satisfaction and the comprehensive human development of partners
                and communities.
              </p>
            </div>
            <div className="card">
              <h2>Principles</h2>
              <div>
                <img src={imagenPrincipios} alt="" />
              </div>
              <li>To love God above all things</li>
              <li>Loyalty</li>
              <li>Honesty</li>
              <li>Respect</li>
              <li>Kindness</li>
            </div>
            <div className="card">
              <h2>Values</h2>
              <div>
                <img src={imagenValores} alt="" />
              </div>
              <li>Passion for service</li>
              <li>Team work</li>
              <li>Focus on results</li>
              <li>Resilience</li>
              <li>Lidership</li>
            </div>
          </div>
        </>
      )}
    </Contenido>
  );
};

export default Corporativo;
