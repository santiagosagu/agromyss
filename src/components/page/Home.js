import React, { useContext } from 'react'
import Styled from '@emotion/styled'
import Header from '../Header'
import idiomaContext from '../../context/idioma/idiomaContext'
import imagen from '../../imagenes/campo-banner.jpg'
import galeria1 from '../../imagenes/imagen-galeria-principal.jpg'
import galeria2 from '../../imagenes/imagen-galeria-2.jpg'
import galeria3 from '../../imagenes/imagen-galeria-3.jpg'
import galeria4 from '../../imagenes/imagen-galeria-4.jpg'
import galeria5 from '../../imagenes/imagen-galeria-5.jpg'
import galeria6 from '../../imagenes/imagen-galeria-6.jpg'
import galeria7 from '../../imagenes/imagen-galeria-7.jpg'
import galeria8 from '../../imagenes/imagen-galeria-8.jpg'
import VideoCorporativo from '../VideoCorporativo'
import iconoIndustria from '../../imagenes/icono-industria.svg'
import iconoServicios from '../../imagenes/icono-servicios.svg'


const Contenedor = Styled.div`
    .banner{
        background-image: url(${imagen});
        width: 100%;
        height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color:  #fff;
        background-repeat: no-repeat;
        background-size: cover;

        div{
            background-color: rgba(0, 0, 0, 0.1);
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            h4{
                font-size: 1.3rem;

                span{
                    font-size: 2.7rem;
                }
            }
        }

        @media(min-width: 1200px){
            height: 500px;
            color: #fff;
            background-image: url(${imagen});
            background-position: center center;
            background-attachment: fixed;
            div{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                
                h4{
                    font-size: 1.7rem;

                    span{
                        font-size: 3.1rem;
                    }
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
`

const Home = () => {

    /* context para el idioma */
    const { idioma } = useContext(idiomaContext)

    return (
        <Contenedor>

            {idioma === 'español' &&
                <>
                    <Header />
                    <div className='banner'>
                        <div>
                            <h4><span>Reconocemos</span> en la tierra lo más valioso que tenemos, estamos convencidos que de la armonía del hombre con el medio florece el bienestar. Sabemos que en lo natural está la respuesta a muchas cosas, valoramos el pasado y creemos en el futuro
                            </h4>
                        </div>
                    </div>
                    <VideoCorporativo />

                    {/*  <div className='slogan'>

                        <img src="https://www.vtv.gob.ve/wp-content/uploads/2020/10/Cacao-en-Miranda.jpg" alt="imagen-cultivos" />
                        <p><span> Reconocemos </span>en la tierra lo más valioso que tenemos, estamos convencidos que de la armonía del hombre con el medio florece el bienestar. Sabemos que en lo natural está la respuesta a muchas cosas, valoramos el pasado y creemos en el futuro</p>
                    </div> */}

                    <div className='division'>
                        <div>
                            <p>Buscamos resaltar los sabores naturales del cacao, brindando una experiencia inolvidable al consumidor a traves del mejoramiento continuo enfocado a un desarrollo sostenible y sustentable.</p>
                        </div>

                    </div>

                    <div className='sesion-productos-servicios'>
                        <div className="cards">
                            <div className="card-icono">
                                <img src={iconoIndustria} alt="" />
                            </div>
                            <div className="card-contenido">
                                <h2>Industria</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quam corporis error eligendi </p>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="card-icono">
                                <img src={iconoServicios} alt="" />
                            </div>
                            <div className="card-contenido">
                                <h2>Servicios</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quam corporis error eligendi </p>
                            </div>
                        </div>

                    </div>

                    <div className='titulo-galeria'>
                        <h2>Galeria</h2>
                        <hr />
                    </div>
                    <div className='galeria'>
                        <div className="item-a">
                            <img src={galeria1} alt='imagen-galeria-agromyss' />
                        </div>
                        <div>
                            <img src={galeria2} alt='imagen-galeria-agromyss' />
                        </div>
                        <div className="item-b">
                            <img src={galeria8} alt='imagen-galeria-agromyss' />
                        </div>
                        <div>
                            <img src={galeria4} alt='imagen-galeria-agromyss' />
                        </div>
                        <div className="item-c">
                            <img src={galeria5} alt='imagen-galeria-agromyss' />
                        </div>
                        <div>
                            <img src={galeria6} alt='imagen-galeria-agromyss' />
                        </div>
                        <div>
                            <img src={galeria7} alt='imagen-galeria-agromyss' />
                        </div>
                        <div className="item-d">
                            <img src={galeria3} alt='imagen-galeria-agromyss' />
                        </div>
                    </div>



                </>
            }
            {idioma === 'ingles' &&
                <>
                    <Header />
                    <div className='banner'>
                        <div>
                            <h4><span>We Recognize</span> the ground as the most value thing we have; we are convinced that the armony of men with the environment brings the welfare. We know  the answer of many things come from the natural, we value the past and believe on the future.
                        </h4>
                        </div>
                    </div>
                    <VideoCorporativo />

                    {/*  <div className='slogan'>

                    <img src="https://www.vtv.gob.ve/wp-content/uploads/2020/10/Cacao-en-Miranda.jpg" alt="imagen-cultivos" />
                    <p><span> Reconocemos </span>en la tierra lo más valioso que tenemos, estamos convencidos que de la armonía del hombre con el medio florece el bienestar. Sabemos que en lo natural está la respuesta a muchas cosas, valoramos el pasado y creemos en el futuro</p>
                </div> */}

                    <div className='division'>
                        <div>
                            <p>We want to highlight the narutal flavor of cocoa, providing an unforgettable experience to the costumer trough the constant improvement focused on a sustainable development.</p>
                        </div>

                    </div>

                    <div className='sesion-productos-servicios'>
                        <div className="cards">
                            <div className="card-icono">
                                <img src={iconoIndustria} alt="" />
                            </div>
                            <div className="card-contenido">
                                <h2>Industry</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quam corporis error eligendi </p>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="card-icono">
                                <img src={iconoServicios} alt="" />
                            </div>
                            <div className="card-contenido">
                                <h2>Services</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quam corporis error eligendi </p>
                            </div>
                        </div>

                    </div>
                    <div className='titulo-galeria'>
                        <h2>Gallery</h2>
                        <hr />
                    </div>

                    <div className='galeria'>
                        <div className="item-a">
                            <img src={galeria1} alt='imagen-galeria-agromyss' />
                        </div>
                        <div>
                            <img src={galeria2} alt='imagen-galeria-agromyss' />
                        </div>
                        <div className="item-b">
                            <img src={galeria8} alt='imagen-galeria-agromyss' />
                        </div>
                        <div>
                            <img src={galeria4} alt='imagen-galeria-agromyss' />
                        </div>
                        <div className="item-c">
                            <img src={galeria5} alt='imagen-galeria-agromyss' />
                        </div>
                        <div>
                            <img src={galeria6} alt='imagen-galeria-agromyss' />
                        </div>
                        <div>
                            <img src={galeria7} alt='imagen-galeria-agromyss' />
                        </div>
                        <div className="item-d">
                            <img src={galeria3} alt='imagen-galeria-agromyss' />
                        </div>
                    </div>



                </>
            }


        </Contenedor >
    )
}

export default Home
