import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "@emotion/styled";
import { CarritoContext } from "../../context/carritoContext/CarritoContext";
import CloseIcon from "@mui/icons-material/Close";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: window.innerWidth > 1000 ? "50%" : "100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: "80%",
  overflowY: "scroll",
  padding: "0",
};

const Card = styled.div`
  display: grid;
  grid-template-columns: 40% 40% 20%;
  border-bottom: 1px solid #000;
  padding: 0;

  @media (min-width: 1000px) {
    grid-template-columns: 23% 43% 33%;
  }

  .content-img {
    width: 200px;
    @media (min-width: 1000px) {
      width: 200px;
    }

    img {
      margin-top: 3rem;
      width: 100%;
    }
  }

  .content-description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;
    padding: 1rem;

    h3 {
      margin-top: 1rem;
    }
  }

  .content-close {
    margin-top: 2rem;
  }
`;

export default function CarritoModal({ open, handleClose }) {
  const { eliminarProductoCarrito, carritoUsuario } =
    useContext(CarritoContext);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ textAlign: "center" }}
          >
            Carrito de Compras
          </Typography>
          <div id="modal-modal-description" sx={{ mt: 2 }}>
            {carritoUsuario?.map((item) => (
              <Card>
                <div className="content-img">
                  <img
                    src={item.producto?.imagenes[0]}
                    alt="producto-carrito"
                  />
                </div>
                <div className="content-description">
                  <h4>{item.producto.nombreProducto}</h4>
                  <h3>$ {item.producto.precio}</h3>
                </div>
                <div className="content-close">
                  <CloseIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => eliminarProductoCarrito(item.id)}
                  />
                </div>
              </Card>
            ))}
          </div>

          {carritoUsuario?.length === 0 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "80%",
              }}
            >
              <h2
                style={{
                  textAlign: "center",
                  marginTop: "2rem",
                  color: "rgba(0, 0, 0, 0.26)",
                }}
              >
                Aun no has agregado productos
              </h2>
              <div>
                <RemoveShoppingCartIcon
                  color="disabled"
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "8rem",
                  }}
                />
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}
