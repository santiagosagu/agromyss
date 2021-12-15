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

const SustentabilidadIngles = () => {
  return (
    <Component>
      <Element name="working with farmers">
        <div className="container">
          <h4>WORKING WITH FARMERS</h4>

          <img
            src="/images/sustentabilidad/sustentabilidad trabajo con agricultores.jpg"
            alt="escala-de-mejora"
          />

          <p>
            <span>AGROMYSS</span> differentiates itself by being a company of
            integrated origin, which produces and / or buys directly from
            farmers and processes products for local consumption and export.
          </p>

          <p>
            As a local producer and processor, AGROMYSS's long-term
            profitability is closely linked to the profitability of its
            production and that of its agricultural suppliers. The long-term
            success of AGROMYSS depends on the sustainability of its own
            production and the networks of local farmers and the supply of a
            sufficient quantity of quality products to satisfy the needs of
            AGROMYSS customers. For this reason, AGROMYSS works closely with
            farmers to help them improve yields, quality and, in turn, their
            income. With training, access to markets, inputs and technology,
            farmers can produce more and better products. By providing valuable
            services to farmers, such as assistance in obtaining internationally
            recognized certifications, AGROMYSS aims to earn their loyalty as
            their preferred buyer and is able to offer differentiated products
            and solutions to the most demanding customers.
          </p>

          <p>
            AGROMYSS's strength lies in its home operations. Each local AGROMYSS
            company is responsible for its profitability and sustainability
            programs. This decentralized model has served AGROMYSS well for
            several years because every local market and every commodity supply
            chain is different. Each local AGROMYSS company develops sourcing
            and farmer development strategies that reflect the local needs of
            farmers and their business realities. Traceable supply chains ensure
            the absence of child and forced labor. Communities and families are
            strengthened.
          </p>

          <p>
            Despite the different conditions and needs in each region, all
            AGROMYSS operations and farmer development programs share a common
            structure:
          </p>

          <img src={imagenTrabajandoAgricultores} alt="escala-de-mejora" />

          <p>
            This is a ladder of continuous improvement that farmers can climb,
            with each step being a precursor to the next. In its maturity, by
            providing a package of training and knowledge transfer services, and
            improving yields and quality, AGROMYSS establishes long-term
            relationships with farmers throughout the year. This simultaneously
            serves AGROMYSS purchasing policies and serves producers'
            expectations by increasing income opportunities through higher
            yields and better quality.
          </p>

          <p>
            From a business perspective, there is a synergy in the combination
            of training, certification, knowledge transfer, and purchasing, each
            strengthening and supporting the other.
          </p>
        </div>
      </Element>

      <Element name="looking for the business">
        <div className="container">
          <h4>LOOKING FOR THE BUSINESS IMPACT WITH SUSTAINABLE PRODUCTION</h4>

          <img
            src="/images/sustentabilidad/sustentabilidad buscando el impacto empresarial.jpg"
            alt="escala-de-mejora"
          />

          <p>
            Consumer demand today is prompting leading brands to provide greater
            transparency about where their products come from and how they are
            made. The way in which producers and marketers such as AGROMYSS and
            their agricultural suppliers address problems related to soil
            management, fertilizer management and crop protection, protection of
            the natural environment and labor practices is now key to the
            positioning of the brand and prices.
          </p>

          <p>
            To provide traceability and assurance of good agricultural
            practices, leading brands are increasingly demanding certified
            products, either through their own proprietary standards or through
            independent third-party standards.
          </p>
        </div>
      </Element>

      <Element name="promoting agricultural improvement">
        <div className="container">
          <h4>PROMOTING AGRICULTURAL IMPROVEMENT</h4>

          <img
            src="/images/sustentabilidad/sustentabilidad impulsando mejora agricola.jpg"
            alt="escala-de-mejora"
          />

          <p>
            <span>AGROMYSS</span> implements several models to reach small
            farmers with training, technology transfer and certification to
            provide value-added services with the objective of effective
            management, transparency and accountability to its partners.
          </p>

          <p>
            In many regions, AGROMYSS employs agronomists directly in agronomy
            divisions within the local operating company to provide training,
            conduct credit evaluations, and facilitate the procurement process.
          </p>

          <p>
            AGROMYSS's efforts are aimed at developing lasting capacities for
            the continuous training of farmers. The establishment of these
            programs is almost always done in partnership with development
            agencies, NGOs, clients, and investors. These partners engage with
            AGROMYSS in public-private partnerships, recognizing the public good
            that is a component of this work.
          </p>

          <h4>Some learnings from AGROMYSS experience so far include:</h4>

          <ul>
            <li>
              The strength of AGROMYSS programs for farmers is their link to the
              market, which allows AGROMYSS to focus training efforts on market
              needs and opportunities, advising farmers on which certification
              program (s) to adopt, which segments market value to target and
              what technologies to implement.
            </li>
            <li>
              Sustainable AGROMYSS programs must not only be relevant to
              growers' needs, but must be profitable enough to allow AGROMYSS to
              be a competitive buyer in the harvest season. Strategic alliances
              help mitigate risk and investment and operating costs.
            </li>
            <li>
              The synergy between training, services, knowledge transfer and
              purchases making economies of scale is fundamental for the success
              of the program, both for AGROMYSS and for the farmers. The
              manpower and data collection of each of these activities leverage
              each other, making them collectively stronger.
            </li>
            <li>
              To be successful in the long term, AGROMYSS must continue to
              develop internal training capabilities rather than relying on
              external consultants. AGROMYSS has found that internal
              capabilities maximize synergies and provide a valuable presence
              throughout the year.
            </li>
          </ul>
        </div>
      </Element>

      <Element name="inclusive business model">
        <div className="container">
          <h4>INCLUSIVE BUSINESS MODEL</h4>

          <img
            src="/images/sustentabilidad/sustentabilidad modelo empresarial inclusivo.JPG"
            alt="escala-de-mejora"
          />

          <p>
            <span>AGROMYSS</span> considers its sustainability programs and
            support to farmers as a source of competitive advantage. They are
            also a potentially important contributor to sustainable development
            and the achievement of public ambitions to address environmental and
            social issues through entrepreneurship at the farm level.
          </p>

          <p>
            Inclusive business is fundamental to AGROMYSS's sustainability work.
            That is, working in a way that creates shared value for small
            farmers. AGROMYSS facilitates your participation in its programs
            and, by doing so, generates a positive impact in the regions where
            it operates.
          </p>

          <p>
            AGROMYSS sustainability work is challenging due to the number and
            diversity of farmers, and without an inclusive business strategy it
            would not be possible. Consumers around the world and the companies
            supplying them with products are becoming more and more aware. This
            trend represents the greatest opportunity for AGROMYSS. Consumers
            may not be willing to pay more, but they are willing to give
            preference to brands that show they are doing the right thing.
          </p>
        </div>
      </Element>

      <Element name="traceability">
        <div className="container">
          <h4>TRACEABILITY</h4>

          <img
            src="/images/sustentabilidad/trazabilidad.JPG"
            alt="escala-de-mejora"
          />

          <p>
            Traceability is the ability to trace products from producer to
            manufacturer to end consumer, which is important to create higher
            value-added products and increase supply chain efficiency. AGROMYSS
            aims to be the industry leader in traceability in both cocoa, mango
            sugar and products with added value that generate these and
            by-products.
          </p>
        </div>
      </Element>

      <Element name="cocoa supply chain">
        <div className="container">
          <h4>COCOA SUPPLY CHAIN</h4>

          <img
            src="/images/sustentabilidad/sustentabilidad cadeja de suministro de cacao.jpg"
            alt="escala-de-mejora"
          />

          <p>
            At AGROMYSS CACAO we are continually expanding our presence to
            provide superior service and quality cocoa products to meet the
            needs of our customers. Our operations, which are involved in the
            production, trade, processing, shipping and delivery of cocoa
            products and by-products, are involved at all levels of the
            industry.
          </p>

          <img
            src={imagenCadenaSuministroCacao}
            alt="cadena-de-suministro-del-cacao"
          />
        </div>
      </Element>

      <Element name="cocoa sustainability">
        <div className="container">
          <h4>COCOA SUSTAINABILITY</h4>

          <img
            src="/images/sustentabilidad/sustentabilidad sostenibilidad del cacao.jpg"
            alt="escala-de-mejora"
          />

          <p>
            <span>AGROMYSS</span> is convinced that empowered through the
            transfer of knowledge and technologies, as well as leading the
            organization of cocoa-producing communities can improve their
            quality of life.
          </p>

          <p>
            The vast majority of the world's cocoa comes from small producers.
            Small-scale cocoa production is characterized by low input use, low
            investment, inadequate agricultural practices, which leads to low
            production, resulting in low income and profits.
          </p>

          <p>
            As the demand for cocoa continues to increase and the land for new
            cocoa is limited, the challenge in cocoa farming today is to boost
            yields and make cocoa farming an attractive and sustainable
            livelihood for farmers in the future. . AGROMYSS believes that
            through its programs, sustainability can be ensured, through the
            improvement of agricultural practices, the efficient use of inputs
            and a basic financial knowledge. Transforming these farms into
            productive and profitable long-term livelihoods.
          </p>

          <p>
            AGROMYSS initiatives for sustainable cocoa focus on training farmers
            in good agricultural practices focused on good production but also
            on the generation of high quality beans, guaranteeing an effective
            traceability system that allows a better knowledge of the crops and
            the opportunity to develop appropriate interventions.
          </p>

          <p>
            To achieve such an ambitious program, AGROMYSS firmly believes in
            strategic alliances and open dialogue with all members of the
            production and supply chain.
          </p>
        </div>
      </Element>
    </Component>
  );
};

export default SustentabilidadIngles;
