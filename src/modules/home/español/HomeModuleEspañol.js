import React from "react";
import { Link } from "react-router-dom";
// import * as Styles from "../style";

const HomeModuleEspañol = ({
  ocultarEnlaces,
  videoCorporativo,
  iconoIndustria,
  iconoServicios,
}) => {
  return (
    <>
      <div onMouseOver={ocultarEnlaces}>
        <div className="banner">
          <div>
            <h4>
              <span>Reconocemos</span> en la tierra lo más valioso que tenemos,
              estamos convencidos que de la armonía del hombre con el medio
              florece el bienestar. Sabemos que en lo natural está la respuesta
              a muchas cosas, valoramos el pasado y creemos en el futuro
            </h4>
          </div>
        </div>
        {videoCorporativo}

        <div className="division">
          <div>
            <p>
              Buscamos resaltar los sabores naturales del cacao, brindando una
              experiencia inolvidable al consumidor a traves del mejoramiento
              continuo enfocado a un desarrollo sostenible y sustentable.
            </p>
          </div>
        </div>

        <div className="sesion-productos-servicios">
          <div className="cards">
            <div className="card-icono flex justify-center">
              <img src={iconoIndustria} alt="icono-industria" />
            </div>
            <div className="card-contenido">
              <h2 className="text-[2.5rem]">Industria</h2>
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
              <h2 className="text-[2.5rem]">Servicios</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
                quam corporis error eligendi{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="titulo-galeria">
          <Link to="/galeria">
            <h2 className="text-[2.5rem]">Galeria</h2>
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

      {/* <form action="https://checkout.wompi.co/p/" method="GET">
            <input
              type="hidden"
              name="public-key"
              value="pub_test_sU0PuSKagjNH0o30MBmDlpVeDsU8yOsw"
            />

            <input type="hidden" name="currency" value="COP" />

            <input type="hidden" name="amount-in-cents" value="5000000" />
            <input type="hidden" name="reference" value="id2" />
            <input
              type="hidden"
              name="redirect-url"
              value="http://localhost:3000"
            />

            <button>holis</button>
          </form>

          <button onClick={prueba}>prueba</button> */}
    </>
  );
};

export default HomeModuleEspañol;
