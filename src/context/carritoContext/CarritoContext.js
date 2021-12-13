import React, { useContext } from "react";
import Swal from "sweetalert2";
import { db } from "../../FirebaseConfig";
import authContext from "../auth/authContext";

export const CarritoContext = React.createContext();

const CarritoState = (props) => {
  const [datosCarrito, setDatosCarrito] = React.useState([]);
  const [carritoUsuario, setcarritoUsuario] = React.useState([]);

  const { autenticado } = useContext(authContext);

  React.useEffect(() => {
    const guardarDatos = async () => {
      await db.collection("carrito").onSnapshot((doc) => {
        const result = doc.docs.map((item) => {
          return {
            id: item.id,
            ...item.data(),
          };
        });

        setDatosCarrito(result);
      });
    };

    guardarDatos();
  }, [autenticado]);

  React.useEffect(() => {
    const carrito = datosCarrito.filter(
      (item) => item.usuarioPedido === autenticado?.uid
    );

    setcarritoUsuario(carrito);
  }, [datosCarrito, autenticado]);

  const agregarCarrito = (product) => {
    if (autenticado) {
      const pedido = { producto: product, usuarioPedido: autenticado?.uid };

      db.collection("carrito").add(pedido);

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Producto agregado al carrito!",
      });
    }
  };

  const eliminarProductoCarrito = async (id) => {
    const eliminar = await db.collection("carrito").doc(id);

    return eliminar.delete();
  };

  return (
    <CarritoContext.Provider
      value={{
        agregarCarrito,
        carritoUsuario,
        eliminarProductoCarrito,
      }}
    >
      {props.children}
    </CarritoContext.Provider>
  );
};

export default CarritoState;
