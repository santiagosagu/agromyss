import React from "react";
import imagenTrabajandoAgricultores from "../../../imagenes/imagen-trabajando-con-agricultores.jpg";
import imagenCadenaSuministroCacao from "../../../imagenes/imagen-cadena-suministro-cacao.jpg";
import Styled from "@emotion/styled";
import { Element } from "react-scroll";

const Component = Styled.div`
  margin: 4rem 1rem;

        @media(min-width: 1200px){
            width: 70%;
            margin: 4rem auto;
        }

        h4{
            font-weight: bold;
            @media(min-width: 1200px){
              font-size: 1.7rem;
              margin-bottom: 1rem;
            }
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

    li{
      font-size: 1.2rem;
    }

    img {
      width: 100%;
      max-height: 35rem;
    }
  }
`;

const SustentabilidadEspañol = () => {
  return (
    <Component>
      <Element name="trabajando con agricultores">
        <div className="container">
          <h4>TRABAJANDO CON AGRICULTORES</h4>

          <img
            src="/images/sustentabilidad/sustentabilidad trabajo con agricultores.jpg"
            alt="escala-de-mejora"
            style={{ width: "auto", height: "auto" }}
          />

          <p>
            <span>AGROMYSS</span> se diferencia por ser una empresa de origen
            integrado, que produce y/o compra directamente a los agricultores y
            procesa productos para los consumos locales y la exportación.
          </p>

          <p>
            Como productor y procesador local, la rentabilidad a largo plazo de
            AGROMYSS está estrechamente vinculada a la rentabilidad de su
            produccion y la de sus proveedores agrícolas. El éxito de AGROMYSS a
            largo plazo depende de la sostenibilidad de su propia produccion y
            de la redes de agricultores locales y del suministro de una cantidad
            suficiente de productos de calidad para satisfacer las necesidades
            de los clientes de AGROMYSS. Por esta razón, AGROMYSS trabaja en
            estrecha colaboración con los agricultores para ayudarlos a mejorar
            los rendimientos, la calidad y, a su vez, sus ingresos. Con
            capacitación, acceso a mercados, insumos y tecnología, los
            agricultores pueden producir más y mejores productos. Al
            proporcionar servicios valiosos a los agricultores, como asistencia
            para obtener certificaciones reconocidas internacionalmente,
            AGROMYSS tiene como objetivo ganarse su lealtad como su comprador
            preferido y puede ofrecer productos y soluciones diferenciados a los
            clientes más exigentes.
          </p>

          <p>
            La fortaleza de AGROMYSS radica en sus operaciones de origen. Cada
            empresa local de AGROMYSS es responsable de su rentabilidad y sus
            programas de sostenibilidad. Este modelo descentralizado ha
            funcionado bien a AGROMYSS durante varios años porque cada mercado
            local y cada cadena de suministro de productos básicos es diferente.
            Cada empresa local de AGROMYSS desarrolla estrategias de
            abastecimiento y desarrollo de agricultores que reflejan las
            necesidades locales de los agricultores y sus realidades
            comerciales. Las cadenas de suministro rastreables garantizan la
            ausencia de trabajo infantil y forzoso. Se fortalecen comunidades y
            familias.
          </p>
          <p>
            A pesar de las diferentes condiciones y necesidades en cada region,
            todas las operaciones de AGROMYSS y los programas de desarrollo de
            agricultores comparten una estructura común:
          </p>
          <img src={imagenTrabajandoAgricultores} alt="escala-de-mejora" />
          <p>
            Esta es una escalera de mejora continua que los agricultores pueden
            ascender, siendo cada paso un precursor del siguiente. En su
            madurez, al proporcionar un paquete de servicios de capacitación y
            transferencia de conocimiento, y mejorar los rendimientos y la
            calidad, AGROMYSS establece relaciones a largo plazo con los
            agricultores durante todo el año. Esto simultáneamente sirve a las
            politicas de compra de AGROMYSS y sirve a las expectativas de los
            productores al aumentar las oportunidades de ingresos a través de
            mayores rendimientos y mejor calidad.
          </p>
          <p>
            Desde una perspectiva empresarial, existe una sinergia en la
            combinación de capacitación, certificación, transferencia de
            conocimiento y compras, cada uno fortaleciendo y apoyando al otro.
          </p>
        </div>
      </Element>

      <Element name="buscando el impacto empresarial">
        <div className="container">
          <h4>BUSCANDO EL IMPACTO EMPRESARIAL CON PRODUCCION SOSTENIBLE</h4>

          <img
            src="/images/sustentabilidad/sustentabilidad buscando el impacto empresarial.jpg"
            alt="escala-de-mejora"
            style={{ width: "auto", height: "auto" }}
          />

          <p>
            La demanda de los consumidores está impulsando hoy a las marcas
            líderes a brindar una mayor transparencia sobre el origen de sus
            productos y cómo se fabrican. La forma en que productores y
            comercializadores como AGROMYSS y sus proveedores agrícolas abordan
            los problemas relacionados con el manejo del suelo, el manejo de
            fertilizantes y protección de cultivos, la protección del medio
            ambiente natural y las prácticas laborales es ahora clave para el
            posicionamiento de la marca y los precios.
          </p>

          <p>
            Para proporcionar trazabilidad y garantía de buenas prácticas
            agrícolas, las marcas líderes exigen cada vez más productos
            certificados, ya sea a través de sus propios estándares patentados o
            mediante estándares de terceros independientes.
          </p>
        </div>
      </Element>

      <Element name="impulsando la mejora agricola">
        <div className="container">
          <h4>IMPULSANDO LA MEJORA AGRICOLA</h4>

          <img
            src="/images/sustentabilidad/sustentabilidad impulsando mejora agricola.jpg"
            alt="escala-de-mejora"
            style={{ width: "auto", height: "auto" }}
          />

          <p>
            <span>AGROMYSS</span> implementa varios modelos para llegar a los
            pequeños agricultores con capacitación, transferencia de tecnologia
            y certificación para brindar servicios de valor agregado con el
            objetivo de una gestión efectiva, transparencia y rendición de
            cuentas asus socios.
          </p>

          <p>
            En muchas regiones, AGROMYSS emplea a agrónomos directamente en las
            divisiones de agronomía dentro de la empresa operativa local para
            brindar capacitación, realizar evaluaciones crediticias y facilitar
            el proceso de adquisiciones.
          </p>

          <p>
            Los esfuerzos de AGROMYSS están dirigidos a desarrollar capacidades
            duraderas para la formación continua de los agricultores. El
            establecimiento de estos programas casi siempre se realiza en
            asociación con agencias de desarrollo, ONG, clientes e
            inversionistas. Estos socios se involucran con AGROMYSS en
            asociaciones público-privadas, reconociendo el bien público que es
            un componente de este trabajo.
          </p>

          <h4>
            Algunos aprendizajes de la experiencia de AGROMYSS hasta ahora
            incluyen:
          </h4>
          <ul>
            <li>
              La fortaleza de los programas de AGROMYSS para los agricultores es
              su vínculo con el mercado lo que permite a AGROMYSS enfocar los
              esfuerzos de capacitación en las necesidades y oportunidades del
              mercado, asesorando a los agricultores sobre qué programa (s) de
              certificación adoptar, cuál segmentos de mercado de mayor valor a
              los que apuntar y qué tecnologías implementar.
            </li>
            <li>
              Los programas sostenibles de AGROMYSS no solo deben ser relevantes
              para las necesidades de los productores, sino que deben ser lo
              suficientemente rentables como para permitir que AGROMYSS sea un
              comprador competitivo en la temporada de cosecha. Las alianzas
              estrategicas ayudan a mitigar el riesgo y los costos de inversion
              y operacion.
            </li>
            <li>
              La sinergia entre capacitación, servicios, transferencia de
              conocimiento y compras haciendo economias de escala es fundamental
              para el éxito del programa, tanto para AGROMYSS como para los
              agricultores. La mano de obra y la recopilación de datos de cada
              una de estas actividades se apalancan entre sí, haciéndolas
              colectivamente más fuertes.
            </li>
            <li>
              Para tener éxito a largo plazo, AGROMYSS debe continuar
              desarrollando capacidades internas de capacitación en lugar de
              depender de consultores externos. AGROMYSS ha descubierto que las
              capacidades internas maximizan las sinergias y proporcionan una
              valiosa presencia durante todo el año.
            </li>
          </ul>
        </div>
      </Element>

      <Element name="modelo empresarial inclusivo">
        <div className="container">
          <h4>MODELO EMPRESARIAL INCLUSIVO</h4>

          <img
            src="/images/sustentabilidad/sustentabilidad modelo empresarial inclusivo.JPG"
            alt="escala-de-mejora"
            style={{ width: "auto", height: "auto" }}
          />

          <p>
            <span>AGROMYSS</span> considera sus programas de sostenibilidad y el
            apoyo a los agricultores como una fuente de ventaja competitiva.
            También son un contribuyente potencialmente importante al desarrollo
            sostenible y al logro de las ambiciones públicas de abordar los
            problemas ambientales y sociales a través del espíritu empresarial a
            nivel de la granja.
          </p>

          <p>
            Los negocios inclusivos son fundamentales para el trabajo de
            sostenibilidad de AGROMYSS. Es decir, trabajar de una manera que
            cree valor compartido para los pequeños agricultores. AGROMYSS
            facilita su participación en sus programas y, al hacerlo, genera un
            impacto positivo en las regiones donde opera.
          </p>

          <p>
            El trabajo de sostenibilidad de AGROMYSS es un desafío debido a la
            cantidad y diversidad de agricultores, y sin una estrategia
            comercial inclusiva no sería posible. Los consumidores de todo el
            mundo y las empresas que les suministran productos son cada vez más
            conscientes. Esta tendencia representa la mayor oportunidad de
            AGROMYSS. Es posible que los consumidores no estén dispuestos a
            pagar más, pero están dispuestos a dar preferencia a las marcas que
            demuestren que están haciendo lo correcto.
          </p>
        </div>
      </Element>

      <Element name="trazabilidad">
        <div className="container">
          <h4>TRAZABILIDAD</h4>

          <img
            src="/images/sustentabilidad/trazabilidad.JPG"
            alt="escala-de-mejora"
            style={{ width: "auto", height: "auto" }}
          />

          <p>
            La trazabilidad es la capacidad de rastrear los productos desde el
            productor hasta el fabricante y o el consuidor final, lo cual es
            importante para crear productos de mayor valor agregado y aumentar
            la eficiencia de la cadena de suministro. AGROMYSS pretende ser
            líder de la industria en trazabilidad tanto en cacao, mango de
            azucar como en productos con valor agregado generado de estos y
            subproductos.
          </p>
        </div>
      </Element>

      <Element name="cadena de suministro del cacao">
        <div className="container">
          <h4>CADENA DE SUMINISTRO DEL CACAO</h4>

          <img
            src="/images/sustentabilidad/sustentabilidad cadeja de suministro de cacao.jpg"
            alt="escala-de-mejora"
            style={{ width: "auto", height: "auto" }}
          />

          <p>
            En AGROMYSS CACAO estamos expandiendo continuamente nuestra
            presencia para brindar un servicio superior y productos de cacao de
            calidad para satisfacer las necesidades de nuestros clientes.
            Nuestras operaciones, que están involucradas en la produccion, el
            comercio, procesamiento, envío y entrega de productos y subproductos
            de cacao, participan en todos los niveles de la industria.
          </p>

          <img
            src={imagenCadenaSuministroCacao}
            alt="cadena-de-suministro-del-cacao"
          />
        </div>
      </Element>

      <Element name="sostenibilidad del cacao">
        <div className="container">
          <h4>SOSTENIBILIDAD DEL CACAO</h4>

          <img
            src="/images/sustentabilidad/sustentabilidad sostenibilidad del cacao.jpg"
            alt="escala-de-mejora"
            style={{ width: "auto", height: "auto" }}
          />

          <p>
            <span>AGROMYSS</span> esta convencido que empoderado a traves de la
            transferencia de conocimiento y tecnologias, asi como liderando la
            organizacion de las comunidades productoras de cacao pueden mejorar
            su calidad de vida.
          </p>

          <p>
            La gran mayoría del cacao del mundo proviene de pequeños
            productores. La producción de cacao en pequeña escala se caracteriza
            por un bajo uso de insumos, baja inversión, inadecuadas practicas
            agricolas lo que conlleva a baja produccion, lo que resulta en bajos
            ingresos y utilidades.
          </p>

          <p>
            A medida que la demanda de cacao continúa aumentando y la tierra
            para el cacao nuevo es limitada, el desafío en el cultivo del cacao
            hoy es impulsar los rendimientos y hacer del cultivo del cacao un
            medio de vida atractivo y sostenible para los agricultores en el
            futuro. AGROMYSS cree que a través de sus programas, la
            sostenibilidad puede asegurarse, mediante la mejora de las prácticas
            agrícolas, el uso eficiente de insumos y un conocimiento basico
            financiero. Transformando estas granjas en medio de vida productivos
            y rentables a largo plazo.
          </p>

          <p>
            Las iniciativas de AGROMYSS para el cacao sostenible se enfocan en
            capacitar a los agricultores en buenas prácticas agrícolas enfocadas
            a una buena produccion pero tambien en la generacion de granos de
            alta calidad, garantizando un sistema de trazabilidad efectivo que
            permita un mejor conocimiento de los cultivos y la oportunidad de
            desarrollar las intervenciones adecuadas.
          </p>

          <p>
            Para lograr un programa tan ambicioso, AGROMYSS cree firmemente en
            las alianzas estrategicas y el diálogo abierto con todos los
            miembros de la produccion y de la cadena de suministro.
          </p>
        </div>
      </Element>
    </Component>
  );
};

export default SustentabilidadEspañol;
