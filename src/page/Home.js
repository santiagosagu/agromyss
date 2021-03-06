import React, { useContext, useRef, useEffect } from "react";
import Styled from "@emotion/styled";
import Header from "../components/Header";
import idiomaContext from "../context/idioma/idiomaContext";
import VideoCorporativo from "../components/VideoCorporativo";
import iconoIndustria from "../imagenes/icono-industria.svg";
import iconoServicios from "../imagenes/icono-servicios.svg";
import { useEnlacesContext } from "../context/enlaces/UseEnlaces";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import Footer from "../components/Footer";

const Contenedor = Styled.div` 

    .banner{
        background-image: url('/images/contactenos.jpg');
        width: 100%;
        height: 500px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        color: #fff;

        @media(min-width: 1200px){
          margin-top: 4rem;
        }
        
        
        div{
          background-color: rgba(0, 0, 0, 0.5);
          width: 100%;
          height: 100%;
          padding: 1.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;

            @media(min-width: 768px){
              height: 500px;
                background-position: center center;
                background-repeat: no-repeat;
                background-size: cover;
                font-size: 2rem;
            }

            h4{
              font-size: 1.4rem;
              font-weight: bold;

              @media(min-width: 768px){
                  font-size: 2rem

                }
            }
        }   
    }

    .slogan{
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        
        
        margin: 0 1rem;

        @media(min-width: 768px){
            margin: 1rem 4.5rem;
            display: grid;
            grid-template-columns: 50% 55%;
            grid-gap: 1rem;
            padding: 0.5rem;
        }

        img{
            height: 250px;

            @media(min-width: 768px){
                width: 100%;
                height: 200px;
                
            }

            @media(min-width: 1200px){
                width: 100%;
                height: 300px;
                
            }
        }

        p{
            @media(min-width: 768px){
                font-size: 1.1rem;
            }

            span{
                font-size: 2rem;
                font-weight: bold;
                
            }

        }
    }

    .division{
        background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zmyS5IFVwpj4LKfuCRsnDdrVGQTUYo1ktw&usqp=CAU');
        width: 100%;
        height: 400px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-top: 2rem;
        color: #fff;
        
        font-size: 1.2rem;
        font-weight: bold;
        
        div{
            background-color: rgba(0, 0, 0, 0.5);
            width: 100%;
            height: 100%;
            padding: 1.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;

            @media(min-width: 768px){
                height: 400px;
                background-position: center center;
                background-repeat: no-repeat;
                background-size: cover;
                font-size: 1.8rem;
            }
        }   
    }

    .sesion-productos-servicios{
        align-items: center;
        margin: 1rem auto;
        width: 80%;
        

        @media(min-width: 768px){
            display: grid;
            grid-template-columns: 50% 50%;
            grid-gap: 1rem;
        }

        .cards{
            align-items: center;
            text-align: center;
            padding: 0.5rem;
            height: 400px;
            margin-bottom: 1rem;
            z-index: 0;

            img{  
                max-width: 10rem;
            }

            .card-contenido{
                margin-top: 1rem;
                padding: 0 2rem;
            }

        } 
    }

    .titulo-galeria{
        h2{
            text-align: center;
            cursor: pointer;
        }

        a{
          text-decoration: none;
          color: #000;
        }

        hr{
            margin: 0 auto 3rem;
            max-width: 200px;

            @media(min-width: 1200px){
                margin: 0 auto 6rem;
                max-width: 400px;
            }
        }
    }

    .galeria{
        width: 100%;
        padding: 1rem;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 200px 200px 200px 200px 160px;
        grid-gap: 0.5rem;

        @media(min-width: 1024px){
            max-width: 1024px;
            display: grid;
            grid-gap: 1rem;
            grid-template-columns: 256px 256px 256px 256px;
            grid-template-rows: 200px 200px 200px 200px;
        }

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }
            
        .item-a {
            grid-row: 1 / 2;

            @media(min-width: 1024px){
                grid-row: 1 / 3;
            }
        }
            
        .item-b {
            grid-column: 2 / 3;

            @media(min-width: 1024px){
                grid-column: 3 / 5;
            }
        }
            
        .item-c {
            grid-row: 2 / 4;

            @media(min-width: 1024px){
                grid-row: 2 / 4;
            }
        }
            
        .item-d {
            grid-column: 1 / 3;

            @media(min-width: 1024px){
                grid-column: 3 / 5;
            }
        }

    }
`;

// const wompiGlobal = $wompi;
const Home = () => {
  /* context para el idioma */
  const { idioma } = useContext(idiomaContext);

  const { ocultarEnlaces } = useContext(useEnlacesContext);

  // const widget = useRef(null);

  scroll.scrollTo();

  const prueba = () => {
    // var widget = new WidgetCheckout({
    //   currency: "COP",
    //   amountInCents: 2490000,
    //   reference: "AD002901221",
    //   publicKey: "pub_fENJ3hdTJxdzs3hd35PxDBSMB4f85VrgiY3b6s1",
    //   redirectUrl: "https://transaction-redirect.wompi.co/check", // Opcional
    //   taxInCents: {
    //     // Opcional
    //     vat: 1900,
    //     consumption: 800,
    //   },
    //   customerData: {
    //     // Opcional
    //     email: "lola@gmail.com",
    //     fullName: "Lola Flores",
    //     phoneNumber: "3040777777",
    //     phoneNumberPrefix: "+57",
    //     legalId: "123456789",
    //     legalIdType: "CC",
    //   },
    //   shippingAddress: {
    //     // Opcional
    //     addressLine1: "Calle 123 # 4-5",
    //     city: "Bogota",
    //     phoneNumber: "3019444444",
    //     region: "Cundinamarca",
    //     country: "CO",
    //   },
    // });
    // widget.open(function (result) {
    //   var transaction = result.transaction;
    //   console.log("Transaction ID: ", transaction.id);
    //   console.log("Transaction object: ", transaction);
    // });
  };

  return (
    <Contenedor>
      {idioma === "espa??ol" && (
        <>
          <Header />
          <div onMouseOver={ocultarEnlaces}>
            <div className="banner">
              <div>
                <h4>
                  <span>Reconocemos</span> en la tierra lo m??s valioso que
                  tenemos, estamos convencidos que de la armon??a del hombre con
                  el medio florece el bienestar. Sabemos que en lo natural est??
                  la respuesta a muchas cosas, valoramos el pasado y creemos en
                  el futuro
                </h4>
              </div>
            </div>
            <VideoCorporativo />

            {/*  <div className='slogan'>

                        <img src="https://www.vtv.gob.ve/wp-content/uploads/2020/10/Cacao-en-Miranda.jpg" alt="imagen-cultivos" />
                        <p><span> Reconocemos </span>en la tierra lo m??s valioso que tenemos, estamos convencidos que de la armon??a del hombre con el medio florece el bienestar. Sabemos que en lo natural est?? la respuesta a muchas cosas, valoramos el pasado y creemos en el futuro</p>
                    </div> */}

            <div className="division">
              <div>
                <p>
                  Buscamos resaltar los sabores naturales del cacao, brindando
                  una experiencia inolvidable al consumidor a traves del
                  mejoramiento continuo enfocado a un desarrollo sostenible y
                  sustentable.
                </p>
              </div>
            </div>

            <div className="sesion-productos-servicios">
              <div className="cards">
                <div className="card-icono flex justify-center">
                  <img src={iconoIndustria} alt="" />
                </div>
                <div className="card-contenido">
                  <h2>Industria</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ipsum quam corporis error eligendi{" "}
                  </p>
                </div>
              </div>
              <div className="cards">
                <div className="card-icono flex justify-center">
                  <img src={iconoServicios} alt="" />
                </div>
                <div className="card-contenido">
                  <h2>Servicios</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ipsum quam corporis error eligendi{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="titulo-galeria">
              <Link to="/galeria">
                <h2>Galeria</h2>
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

          <Footer />
        </>
      )}
      {idioma === "ingles" && (
        <>
          <Header />

          <div onMouseOver={ocultarEnlaces}>
            <div className="banner">
              <div>
                <h4>
                  <span>We Recognize</span> the ground as the most value thing
                  we have; we are convinced that the armony of men with the
                  environment brings the welfare. We know the answer of many
                  things come from the natural, we value the past and believe on
                  the future.
                </h4>
              </div>
            </div>
            <VideoCorporativo />

            {/*  <div className='slogan'>

                    <img src="https://www.vtv.gob.ve/wp-content/uploads/2020/10/Cacao-en-Miranda.jpg" alt="imagen-cultivos" />
                    <p><span> Reconocemos </span>en la tierra lo m??s valioso que tenemos, estamos convencidos que de la armon??a del hombre con el medio florece el bienestar. Sabemos que en lo natural est?? la respuesta a muchas cosas, valoramos el pasado y creemos en el futuro</p>
                </div> */}

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
                <div className="card-icono">
                  <img src={iconoIndustria} alt="" />
                </div>
                <div className="card-contenido">
                  <h2>Industry</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ipsum quam corporis error eligendi{" "}
                  </p>
                </div>
              </div>
              <div className="cards">
                <div className="card-icono">
                  <img src={iconoServicios} alt="" />
                </div>
                <div className="card-contenido">
                  <h2>Services</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ipsum quam corporis error eligendi{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="titulo-galeria">
              <Link to="/galeria">
                <h2>Gallery</h2>
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

          <Footer />
        </>
      )}
    </Contenedor>
  );
};

export default Home;
