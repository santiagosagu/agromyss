import React, { useContext } from "react";
import idiomaContext from "../../context/idioma/idiomaContext";
import Styled from "@emotion/styled";
import Header from "../../components/Header";
import { CarritoContext } from "../../context/carritoContext/CarritoContext";
import { useEnlacesContext } from "../../context/enlaces/UseEnlaces";
import { animateScroll as scroll } from "react-scroll";
import Footer from "../../components/Footer";

const Contenedor = Styled.div`

    .producto{
        margin: 1rem;

        h2{
            text-align: center;
            text-transform: uppercase;
        }

        @media(min-width: 768px){
            margin-top: 12%;
        }

        .producto-card{
            margin: 1rem;
            
            @media(min-width: 768px){
                display: grid;
                grid-template-columns: 50% 50%;
                grid-gap: 1rem;
                padding: 1rem 4rem;

            }

            @media(min-width: 1200px){
                width: 70rem;
                display: grid;
                grid-template-columns: 33.3% 33.3% 33.3%;
                grid-gap: 1rem;
                margin: 4rem auto;
            }
            

            .producto-card-content{
                text-align: center;
                margin-bottom: 2rem;
                border-bottom: 1px solid #e1e1e1;

                

                @media(min-width: 768px){
                    border: none
                }

                img{
                    width: 100%;

                    @media(min-width: 768px){
                        height: 10rem;
                    }

                    @media(min-width: 1200px){
                        height: 20rem;
                    }
                    
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
`;

const productos = [
  {
    id: 1,
    nombre: "Barra de chocolate amargo - sin agregados",
    precio: 20000,
    img: [
      "https://www.evok.com.co/wp-content/uploads/2019/10/BarrasAmargo4.png",
      "https://www.evok.com.co/wp-content/uploads/2019/10/BarrasAmargo-7715.png",
      "https://www.evok.com.co/wp-content/uploads/2019/10/Fondoblanco3-7717.png",
    ],
    url: "chocolatina1",
  },
  {
    id: 2,
    nombre: "Barra de chocolate amargo - sin agregados",
    descripcion: "Barra de chocolate sin agregados al 100 % de cacao por 90 g.",
    precio: 30000,
    img: [
      "https://www.evok.com.co/wp-content/uploads/2019/10/BarrasAmargo2-7715.png",
      "https://www.evok.com.co/wp-content/uploads/2019/10/BarrasAmargo2-7715.png",
      "https://www.evok.com.co/wp-content/uploads/2019/10/Fondoblanco3-7717.png",
    ],
    url: "chocolatina2",
  },
  {
    id: 3,
    nombre:
      "Barra de chocolate - frambuesa - manzanilla - manzana - cacao nibs",
    precio: 40000,
    img: ["https://www.evok.com.co/wp-content/uploads/2019/10/Fondoblanco.png"],
    url: "chocolatina3",
  },

  // {
  //   id: 2,
  //   nombre: "bombones",
  //   url: "bombones",
  //   productos: [
  //     {
  //       id: 1,
  //       nombre: "bombones1",
  //       precio: 20000,
  //       url: "bombones1",
  //     },
  //     {
  //       id: 2,
  //       nombre: "bombones2",
  //       precio: 30000,
  //       url: "bombones2",
  //     },
  //     {
  //       id: 3,
  //       nombre: "bombones3",
  //       precio: 40000,
  //       url: "bombones3",
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   nombre: "snacks",
  //   url: "snacks",
  //   productos: [
  //     {
  //       id: 1,
  //       nombre: "snacks1",
  //       precio: 20000,
  //       url: "snacks1",
  //     },
  //     {
  //       id: 2,
  //       nombre: "snacks2",
  //       precio: 30000,
  //       url: "snacks2",
  //     },
  //     {
  //       id: 3,
  //       nombre: "snacks3",
  //       precio: 40000,
  //       url: "snacks3",
  //     },
  //   ],
  // },
];

const productosIngles = [
  {
    id: 1,
    nombre: "Barra de chocolate amargo - sin agregados",
    precio: 20000,
    img: [
      "https://www.evok.com.co/wp-content/uploads/2019/10/BarrasAmargo4.png",
      "https://www.evok.com.co/wp-content/uploads/2019/10/BarrasAmargo-7715.png",
      "https://www.evok.com.co/wp-content/uploads/2019/10/Fondoblanco3-7717.png",
    ],
    url: "chocolatina1",
  },
  {
    id: 2,
    nombre: "Barra de chocolate amargo - sin agregados",
    descripcion: "Barra de chocolate sin agregados al 100 % de cacao por 90 g.",
    precio: 30000,
    img: [
      "https://www.evok.com.co/wp-content/uploads/2019/10/BarrasAmargo2-7715.png",
      "https://www.evok.com.co/wp-content/uploads/2019/10/BarrasAmargo2-7715.png",
      "https://www.evok.com.co/wp-content/uploads/2019/10/Fondoblanco3-7717.png",
    ],
    url: "chocolatina2",
  },
  {
    id: 3,
    nombre:
      "Barra de chocolate - frambuesa - manzanilla - manzana - cacao nibs",
    precio: 40000,
    img: ["https://www.evok.com.co/wp-content/uploads/2019/10/Fondoblanco.png"],
    url: "chocolatina3",
  },

  // {
  //   id: 2,
  //   nombre: "bombones",
  //   url: "bombones",
  //   productos: [
  //     { id: 1, nombre: "bombones1", precio: 20000 },
  //     { id: 2, nombre: "bombones2", precio: 30000 },
  //     { id: 3, nombre: "bombones3", precio: 40000 },
  //   ],
  // },
  // {
  //   id: 3,
  //   nombre: "snacks",
  //   url: "snacks",
  //   productos: [
  //     { id: 1, nombre: "snacks1", precio: 20000 },
  //     { id: 2, nombre: "snacks2", precio: 30000 },
  //     { id: 3, nombre: "snacks3", precio: 40000 },
  //   ],
  // },
];

const ProductosSnacks = ({ match, history }) => {
  /* hooks para el idioma */
  const { idioma } = useContext(idiomaContext);

  const { agregarCarrito } = useContext(CarritoContext);

  const { ocultarEnlaces } = useContext(useEnlacesContext);

  scroll.scrollTo();

  const verProducto = (categoria, producto) => {
    history.push(`/productos-servicios/productos/${categoria}/${producto}`);
  };

  return (
    <>
      <Header />
      <Contenedor onMouseOver={ocultarEnlaces}>
        {idioma === "español" && (
          <>
            <div className="producto">
              <h2>Snacks</h2>
              <div className="producto-card">
                {productos.map((product) => (
                  <div className="producto-card-content">
                    <img
                      src={product.img[0]}
                      alt=""
                      onClick={() => verProducto("snacks", product.url)}
                    />
                    <h5>{product.nombre}</h5>
                    <p>$ {product.precio}</p>
                    <p
                      className="carrito"
                      onClick={() => agregarCarrito(product)}
                    >
                      Añadir al Carrito
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {idioma === "ingles" && (
          <>
            <div className="producto">
              <h2>Snacks</h2>
              <div className="producto-card">
                {productosIngles.map((product) => (
                  <div className="producto-card-content">
                    <img
                      src={product.img[0]}
                      alt=""
                      onClick={() => verProducto("snacks", product.url)}
                    />
                    <h5>{product.nombre}</h5>
                    <p>$ {product.precio}</p>
                    <p
                      className="carrito"
                      onClick={() => agregarCarrito(product)}
                    >
                      Añadir al Carrito
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        <Footer />
      </Contenedor>
    </>
  );
};

export default ProductosSnacks;
