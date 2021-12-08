import React from "react";

export const CarritoContext = React.createContext();

const CarritoState = (props) => {
  const [carritoArray, setCarritoArray] = React.useState([]);

  const eliminarProductoCarrito = (id) => {
    const result = carritoArray.filter((item) => item.id !== id);

    setCarritoArray(result);
  };

  return (
    <CarritoContext.Provider
      value={{
        carritoArray,
        setCarritoArray,
        eliminarProductoCarrito,
      }}
    >
      {props.children}
    </CarritoContext.Provider>
  );
};

export default CarritoState;
