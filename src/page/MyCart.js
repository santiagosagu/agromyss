import React, { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "@emotion/styled";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { CarritoContext } from "../context/carritoContext/CarritoContext";
import { Card } from "@mui/material";
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
      height: 40rem;
      overflow-y: scroll;
      width: 100%;

      .card-page {
        width: 100%;
        margin-top: 2rem;
        margin-bottom: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e0e0e0;

        .product {
          display: flex;
          align-items: center;
          width: 50%;
        }

        .content-img {
          @media (min-width: 1000px) {
            width: 200px;
          }

          img {
            margin-top: 3rem;
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

  // if (carritoUsuario.length === 0) {
  //   return <h2>Aun no tienes productos en el carrito</h2>;
  // }

  return (
    <Contenedor>
      <Header />
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
                  <h4>{item.producto.nombreProducto}</h4>
                </div>
              </div>
              <div>
                <h3>$ {item.producto.precioSumado}</h3>
              </div>
              <div>
                <button
                  className="bg-slate-700 text-white px-4 py-2 rounded-full"
                  onClick={() => aumentarCantidad(item.id)}
                >
                  <ArrowCircleUpIcon />
                </button>
                <h4 className="text-center mt-3">{item.producto.cantidad}</h4>
                <button
                  className="bg-red-700 text-white px-4 py-2 rounded-full"
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
      <div className="flex justify-end mr-28 h-20">
        <div className="w-56 bg-slate-700 pt-7 px-3 text-white">
          <p>TOTAL PAGAR: $ {totalPagar}</p>
        </div>
      </div>
      <Footer />
    </Contenedor>
  );
};
