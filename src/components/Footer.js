import React, { useContext } from "react";
import Styled from "@emotion/styled";
import { Link } from "react-router-dom";
import idiomaContext from "../context/idioma/idiomaContext";

const Contenedor = Styled.div`
 width: 100%;
 background-color: #8b9022;
 display: flex;
 flex-direction: column;
 justify-content: flex-end;

 @media(min-width: 1200px){
   height: 19rem;
   justify-content: flex-start;
   margin-top: 2rem;
 }

 a {
   text-decoration: none;
   color: #fff;
 }


 .content-grid {
    padding-top: 1rem;
    color: #fff;
    margin-bottom: 0;
    font-size: 1.1rem;    
    
    @media(min-width: 1200px){
      width: 100%;
      display: grid;
      font-size: 1.3rem;
      grid-template-columns: repeat(3, 1fr);
    }

    .section {
      margin-bottom: 3rem;

      @media(min-width: 1200px){
        margin-bottom: 0;
      }
      
      li{
        list-style: none;
        margin: 1.3rem 0;

        @media(min-width: 1200px){
          margin: 2rem 0;
        }

        
      }
      
    }

    
 }



`;

const Footer = () => {
  const { idioma } = useContext(idiomaContext);

  return (
    <Contenedor>
      <div className="content-grid">
        <div className="section">
          <ul>
            <Link to="/corporativo">
              {idioma === "español" ? (
                <li>Filosofia Principios y Valores</li>
              ) : (
                <li>Philosophy, Principles and Values</li>
              )}
            </Link>
            <Link to="/sustentabiidad">
              {idioma === "español" ? (
                <li>Sustentabilidad</li>
              ) : (
                <li>Sustainability</li>
              )}
            </Link>
            <Link to="/sobre-agromyss">
              {idioma === "español" ? (
                <li>Sobre Agromyss</li>
              ) : (
                <li>About Agromyss</li>
              )}
            </Link>
          </ul>
        </div>

        <div className="section">
          <ul>
            <Link to="/galeria">
              {idioma === "español" ? <li>Galeria</li> : <li>Galery</li>}
            </Link>
            <Link to="/corporativo/video-corporativo">
              {idioma === "español" ? (
                <li>Video Corporativo</li>
              ) : (
                <li>corporate video</li>
              )}
            </Link>
          </ul>
        </div>
        <div className="section">
          <ul>
            <li style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/images/redes/facebook-3.svg"
                alt="imagen facebook"
                style={{ width: "2rem", margin: 0 }}
              />
              <p style={{ margin: "0 1rem" }}> @AGROMYSS </p>
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/images/redes/instagram-2-1.svg"
                alt="imagen facebook"
                style={{ width: "2rem", margin: 0 }}
              />
              <p style={{ margin: "0 1rem" }}> @AGROMYSS </p>
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/images/redes/twitter-4.svg"
                alt="imagen facebook"
                style={{ width: "2rem", margin: 0 }}
              />
              <p style={{ margin: "0 1rem" }}> @AGROMYSS </p>
            </li>
          </ul>
        </div>
      </div>
    </Contenedor>
  );
};

export default Footer;
