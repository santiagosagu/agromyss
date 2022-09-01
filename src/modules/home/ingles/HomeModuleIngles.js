import React from "react";
import { Link } from "react-router-dom";

const HomeModuleIngles = ({
  ocultarEnlaces,
  videoCorporativo,
  iconoIndustria,
  iconoServicios,
}) => {
  return (
    <div onMouseOver={ocultarEnlaces}>
      <div className="banner">
        <div>
          <h4>
            <span>We Recognize</span> the ground as the most value thing we
            have; we are convinced that the armony of men with the environment
            brings the welfare. We know the answer of many things come from the
            natural, we value the past and believe on the future.
          </h4>
        </div>
      </div>
      {videoCorporativo}

      <div className="division">
        <div>
          <p>
            We want to highlight the narutal flavor of cocoa, providing an
            unforgettable experience to the costumer trough the constant
            improvement focused on a sustainable development.
          </p>
        </div>
      </div>

      <div className="sesion-productos-servicios">
        <div className="cards">
          <div className="card-icono flex justify-center">
            <img src={iconoIndustria} alt="icono-industria" />
          </div>
          <div className="card-contenido">
            <h2 className="text-[2.5rem]">Industry</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              quam corporis error eligendi{" "}
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="card-icono flex justify-center">
            <img src={iconoServicios} alt="" />
          </div>
          <div className="card-contenido">
            <h2 className="text-[2.5rem]">Services</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              quam corporis error eligendi{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="titulo-galeria">
        <Link to="/galeria">
          <h2 className="text-[2.5rem]">Gallery</h2>
        </Link>
        <hr />
      </div>

      <div className="galeria">
        <div className="item-a">
          <img
            src="/images/Elegidas santamarta/DSC_8026.JPG"
            alt="imagen-galeria-agromyss"
          />
        </div>
        <div>
          <img
            src="/images/Elegidas santamarta/DSC_5540.JPG"
            alt="imagen-galeria-agromyss"
          />
        </div>
        <div className="item-b">
          <img
            src="/images/Elegidas santamarta/DSC_8038.JPG"
            alt="imagen-galeria-agromyss"
          />
        </div>
        <div>
          <img
            src="/images/Elegidas maceo/IMG-20190328-WA0077.jpg"
            alt="imagen-galeria-agromyss"
          />
        </div>
        <div className="item-c">
          <img
            src="/images/Elegidas santamarta/DSC_5560.JPG"
            alt="imagen-galeria-agromyss"
          />
        </div>
        <div>
          <img
            src="/images/Elegidas maceo/IMG-20190328-WA0044.jpg"
            alt="imagen-galeria-agromyss"
          />
        </div>
        <div>
          <img
            src="/images/Elegidas maceo/IMG-20190328-WA0078.jpg"
            alt="imagen-galeria-agromyss"
          />
        </div>
        <div className="item-d">
          <img
            src="/images/Elegidas santamarta/DSC_5526.JPG"
            alt="imagen-galeria-agromyss"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeModuleIngles;
