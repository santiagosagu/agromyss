import React, { useContext, useEffect, useState } from "react";
import Styled from "@emotion/styled";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { CarritoContext } from "../context/carritoContext/CarritoContext";
import { useEnlacesContext } from "../context/enlaces/UseEnlaces";
import { db } from "../FirebaseConfig";

const Contenedor = Styled.div`
    .primera-sesion{

        @media(min-width: 768px){
            margin: 10% 0 0 0;
            display: grid;
            grid-template-columns: 50% 50%;
            grid-gap: 1rem;
             height: 610px;
            padding: 3rem 6rem;
        }

        .imagen{
            padding: 2rem 1rem;
            margin-bottom: 2rem;
            width: 100%;
            height: 370px;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;

            @media(min-width: 1200px){
              // height: 450px;
                padding: 2rem 5rem;
            }
        }

        hr{
            width: 40%;
            height: 2px;
            margin-bottom: 1rem;
        }

        .descripcion{
            margin: 1rem;
            color: #313131;

            .precio-carrito{
                display: flex;
                margin-top: 3rem;

                @media(min-height: 768px){
                    margin-top: 4rem;
                }

                p{
                    font-size: 1.2rem;
                    border: 1px solid rgb(13, 130, 121);
                    display: inline-block;
                    padding: 0.5rem 1rem;
                    /* margin-right: 1rem; */
                    color: rgb(13, 130, 121);
                }

                .carrito{
                    :hover{
                        background-color:#771D12;
                        border: 1px solid #771D12;
                        color: #fff;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    

    .segunda-sesion{

        margin: 1rem;
            color: #313131;

        @media(min-width: 768px){
            display: grid;
            grid-template-columns: 50% 50%;
            grid-gap: 7rem;
            height: 450px;
            padding: 3rem 6rem;
        }


        .informacion-producto{
            hr{
                width: 50%;
                margin-bottom: 1rem;
            }

            li{
                list-style: none;
                font-size: 1.2rem;
                margin-bottom: 0.5rem;
            }

            .informacion-producto-sesion1{
                margin-bottom: 2rem;
            }
        }
    }

    

  
`;

const DetalleProducto = ({ match }) => {
  //state que guarda el producto a mostrar
  const [productoActual, setProductoActual] = useState({});

  //productos
  const [todosProductosDB, setTodosProductosDB] = useState([]);

  const { agregarCarrito } = useContext(CarritoContext);

  const { ocultarEnlaces } = useContext(useEnlacesContext);

  useEffect(() => {
    const guardarDatos = async () => {
      await db.collection("productos").onSnapshot((doc) => {
        const resultado = doc.docs.map((item) => {
          return {
            id: item.id,
            ...item.data(),
          };
        });

        setTodosProductosDB(resultado);
      });
    };

    guardarDatos();
  }, []);

  useEffect(() => {
    if (todosProductosDB) {
      const resultado = todosProductosDB.filter(
        (item) => item.url === match.params.detalle
      );

      setProductoActual(resultado);
    }
  }, [match.params.detalle, match.params.producto, todosProductosDB]);

  console.log(productoActual);

  return (
    <Contenedor>
      {productoActual.length > 0 && (
        <div onMouseOver={ocultarEnlaces}>
          <div className="primera-sesion">
            <div className="imagen">
              <Carousel
                axis="horizontal"
                autoPlay
                infiniteLoop
                centerSlidePercentage={10}
                width="100%"
                thumbWidth={30}
                dynamicHeight
                emulateTouch
                showThumbs={false}
              >
                {productoActual[0].imagenes.map((image) => (
                  // <div
                  //   className="imagen"
                  //   style={{ backgroundImage: `url(${image})` }}
                  // ></div>
                  <div className="lg:w-[600px] lg:h-[600px]">
                    <img
                      src={image}
                      alt=""
                      // onClick={() => verProducto("chocolatinas", product.url)}
                      className="w-full h-full"
                    />
                  </div>
                ))}

                {/* <div className='imagen' style={{ backgroundImage: "url(https://www.evok.com.co/wp-content/uploads/2019/10/BarrasAmargo-7715.png)" }}>

                                </div>
                                <div className='imagen' style={{ backgroundImage: 'url(https://www.evok.com.co/wp-content/uploads/2019/10/BarrasAmargo2-7715.png)' }}>

                                </div>
                                <div className='imagen' style={{ backgroundImage: 'url(https://www.evok.com.co/wp-content/uploads/2019/10/Fondoblanco3-7717.png)' }}>

                                </div> */}
              </Carousel>
            </div>
            <div className="descripcion">
              <h2>{productoActual[0].nombreProducto}</h2>
              <hr />
              <h4>{productoActual[0].descripcion}</h4>
              <div className="precio-carrito">
                <p>$ {productoActual[0].precio}</p>
                <p
                  className="carrito"
                  onClick={() => agregarCarrito(productoActual[0])}
                >
                  Añadir al Carrito
                </p>
              </div>
            </div>
          </div>

          <div className="segunda-sesion">
            <div className="nutrifacts-html">
              <table>
                <tr>
                  <td>
                    <strong>Cantidad por Porcion</strong>{" "}
                  </td>
                  <td className="align-text-right">
                    {productoActual[0].infoNutricional.cantidadPorcion}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Calorias</strong>{" "}
                    {productoActual[0].infoNutricional.calorias}
                  </td>
                  <td className="align-text-right">
                    Calorias de grasa{" "}
                    {productoActual[0].infoNutricional.caloriasGrasa}
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td className="align-text-right">
                    % <strong>Valor Diario*</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Grasas Totales</strong>{" "}
                    {productoActual[0].infoNutricional.grasaTotal}
                  </td>
                  <td className="align-text-right">
                    {productoActual[0].infoNutricional.grasaTotalValorDiario}
                  </td>
                </tr>
                <tr>
                  <td>
                    Grasas Saturadas{" "}
                    {productoActual[0].infoNutricional.grasasSaturadas}
                  </td>
                  <td className="align-text-right">
                    {
                      productoActual[0].infoNutricional
                        .grasasSaturadasValorDiario
                    }
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Colesterol</strong>{" "}
                    {productoActual[0].infoNutricional.colesterol}
                  </td>
                  <td className="align-text-right">
                    {productoActual[0].infoNutricional.colesterolValorDiario}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Sodio</strong>{" "}
                    {productoActual[0].infoNutricional.sodio}
                  </td>
                  <td className="align-text-right">
                    {productoActual[0].infoNutricional.sodioValorDiario}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Carbohidratos Totales</strong>{" "}
                    {productoActual[0].infoNutricional.carbohidratosTotales}
                  </td>
                  <td className="align-text-right">
                    {
                      productoActual[0].infoNutricional
                        .carbohidratosTotalesValorDiario
                    }
                  </td>
                </tr>
                <tr>
                  <td>
                    Fibra Dietaria{" "}
                    {productoActual[0].infoNutricional.fibraDietaria}
                  </td>
                  <td className="align-text-right">
                    {productoActual[0].infoNutricional.fibraDietariaValorDiario}
                  </td>
                </tr>
                <tr>
                  <td>Azucares {productoActual[0].infoNutricional.azucares}</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <strong>Proteinas</strong>{" "}
                    {productoActual[0].infoNutricional.proteinas}
                  </td>
                  <td></td>
                </tr>
              </table>
              <div className="separator"></div>
            </div>

            <div className="informacion-producto">
              <div className="informacion-producto-sesion1">
                <h2>Informacion del Producto</h2>
                <hr />
                <li>Beneficio: Bienestar</li>
                <li>Ancho: 2,5cm</li>
                <li>Largo: 3,2cm</li>
                <li>Alto: 21cm</li>
                <li>Peso Neto: 90g</li>
                <li>Peso Bruto: 152g</li>
              </div>
              <div className="informacion-producto-sesion2">
                <li>
                  <strong>Contiene:</strong>
                </li>
                <li>
                  1 barra de {productoActual[0].infoNutricional.cantidadPorcion}{" "}
                  sin agregados.
                </li>
              </div>
            </div>
          </div>
        </div>
      )}
    </Contenedor>
  );
};

export default DetalleProducto;
