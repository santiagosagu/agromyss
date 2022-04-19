import React from "react";
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

const SobreAgromyssIngles = () => {
  return (
    <Component>
      <Element name="social and environmental">
        <div className="container">
          <h4>Social and Environmental Responsibility:</h4>

          <img
            src="/images/sobreagromyss/sobre agromyss2.jpg"
            alt="escala-de-mejora"
          />

          <p>
            <span>AGROMYSS</span> is committed to conducting its business in an
            ethical, legal, environmental and socially responsible manner. It is
            an integrated single source company, which means that it focuses on
            producing and / or purchasing from producers at the source,
            providing primary processing, knowledge transfer services in
            production and transformation of agricultural products and
            by-products, risk management and sell to marketers and / or the
            final consumer.
          </p>
        </div>
      </Element>

      <Element name="supplier code of conduct">
        <div className="container">
          <h4>Supplier Code of Conduct:</h4>

          <img
            src="/images/sobreagromyss/sobre agromyss 3.jpg"
            alt="escala-de-mejora"
            style={{ width: "auto", height: "auto" }}
          />

          <p>
            <span>AGROMYSS</span> is committed to protecting the environment,
            improving traceability and expanding the development of its own
            sustainable production programs and those of suppliers. AGROMYSS
            expects its suppliers to commit to doing business in a responsible,
            sustainable and ethical manner. The AGROMYSS Supplier Code of
            Conduct sets the standards expected of our Suppliers and provides a
            framework within which to work independently of local laws, company
            policies, cultural norms and business practices. All AGROMYSS
            production and suppliers must comply with the Code of Conduct for
            Suppliers.
          </p>
        </div>
      </Element>

      <Element name="modern slavery statement">
        <div className="container">
          <h4>Modern Slavery Statement:</h4>

          <img
            src="/images/sobreagromyss/sobre agromyss 4.jpg"
            alt="escala-de-mejora"
            style={{ width: "auto", height: "auto" }}
          />

          <p>
            <span>AGROMYSS</span> continuously works with its business partners
            and clients to eliminate modern slavery or human trafficking from
            our supply chains. The AGROMYSS Declaration on Modern Slavery sets
            out the policies and processes in place to address modern slavery
            and human trafficking.
          </p>
        </div>
      </Element>

      <Element name="environmental and social policy">
        <div className="container">
          <h4>Environmental and Social Policy:</h4>

          <img
            src="/images/sobreagromyss/sobre agromyss politica ambiental y social.jpg"
            alt="escala-de-mejora"
            style={{ width: "auto", height: "auto" }}
          />

          <p>
            <span>AGROMYSS</span> commitment is to improve our environmental
            performance whenever possible, as this contributes positively to our
            business. A minimum is compliance with all local regulatory
            guidelines and requirements, but in most cases our practices are
            expected to exceed those requirements. Operations must maintain
            business-appropriate emergency response plans and, in new projects,
            incorporate all local environmental impact issues into planning.
          </p>
        </div>
      </Element>

      <Element name="ethical concerns policy">
        <div className="container">
          <h4>Ethical concerns policy:</h4>

          <img
            src="/images/sobreagromyss/sobre agromyss politicas de inquietudes eticas.JPG"
            alt="escala-de-mejora"
            style={{ width: "auto", height: "auto" }}
          />

          <p>
            <span>AGROMYSS</span> is committed to conducting business with
            honesty and integrity and we expect all staff to maintain high
            standards. This policy exists for any third party in order to raise
            awareness of any alleged wrongdoing.
          </p>
        </div>
      </Element>
    </Component>
  );
};

export default SobreAgromyssIngles;
