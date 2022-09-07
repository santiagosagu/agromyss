import React, { useContext, useEffect, useState } from "react";
import idiomaContext from "../../context/idioma/idiomaContext";
import Styled from "@emotion/styled";
import { CarritoContext } from "../../context/carritoContext/CarritoContext";
import { useEnlacesContext } from "../../context/enlaces/UseEnlaces";
import { animateScroll as scroll } from "react-scroll";
import { db } from "../../FirebaseConfig";

const Contenedor = Styled.div`


    p{
                    font-size: 1.2rem;
                    border: 1px solid rgb(13, 130, 121);
                    // display: inline-block;
                    padding: 0.5rem 1rem;
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
`;

// const productos = [
//   {
//     id: 1,
//     nombre: "Barra de chocolate amargo - sin agregados",
//     precio: 20000,
//     img: [
//       "https://www.evok.com.co/wp-content/uploads/2019/10/BarrasAmargo4.png",
//       "https://www.evok.com.co/wp-content/uploads/2019/10/BarrasAmargo-7715.png",
//       "https://www.evok.com.co/wp-content/uploads/2019/10/Fondoblanco3-7717.png",
//     ],
//     url: "chocolatina1",
//   },
//   {
//     id: 2,
//     nombre: "Barra de chocolate amargo - sin agregados",
//     descripcion: "Barra de chocolate sin agregados al 100 % de cacao por 90 g.",
//     precio: 30000,
//     img: [
//       "https://www.evok.com.co/wp-content/uploads/2019/10/BarrasAmargo2-7715.png",
//       "https://www.evok.com.co/wp-content/uploads/2019/10/BarrasAmargo2-7715.png",
//       "https://www.evok.com.co/wp-content/uploads/2019/10/Fondoblanco3-7717.png",
//     ],
//     url: "chocolatina2",
//   },
//   {
//     id: 3,
//     nombre:
//       "Barra de chocolate - frambuesa - manzanilla - manzana - cacao nibs",
//     precio: 40000,
//     img: ["https://www.evok.com.co/wp-content/uploads/2019/10/Fondoblanco.png"],
//     url: "chocolatina3",
//   },

//   // {
//   //   id: 2,
//   //   nombre: "bombones",
//   //   url: "bombones",
//   //   productos: [
//   //     {
//   //       id: 1,
//   //       nombre: "bombones1",
//   //       precio: 20000,
//   //       url: "bombones1",
//   //     },
//   //     {
//   //       id: 2,
//   //       nombre: "bombones2",
//   //       precio: 30000,
//   //       url: "bombones2",
//   //     },
//   //     {
//   //       id: 3,
//   //       nombre: "bombones3",
//   //       precio: 40000,
//   //       url: "bombones3",
//   //     },
//   //   ],
//   // },
//   // {
//   //   id: 3,
//   //   nombre: "snacks",
//   //   url: "snacks",
//   //   productos: [
//   //     {
//   //       id: 1,
//   //       nombre: "snacks1",
//   //       precio: 20000,
//   //       url: "snacks1",
//   //     },
//   //     {
//   //       id: 2,
//   //       nombre: "snacks2",
//   //       precio: 30000,
//   //       url: "snacks2",
//   //     },
//   //     {
//   //       id: 3,
//   //       nombre: "snacks3",
//   //       precio: 40000,
//   //       url: "snacks3",
//   //     },
//   //   ],
//   // },
// ];

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

const ProductosChocolatinas = ({ match, history }) => {
  const [chocolatinas, setChocolatinas] = useState([]);

  const [todosProductosDB, setTodosProductosDB] = useState([]);

  /* hooks para el idioma */
  const { idioma } = useContext(idiomaContext);

  const { agregarCarrito } = useContext(CarritoContext);

  const { ocultarEnlaces } = useContext(useEnlacesContext);

  scroll.scrollTo();

  const verProducto = (categoria, producto) => {
    history.push(`/productos-servicios/productos/${categoria}/${producto}`);
  };

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
        (item) => item.categoria === "chocolatinas"
      );

      setChocolatinas(resultado);
    }
  }, [todosProductosDB]);

  return (
    <>
      <Contenedor onMouseOver={ocultarEnlaces}>
        {idioma === "español" && (
          <>
            <div className=" flex flex-col justify-center items-center">
              <h2 className="text-[2.5rem] lg:mt-44 text-center">
                Chocolatinas
              </h2>
              <div className="flex flex-wrap w-4/5 justify-center gap-9 mt-9">
                {chocolatinas.map((product) => (
                  <div className="w-[400px] h-[600px] p-1 mb-8 flex flex-col justify-between">
                    <div className="w-[400px] h-[400px]">
                      <img
                        src={product.imagenes[0]}
                        alt=""
                        onClick={() => verProducto("chocolatinas", product.url)}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h5 className="text-xl text-center font-bold">
                      {product.nombreProducto}
                    </h5>
                    <div className="flex justify-center mt-4 items-end">
                      <p>$ {product.precio}</p>
                      <p
                        className="carrito"
                        onClick={() => agregarCarrito(product)}
                      >
                        Añadir al Carrito
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {idioma === "ingles" && (
          <>
            <div className="producto">
              <h2 className="text-[2.5rem]">Chocolate Bars</h2>
              <div className="producto-card">
                {productosIngles.map((product) => (
                  <div className="producto-card-content">
                    <img
                      src={product.img[0]}
                      alt=""
                      onClick={() => verProducto("chocolatinas", product.url)}
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
      </Contenedor>
    </>
  );
};

export default ProductosChocolatinas;
