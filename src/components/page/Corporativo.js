import React, { useContext } from 'react'
import Styled from '@emotion/styled'
import Header from '../Header'
import idiomaContext from '../../context/idioma/idiomaContext'
import imagenMision from '../../imagenes/imagen-mision.png'
import imagenVision from '../../imagenes/imagen-vision.png'
import imagenPrincipios from '../../imagenes/imagen-principios.png'
import imagenValores from '../../imagenes/imagen-valores.png'
import { Link } from 'react-router-dom'

const Contenido = Styled.div`
    
    @media(min-width: 1200px){
        margin-top: 8%;

    }

    h1{
        text-align: center;
        margin: 1rem;
        margin-top: 2rem;
    }

    h5{
        margin: 4rem 2rem 1rem 2rem;
        font-size: 1rem;

        @media(min-width: 768px){
            font-size: 1.2rem;
        }
        
        a{
            text-decoration: none;
            color: #000;

            :hover{
                color: #8b9022;
            }
        }
    }

    .contenido{
        

        @media(min-width: 1200px){
            margin: 2rem 2rem;
            display: grid;
            grid-template-columns: 350px 350px 270px 270px;
            grid-gap: 1rem;
        }

        .card{
            margin: 1rem;
            padding: 1rem;
            border: none;

            @media(min-width: 1200px){
                border: 1px solid #8b9022;
                margin: 0;
            }  

            h2{
                @media(min-width: 1200px){
                    text-align: center;
                }
            }

            div{
                width: 100px;

                @media(min-width: 1200px){
                    width: 70px;
                    margin: 0 auto;
                }  

            }

            img{
                width: 100%;
                margin-bottom: 1rem;
            }
        }

    }
`


const Corporativo = () => {

    /* context para el idioma */
    const { idioma } = useContext(idiomaContext)

    return (
        <Contenido>
            {idioma === 'español' &&
                <>
                    <Header />
                    <h1>Filosofia, Principios y Valores</h1>
                    <h5>
                        <Link to='/corporativo/video-corporativo'>Ver Nuestro video</Link>
                    </h5>
                    <div className='contenido'>
                        <div className='card'>
                            <h2>Nuestra Misión</h2>
                            <div>
                                <img src={imagenMision} alt="" />
                            </div>

                            <p>Cultivar, transformar y comercializar productos sustentables y sostenibles de óptima calidad, fundamentados en el mejoramiento continuo, enmarcado en políticas corporativas que garantizan el bienestar de nuestros colaboradores, la protección al medio ambiente y la rentabilidad económica y social.</p>
                        </div>
                        <div className='card'>
                            <h2>Nuestra Visión</h2>
                            <div>
                                <img src={imagenVision} alt="" />
                            </div>
                            <p>Ser reconocidos a nivel nacional como una empresa líder en la producción, transformación y exportación de productos y sub productos agrícolas y agroindustriales sostenibles y sustentables, con los más altos estándares de calidad e innovación, para la satisfacción de nuestros clientes y el desarrollo humano integral de colaboradores y comunidades.</p>
                        </div>
                        <div className='card'>
                            <h2>Principios</h2>
                            <div>
                                <img src={imagenPrincipios} alt="" />
                            </div>
                            <li>Amar a Dios sobre todas las cosas</li>
                            <li>Lealtad</li>
                            <li>Honestidad</li>
                            <li>Respeto</li>
                            <li>Amabilidad</li>
                        </div>
                        <div className='card'>
                            <h2>Valores</h2>
                            <div>
                                <img src={imagenValores} alt="" />
                            </div>
                            <li>Pasión por el servicio</li>
                            <li>Trabajo en equipo</li>
                            <li>Enfoque al resultado</li>
                            <li>Resiliencia</li>
                            <li>Liderazgo</li>
                        </div>
                    </div>
                </>
            }

            {idioma === 'ingles' &&
                <>
                    <Header />
                    <h1>Philosophy, Principles and Values</h1>
                    <h5>
                        <Link to='/corporativo/video-corporativo'>See our video</Link>
                    </h5>
                    <div className='contenido'>

                        <div className='card'>
                            <h2>Our Mission</h2>
                            <div>
                                <img src={imagenMision} alt="" />
                            </div>

                            <p>Cultivate, transform and trade sustainable products with high quality, based on the constant improvement, framed on corporate policies to ensure the welfare of our partners, the protection of the environment and the economic and social profitability.</p>
                        </div>
                        <div className='card'>
                            <h2>Our Vision</h2>
                            <div>
                                <img src={imagenVision} alt="" />
                            </div>
                            <p>To be recognize at national level as a leading Company on the production, transformation and exportation of products, sustainable farming and agro-industry sector by-products with the highest standars of quality and innovation for costumer satisfaction and the comprehensive human development of partners and communities.</p>
                        </div>
                        <div className='card'>
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
                        <div className='card'>
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
            }

        </Contenido>
    )
}

export default Corporativo
