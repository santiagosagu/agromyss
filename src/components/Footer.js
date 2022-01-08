import React from "react";
import Styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Contenedor = Styled.div`
 width: 100%;
 background-color: #8b9022;
 display: flex;
 flex-direction: column;
 justify-content: flex-end;

 @media(min-width: 1200px){
   height: 19rem;
   justify-content: flex-start;

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
  return (
    <Contenedor>
      <div className="content-grid">
        <div className="section">
          <ul>
            <Link to="/corporativo">
              <li>Filosofia Principios y Valores</li>
            </Link>
            <Link to="/sustentabiidad">
              <li>Sustentabilidad</li>
            </Link>
            <Link to="/sobre-agromyss">
              <li>Sobre Agromyss</li>
            </Link>
          </ul>
        </div>

        <div className="section">
          <ul>
            <Link to="/galeria">
              <li>Galeria</li>
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
