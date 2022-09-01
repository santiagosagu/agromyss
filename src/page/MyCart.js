import React, { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { CarritoContext } from "../context/carritoContext/CarritoContext";
// import { Card } from "@mui/material";
import { useEnlacesContext } from "../context/enlaces/UseEnlaces";

const Contenedor = styled.div`
  .container {
    margin-top: 8rem;
    margin-bottom: 2rem;
    width: 100%;
    /* margin-left: 0; */
    /* margin-right: 0; */

    h1 {
      text-align: center;
    }

    .content-cart {
      height: 25rem;
      overflow-y: scroll;
      width: 100%;

      @media (min-width: 1000px) {
        height: 40rem;
      }

      .card-page {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 2rem;
        margin-bottom: 2rem;
        align-items: center;
        border-bottom: 1px solid #e0e0e0;
        padding-bottom: 1rem;

        .product {
          display: flex;
          align-items: center;
          width: 50%;

          .content-description {
            display: none;

            @media (min-width: 1000px) {
              display: flex;
            }
          }
        }
        .precio {
          width: 10rem;
        }

        .editar-cantidad {
          width: 10rem;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .content-img {
          @media (min-width: 1000px) {
            width: 200px;
          }

          img {
            width: 100%;
          }
        }
      }
    }
  }
`;

export const MyCart = () => {
  const {
    carritoUsuario,
    totalPagar,
    eliminarProductoCarrito,
    aumentarCantidad,
    disminuirCantidad,
  } = useContext(CarritoContext);

  const { ocultarEnlaces } = useContext(useEnlacesContext);

  if (carritoUsuario.length === 0) {
    return (
      <Contenedor>
        <div className="md:mt-36 text-center flex flex-col justify-center">
          <h2>Aun no tienes productos en el carrito</h2>
          <div className="mx-auto">
            <img
              src="https://www.breathearomatherapy.com/assets/images/global/no-product.png"
              alt="imagen-no-items"
            />
          </div>
        </div>
      </Contenedor>
    );
  }

  return (
    <Contenedor>
      <div className="container" onMouseOver={ocultarEnlaces}>
        <h1>Mi Compra</h1>

        <div className="content-cart">
          {carritoUsuario?.map((item) => (
            <div className="card-page">
              <div className="product">
                <div className="content-img">
                  <img
                    src={item.producto?.imagenes[0]}
                    alt="producto-carrito"
                    style={{ width: "100%", flex: 1 }}
                  />
                </div>
                <div className="content-description">
                  <h3>{item.producto.nombreProducto}</h3>
                </div>
              </div>
              <div className="precio">
                <h3>$ {item.producto.precioSumado}</h3>
              </div>
              <div className="editar-cantidad">
                <button
                  className="bg-slate-700 text-white w-16 md:px-4 py-2 rounded-full"
                  onClick={() => aumentarCantidad(item.id)}
                >
                  <ArrowCircleUpIcon />
                </button>
                <h4 className="text-center mt-3">{item.producto.cantidad}</h4>
                <button
                  className="bg-red-700 text-white w-16 md:px-4 py-2 rounded-full"
                  onClick={() => disminuirCantidad(item.id)}
                >
                  <ArrowCircleDownIcon />
                </button>
              </div>
              <div className="content-close">
                <CloseIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => eliminarProductoCarrito(item.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center md:justify-end md:mr-28 h-auto mb-8">
        <div className="w-56 bg-slate-700 pt-7 px-3 text-white my-7 ">
          <p>TOTAL PRODUCTOS: {carritoUsuario.length}</p>
          <p>TOTAL PAGAR: $ {totalPagar}</p>
        </div>
      </div>
    </Contenedor>
  );
};
