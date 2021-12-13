import React, { useContext, useEffect, useState } from "react";
import idiomaContext from "../../context/idioma/idiomaContext";
import Styled from "@emotion/styled";
import Header from "../Header";
import { CarritoContext } from "../../context/carritoContext/CarritoContext";
import { useEnlacesContext } from "../../context/enlaces/UseEnlaces";

const Contenedor = Styled.div`

    .producto{
        margin: 1rem;

        h2{
            text-align: center;
            text-transform: uppercase;
        }

        @media(min-width: 768px){
            margin-top: 8%;
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
                    }
                }
                
            }
        }
    }
`;

const productos = [
  {
    id: 1,
    nombre: "chocolatinas",
    url: "chocolatinas",
    productos: [
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
        descripcion:
          "Barra de chocolate sin agregados al 100 % de cacao por 90 g.",
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
        img: [
          "https://www.evok.com.co/wp-content/uploads/2019/10/Fondoblanco.png",
        ],
        url: "chocolatina3",
      },
    ],
  },
  {
    id: 2,
    nombre: "bombones",
    url: "bombones",
    productos: [
      {
        id: 1,
        nombre: "bombones1",
        precio: 20000,
        url: "bombones1",
      },
      {
        id: 2,
        nombre: "bombones2",
        precio: 30000,
        url: "bombones2",
      },
      {
        id: 3,
        nombre: "bombones3",
        precio: 40000,
        url: "bombones3",
      },
    ],
  },
  {
    id: 3,
    nombre: "snacks",
    url: "snacks",
    productos: [
      {
        id: 1,
        nombre: "snacks1",
        precio: 20000,
        url: "snacks1",
      },
      {
        id: 2,
        nombre: "snacks2",
        precio: 30000,
        url: "snacks2",
      },
      {
        id: 3,
        nombre: "snacks3",
        precio: 40000,
        url: "snacks3",
      },
    ],
  },
];

const productosIngles = [
  {
    id: 1,
    nombre: "chocolatinasIngles",
    url: "chocolatinas",
    productos: [
      {
        id: 1,
        nombre: "chocolatina1",
        precio: 20000,
        img: "https://w7.pngwing.com/pngs/465/541/png-transparent-chocolate-bar-hot-chocolate-white-chocolate-cream-three-kinds-of-delicious-chocolate-food-wafer-three-dimensional-thumbnail.png",
      },
      {
        id: 2,
        nombre: "chocolatina2",
        precio: 30000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2iokHfTo4L9wdI0aTYI6RMOG3WvrHT6ZFIA&usqp=CAU",
      },
      {
        id: 3,
        nombre: "chocolatina3",
        precio: 40000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzotNu__X-rglTpW5lM2LwYPloONdHpqwPzQ&usqp=CAU",
      },
      {
        id: 4,
        nombre: "chocolatina3",
        precio: 40000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-e987T4ZT8L4I7ClnwKVbz2KOcM0rd-DaVA&usqp=CAU",
      },
      {
        id: 5,
        nombre: "chocolatina3",
        precio: 40000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3VTgbEa6DMeWNbK18rBRsSSBV7EFEvhW7JQ&usqp=CAU",
      },
      {
        id: 6,
        nombre: "chocolatina3",
        precio: 40000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhYFLJVUAsSVEwUwHDrYKl6r3LCTaB_xYRA&usqp=CAU",
      },
    ],
  },
  {
    id: 2,
    nombre: "bombones",
    url: "bombones",
    productos: [
      { id: 1, nombre: "bombones1", precio: 20000 },
      { id: 2, nombre: "bombones2", precio: 30000 },
      { id: 3, nombre: "bombones3", precio: 40000 },
    ],
  },
  {
    id: 3,
    nombre: "snacks",
    url: "snacks",
    productos: [
      { id: 1, nombre: "snacks1", precio: 20000 },
      { id: 2, nombre: "snacks2", precio: 30000 },
      { id: 3, nombre: "snacks3", precio: 40000 },
    ],
  },
];

const Productos = ({ match, history }) => {
  const params = match.params.producto;

  const [producto, setProducto] = useState([]);

  /* hooks para el idioma */
  const { idioma } = useContext(idiomaContext);

  const { agregarCarrito } = useContext(CarritoContext);

  const { ocultarEnlaces } = useContext(useEnlacesContext);

  useEffect(() => {
    if (idioma === "español") {
      const resultado = productos.filter((item) => item.url === params);

      setProducto(resultado);
    } else {
      const resultado = productosIngles.filter((item) => item.url === params);

      setProducto(resultado);
    }
  }, [idioma, params]);

  const verProducto = (categoria, producto) => {
    history.push(`/productos-servicios/productos/${categoria}/${producto}`);
  };

  return (
    <>
      <Header />
      <Contenedor onMouseOver={ocultarEnlaces}>
        {idioma === "español" && (
          <>
            {producto.map((item) => (
              <div key={item.id} className="producto">
                <h2>{item.nombre}</h2>
                <div className="producto-card">
                  {item.productos.map((product) => (
                    <div className="producto-card-content">
                      <img
                        src={product.img[0]}
                        alt=""
                        onClick={() => verProducto(item.url, product.url)}
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
            ))}
          </>
        )}

        {idioma === "ingles" && (
          <>
            {producto.map((item) => (
              <div key={item.id} className="producto">
                <h2>{item.nombre}</h2>
                <div className="producto-card">
                  {item.productos.map((product) => (
                    <div className="producto-card-content">
                      <img src={product.img} alt="" />
                      <p>{product.nombre}</p>
                      <h4>$ {product.precio}</h4>
                      <button className="btn btn-primary my-2">
                        Añadir al carrito
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        )}
      </Contenedor>
    </>
  );
};

export default Productos;
