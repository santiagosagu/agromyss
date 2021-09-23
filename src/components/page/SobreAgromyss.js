import React, { useContext } from 'react'
import Styled from '@emotion/styled'
import idiomaContext from '../../context/idioma/idiomaContext'
import imagenPrincipal from '../../imagenes/imagen-principal-sobre-agromyss.jpg'
import Header from '../Header'

const Contenedor = Styled.div`
    @media(min-width: 1200px){
        margin-top: 8%;

    }

    h1{
        text-align: center;
        margin: 1rem;
        margin-top: 2rem;
    }

    .contenido{

        margin: 4rem 1rem;

        @media(min-width: 1200px){
            width: 70%;
            margin: 4rem auto;
        }

        h4{
            font-weight: bold;
        }
        

        p{  

            margin-top: 2rem;
            font-size: 1.3rem;

            span{
                font-weight: bold;
            }
        }
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
            background-attachment: fixed;
        }

    }
`

const SobreAgromyss = ({ match }) => {

    /* context para el idioma */
    const { idioma } = useContext(idiomaContext)

    const QueVer = () => {
        if (match.params.item === 'responsabilidad-social-y-ambiental') {
            return (
                <>
                    {idioma === 'español' &&
                        <div className='contenido'>
                            <h4>Responsabilidad Social y Ambiental:</h4>

                            <p>
                                <span>AGROMYSS</span> se compromete a realizar sus negocios de manera ética, legal, ambiental y socialmente responsable. Es una empresa de origen único integrado, lo que significa que se centra en producir y /o comprar a los productores en el origen, proporcionar procesamiento primario, servicios de transferencia de conocimiento en produccion y transformacion de productos y subproductos  agricolas,  gestión de riesgos y vender a los comercializadoresy/o al consumidor final.
                            </p>
                        </div>
                    }
                    {idioma === 'ingles' &&
                        <div className='contenido'>
                            <h4>Social and Environmental Responsibility:</h4>

                            <p>
                                <span>AGROMYSS</span> is committed to conducting its business in an ethical, legal, environmental and socially responsible manner. It is an integrated single source company, which means that it focuses on producing and / or purchasing from producers at the source, providing primary processing, knowledge transfer services in production and transformation of agricultural products and by-products, risk management and sell to marketers and / or the final consumer.
                                </p>
                        </div>

                    }
                </>
            )
        }
        if (match.params.item === 'codigo-de-conducta-del-proveedor') {
            return (
                <>
                    {idioma === 'español' &&
                        <div className='contenido'>
                            <h4>Código de Conducta del Proveedor:</h4>

                            <p>
                                <span>AGROMYSS</span> está comprometida con la protección del medio ambiente, mejorando la trazabilidad y expandiendo el desarrollo de programas de producción sustentable propios y de proveedores. AGROMYSS espera que sus proveedores se comprometan a hacer negocios de manera responsable, sostenible y ética. El Código de conducta para proveedores de AGROMYSS establece los estándares que se esperan de nuestros Proveedores y proporciona un marco dentro del cual trabajar independientemente de las leyes locales, las políticas de la empresa, las normas culturales y las prácticas comerciales. Todo la produccion y los  proveedores de AGROMYSS debemos cumplir con el Código de conducta para proveedores.
                            </p>
                        </div>
                    }
                    {idioma === 'ingles' &&
                        <div className='contenido'>
                            <h4>Supplier Code of Conduct:</h4>

                            <p>
                                <span>AGROMYSS</span> is committed to protecting the environment, improving traceability and expanding the development of its own sustainable production programs and those of suppliers. AGROMYSS expects its suppliers to commit to doing business in a responsible, sustainable and ethical manner. The AGROMYSS Supplier Code of Conduct sets the standards expected of our Suppliers and provides a framework within which to work independently of local laws, company policies, cultural norms and business practices. All AGROMYSS production and suppliers must comply with the Code of Conduct for Suppliers.
                                </p>
                        </div>

                    }
                </>
            )
        }
        if (match.params.item === 'declaracion-de-esclavitud-moderna') {
            return (
                <>
                    {idioma === 'español' &&
                        <div className='contenido'>
                            <h4>Declaración de Esclavitud Moderna:</h4>

                            <p>
                                <span>AGROMYSS</span> trabaja continuamente con sus socios comerciales y clientes para eliminar la esclavitud moderna o la trata de personas de nuestras cadenas de suministro. La Declaración sobre la esclavitud moderna de AGROMYSS establece las políticas y los procesos establecidos para abordar la esclavitud moderna y la trata de personas.
                            </p>
                        </div>
                    }
                    {idioma === 'ingles' &&
                        <div className='contenido'>
                            <h4>Modern Slavery Statement:</h4>

                            <p>
                                <span>AGROMYSS</span> continuously works with its business partners and clients to eliminate modern slavery or human trafficking from our supply chains. The AGROMYSS Declaration on Modern Slavery sets out the policies and processes in place to address modern slavery and human trafficking.
                                </p>
                        </div>

                    }
                </>
            )
        }
        if (match.params.item === 'politica-ambiental-y-social') {
            return (
                <>
                    {idioma === 'español' &&
                        <div className='contenido'>
                            <h4>Política Ambiental y Social:</h4>

                            <p>
                                El compromiso de AGROMYSS es mejorar nuestro desempeño ambiental siempre que sea posible, ya que esto contribuye positivamente a nuestro negocio. Un mínimo es el cumplimiento de todas las pautas y requisitos reglamentarios locales, pero en la mayoría de los casos, se espera que nuestras prácticas superen dichos requisitos. Las operaciones deben mantener planes de respuesta a emergencias adecuados para el negocio y, en nuevos proyectos, incorporar todos los problemas de impacto ambiental local en la planificación.
                            </p>
                        </div>
                    }
                    {idioma === 'ingles' &&
                        <div className='contenido'>
                            <h4>Environmental and Social Policy:</h4>

                            <p>
                            <span>AGROMYSS</span> commitment is to improve our environmental performance whenever possible, as this contributes positively to our business. A minimum is compliance with all local regulatory guidelines and requirements, but in most cases our practices are expected to exceed those requirements. Operations must maintain business-appropriate emergency response plans and, in new projects, incorporate all local environmental impact issues into planning.
                                </p>
                        </div>

                    }
                </>
            )
        }
        if (match.params.item === 'politica-de-inquietudes-eticas') {
            return (
                <>
                    {idioma === 'español' &&
                        <div className='contenido'>
                            <h4>Política de Inquietudes Éticas:</h4>

                            <p>
                                <span>AGROMYSS</span> se compromete a realizar negocios con honestidad e integridad y esperamos que todo el personal mantenga altos estándares. Esta política existe para cualquier tercero con el fin de crear conciencia sobre cualquier presunta irregularidad.
                            </p>
                        </div>
                    }
                    {idioma === 'ingles' &&
                        <div className='contenido'>
                            <h4>Ethical concerns policy:</h4>

                            <p>
                                <span>AGROMYSS</span> is committed to conducting business with honesty and integrity and we expect all staff to maintain high standards. This policy exists for any third party in order to raise awareness of any alleged wrongdoing.
                                </p>
                        </div>

                    }
                </>
            )
        }
    }

    return (
        <Contenedor>
            <Header />

            {idioma === 'español'
                ? <h1>Sobre Agromyss</h1>
                : <h1>About Agromyss</h1>
            }
            
            <div className='contenedor-imagen'>

            </div>

            <QueVer />
        </Contenedor>
    )
}

export default SobreAgromyss
