import React from "react";
import Styled from "@emotion/styled";

const Component = Styled.div`
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
  .container {
    margin-bottom: 4rem;
  }
`;

const SobreAgromyssEspañol = () => {
  return (
    <Component>
      <div className="container">
        <h4>Responsabilidad Social y Ambiental:</h4>

        <p>
          <span>AGROMYSS</span> se compromete a realizar sus negocios de manera
          ética, legal, ambiental y socialmente responsable. Es una empresa de
          origen único integrado, lo que significa que se centra en producir y
          /o comprar a los productores en el origen, proporcionar procesamiento
          primario, servicios de transferencia de conocimiento en produccion y
          transformacion de productos y subproductos agricolas, gestión de
          riesgos y vender a los comercializadoresy/o al consumidor final.
        </p>
      </div>
      <div className="container">
        <h4>Código de Conducta del Proveedor:</h4>

        <p>
          <span>AGROMYSS</span> está comprometida con la protección del medio
          ambiente, mejorando la trazabilidad y expandiendo el desarrollo de
          programas de producción sustentable propios y de proveedores. AGROMYSS
          espera que sus proveedores se comprometan a hacer negocios de manera
          responsable, sostenible y ética. El Código de conducta para
          proveedores de AGROMYSS establece los estándares que se esperan de
          nuestros Proveedores y proporciona un marco dentro del cual trabajar
          independientemente de las leyes locales, las políticas de la empresa,
          las normas culturales y las prácticas comerciales. Todo la produccion
          y los proveedores de AGROMYSS debemos cumplir con el Código de
          conducta para proveedores.
        </p>
      </div>
      <div className="container">
        <h4>Declaración de Esclavitud Moderna:</h4>

        <p>
          <span>AGROMYSS</span> trabaja continuamente con sus socios comerciales
          y clientes para eliminar la esclavitud moderna o la trata de personas
          de nuestras cadenas de suministro. La Declaración sobre la esclavitud
          moderna de AGROMYSS establece las políticas y los procesos
          establecidos para abordar la esclavitud moderna y la trata de
          personas.
        </p>
      </div>
      <div className="container">
        <h4>Política Ambiental y Social:</h4>

        <p>
          El compromiso de AGROMYSS es mejorar nuestro desempeño ambiental
          siempre que sea posible, ya que esto contribuye positivamente a
          nuestro negocio. Un mínimo es el cumplimiento de todas las pautas y
          requisitos reglamentarios locales, pero en la mayoría de los casos, se
          espera que nuestras prácticas superen dichos requisitos. Las
          operaciones deben mantener planes de respuesta a emergencias adecuados
          para el negocio y, en nuevos proyectos, incorporar todos los problemas
          de impacto ambiental local en la planificación.
        </p>
      </div>
      <div className="container">
        <h4>Política de Inquietudes Éticas:</h4>

        <p>
          <span>AGROMYSS</span> se compromete a realizar negocios con honestidad
          e integridad y esperamos que todo el personal mantenga altos
          estándares. Esta política existe para cualquier tercero con el fin de
          crear conciencia sobre cualquier presunta irregularidad.
        </p>
      </div>
    </Component>
  );
};

export default SobreAgromyssEspañol;
