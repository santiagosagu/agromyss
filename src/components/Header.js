import React, { useContext } from "react";
import Styled from "@emotion/styled";
import idiomaContext from "../context/idioma/idiomaContext";
import authContext from "../context/auth/authContext";
import { useEnlacesContext } from "../context/enlaces/UseEnlaces";
import { Link } from "react-router-dom";
import Registro from "./Registro";
import CarritoIcon from "../components/carrito/CarritoIcon";
import Button from "@mui/material/Button";
import CarritoModal from "./carrito/CarritoModal";

const Contenedor = Styled.div`
        width: 100%;
        /* background-color: rgb(119,29,18); */
        background-color: #8b9022;
        color: #fff;
        position: relative;

        @media(min-width: 1200px){
          position: fixed;
          top: 0;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.4rem;
        }

        .logo {
          display: flex;
          justify-content: center;
        }

        .auth-escritorio{
            display: none;

            @media(min-width: 1200px){
                width: 100%;
                background-color: #8b9022;
                color: #fff;
                padding-bottom: 1rem;
                display: flex;
                justify-content: flex-end;

                li{
                    list-style: none;
                    margin-right: 1rem;
                    list-style: none;
                    cursor: pointer;
                    z-index: 40;
                    padding-top: 0.5rem;

                    a{
                        text-decoration:none;
                        color: #fff;
                        
                    }
                }
            }
            
        }

        .auth{
            display: flex;
            justify-content: center;
            
            li{
                border-bottom: none!important;
            }

            @media(min-width: 1200px){
                display: none;
            }
        }
        
        .contenedor-enlaces{
            width: 100%;
            background-color: #8b9022;

            @media(min-width: 1200px){
                display: flex;
            }

            i{
                position: absolute;
                top: 2%;
                right: 1%;
                font-size: 2rem;

                @media(min-width: 1200px){
                    display: none;
                }
            }

            .enlaces{
                z-index: 20;
                margin: 0.5rem;


                @media(min-width: 1200px){
                    display: flex;
                }
                
                li{
                    list-style: none;
                    margin: 0.5rem;
                    cursor: pointer;
                    border-bottom: 1px solid #e1e1e1;
                    z-index: 40;
                    
                    @media(min-width: 1200px){
                        margin: 0 1rem;
                        border-bottom: none;
                    }

                    a{
                        text-decoration:none;
                        color: #fff;
                        
                    }

                }
            }

            .productos-servicios{

                display: relative;
                position: relative;

                i{
                    font-size: 1rem;
                    right: 1rem;

                }

                ul{ 
                    width: 90%;
                    height: auto;
                    padding: 0.5rem 0;
                    background-color: #343A1A;

                    @media(min-width: 1200px){
                        
                        width: 9rem;  
                        /* margin: 1rem ; */
                        display: flex;
                        flex-direction: column;
                        position: fixed;
                        
                    }
                    

                li{
                    border-bottom: 1px solid #e1e1e1;
                    margin-bottom: 1rem; 

                }
            }

            .enlaces-largos{
                @media(min-width: 1200px){
                    position: absolute;
                    width: 400px;
                }
            }

            .industria{
                margin-left: 2rem;

                @media(min-width: 1200px){
                    position: absolute; 
                    top: 2rem;
                    left: 66%;
                    width: 100%;
                    

                    li{
                        margin: 0.5rem 1rem 0 0.5rem;
                        
                    }
                }

                
                
            }

            .chocolates{
                margin-left: 2rem;

                @media(min-width: 1200px){
                    position: absolute; 
                    margin-top: 0;
                    left: 68%;
                    width: 90%;
                }
            }
        }

    

        .idioma{
            display: flex;
            justify-content: center;
            align-items: center;
            
            p{
                margin-right: 0.5rem;
                cursor: pointer;
            }
        }
    }
        
`;

const Header = () => {
  /* context para el idioma */
  const { idioma, setIdioma } = useContext(idiomaContext);

  const { miPerfil, autenticado, cerrarSesion, setMiPerfil, isAdmin } =
    useContext(authContext);

  /* hooks */
  const {
    verProductosServicios,
    verIndustria,
    verServicios,
    verChocolates,
    verCacao,
    verMango,
    verEnlaces,
    verSustentabilidad,
    verSobreAgromyss,
    mostrarProductos,
    mostrarIndustria,
    mostrarServicios,
    mostrarChocolates,
    mostrarCacao,
    mostrarMango,
    mostrarenlaces,
    mostrarSustentabilidad,
    mostrarSobreAgromyss,
    mostrarAndOcultarProductos,
    mostrarAndOcultarSustentabilidad,
    mostrarAndOcultarSobreAgromyss,
  } = useContext(useEnlacesContext);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Contenedor>
      {idioma === "espa??ol" && (
        <>
          <div className="logo">
            <Link to="/">
              <img
                src="/images/logoAgromyss.png"
                alt="logo"
                style={{ width: "10rem" }}
              />
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="contenedor-enlaces">
              <i className="fas fa-bars" onClick={() => mostrarenlaces()}></i>
              {verEnlaces && (
                <>
                  <div className="enlaces">
                    <li>
                      <Link to="/corporativo">
                        Filosofia, Principios y Valores
                      </Link>{" "}
                    </li>
                    <div className="productos-servicios">
                      <li onMouseOver={mostrarProductos}>
                        <Link to="/productos-servicios">
                          Productos y Servicios
                        </Link>
                      </li>
                      <i
                        className="fas fa-angle-down"
                        onClick={mostrarAndOcultarProductos}
                      ></i>

                      {verProductosServicios && (
                        <ul>
                          <li onMouseOver={() => mostrarIndustria()}>
                            productos{" "}
                          </li>
                          {verIndustria && (
                            <div className="industria">
                              <ul>
                                <li onMouseOver={() => mostrarChocolates()}>
                                  Chocolates{" "}
                                </li>
                                <div className="chocolates">
                                  {verChocolates && (
                                    <ul>
                                      <li>
                                        <Link to="/productos-servicios/productos/chocolatinas">
                                          {" "}
                                          Chocolatinas{" "}
                                        </Link>
                                      </li>

                                      <li>
                                        <Link to="/productos-servicios/productos/bombones">
                                          {" "}
                                          Bombones{" "}
                                        </Link>
                                      </li>

                                      <li>
                                        <Link to="/productos-servicios/productos/snacks">
                                          {" "}
                                          SNACKS{" "}
                                        </Link>
                                      </li>

                                      <li>
                                        <Link to="/productos-servicios/productos/chocolate-de-mesa">
                                          {" "}
                                          Chocolate de mesa{" "}
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/productos-servicios/productos/nibs">
                                          {" "}
                                          NIBS{" "}
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/productos-servicios/productos/manteca-de-cacao">
                                          {" "}
                                          Manteca de cacao{" "}
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/productos-servicios/productos/licor-de-cacao">
                                          {" "}
                                          Licor de cacao{" "}
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/productos-servicios/productos/cocoa">
                                          {" "}
                                          Cocoa{" "}
                                        </Link>
                                      </li>
                                    </ul>
                                  )}
                                </div>

                                <li onMouseOver={() => mostrarCacao()}>
                                  Cacao
                                </li>
                                <div className="chocolates">
                                  {verCacao && (
                                    <ul>
                                      <li>
                                        <Link> Granos- clones </Link>
                                      </li>
                                      <li>
                                        <Link> Semilla </Link>
                                      </li>
                                      <li>
                                        <Link> Vareta </Link>
                                      </li>
                                      <li>
                                        <Link> Plantulas </Link>
                                      </li>
                                      <li>
                                        <Link> Plantulas clonadas </Link>
                                      </li>
                                      <li>
                                        <Link> Yemas </Link>
                                      </li>
                                    </ul>
                                  )}
                                </div>
                                <li onMouseOver={() => mostrarMango()}>
                                  Mangos
                                </li>
                                <div className="chocolates">
                                  {verMango && (
                                    <ul>
                                      <li>
                                        <Link> Semilla </Link>
                                      </li>
                                      <li>
                                        <Link> Planta </Link>
                                      </li>
                                      <li>
                                        <Link> Planta clonada </Link>
                                      </li>
                                      <li>
                                        <Link> Fruta fresca </Link>
                                      </li>
                                      <li>
                                        <Link> Fruta desidratada </Link>
                                      </li>
                                      <li>
                                        <Link> Fruta pulverizada </Link>
                                      </li>
                                      <li>
                                        <Link>
                                          {" "}
                                          Fruta empacada al vacio sin semilla{" "}
                                        </Link>
                                      </li>
                                    </ul>
                                  )}
                                </div>
                              </ul>
                            </div>
                          )}
                          <li onMouseOver={() => mostrarServicios()}>
                            Servicios
                          </li>
                          {verServicios && (
                            <div className="industria">
                              <ul>
                                <li>
                                  Planeacion y ejecucion de Proyectos
                                  Agroindustriales
                                </li>
                                <li>Agroecoturismo</li>
                              </ul>
                            </div>
                          )}
                        </ul>
                      )}
                    </div>
                    <div className="productos-servicios">
                      <li onMouseOver={mostrarSustentabilidad}>
                        <Link to="/sustentabilidad">Sustentabilidad</Link>
                        <i
                          className="fas fa-angle-down"
                          onClick={mostrarAndOcultarSustentabilidad}
                        ></i>
                      </li>
                      {verSustentabilidad && (
                        <>
                          <ul className="enlaces-largos">
                            <li>
                              <Link to="/sustentabilidad/trabajando-con-agricultores">
                                Trabajando con agricultores
                              </Link>
                            </li>
                            <li>
                              <Link to="/sustentabilidad/buscando-el-impacto-emprearial-con-produccion-sostenible">
                                Buscando el impacto empresarial con produccion
                                sostenible
                              </Link>
                            </li>
                            <li>
                              <Link to="/sustentabilidad/impulsando-la-mejora-agricola">
                                Impulsando la mejora agricola
                              </Link>
                            </li>
                            <li>
                              <Link to="/sustentabilidad/modelo-empresarial-inclusivo">
                                Modelo empresarial inclusivo
                              </Link>
                            </li>
                            <li>
                              <Link to="/sustentabilidad/trazabilidad">
                                Trazabilidad
                              </Link>
                            </li>
                            <li>
                              <Link to="/sustentabilidad/cadena-de-suministro-del-cacao">
                                Cadena de suministro de cacao
                              </Link>
                            </li>
                            <li>
                              <Link to="/sustentabilidad/sostenibilidad-del-cacao">
                                Sostenibilidad del cacao
                              </Link>
                            </li>
                          </ul>
                        </>
                      )}
                    </div>
                    <div className="productos-servicios">
                      <li onMouseOver={mostrarSobreAgromyss}>
                        <Link to="/sobre-agromyss">Sobre Agromyss</Link>
                        <i
                          className="fas fa-angle-down"
                          onClick={mostrarAndOcultarSobreAgromyss}
                        ></i>
                      </li>
                      {verSobreAgromyss && (
                        <>
                          <ul className="enlaces-largos">
                            <li>
                              <Link to="/sobre-agromyss/responsabilidad-social-y-ambiental">
                                Responsabilidad Social y Ambiental
                              </Link>
                            </li>
                            <li>
                              <Link to="/sobre-agromyss/codigo-de-conducta-del-proveedor">
                                C??digo de Conducta del Proveedor
                              </Link>
                            </li>
                            <li>
                              <Link to="/sobre-agromyss/declaracion-de-esclavitud-moderna">
                                Declaraci??n de Esclavitud Moderna
                              </Link>
                            </li>
                            <li>
                              <Link to="/sobre-agromyss/politica-ambiental-y-social">
                                Pol??tica Ambiental y Social
                              </Link>
                            </li>
                            <li>
                              <Link to="/sobre-agromyss/politica-de-inquietudes-eticas">
                                Pol??tica de Inquietudes ??ticas
                              </Link>
                            </li>
                          </ul>
                        </>
                      )}
                    </div>

                    <li>
                      <Link to="/contacto">Contactenos</Link>
                    </li>
                    {/* <li>
                      <Link to="/galeria">Galeria</Link>
                    </li> */}
                    {isAdmin && (
                      <li>
                        <Link to="/admin">Admin</Link>
                      </li>
                    )}

                    <div className="auth">
                      {autenticado ? (
                        <>
                          <CarritoIcon handleOpen={handleOpen} />
                          <li>
                            <p style={{ fontWeight: "400" }}>
                              Hola: {autenticado.displayName}
                            </p>
                          </li>
                          <Button
                            variant="contained"
                            color="error"
                            onClick={cerrarSesion}
                          >
                            Cerrar Sesion
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            variant="contained"
                            color="success"
                            onClick={() => setMiPerfil(true)}
                          >
                            Ingresar
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div>
            <div
              className="auth-escritorio"
              style={{ justifyContent: "flex-end" }}
            >
              {autenticado ? (
                <>
                  <CarritoIcon handleOpen={handleOpen} />
                  <CarritoModal open={open} handleClose={handleClose} />
                  <li style={{ fontWeight: "bold" }}>
                    HOLA: {autenticado.displayName}
                  </li>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={cerrarSesion}
                  >
                    Cerrar Sesion
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => setMiPerfil(true)}
                  >
                    Ingresar
                  </Button>
                </>
              )}
            </div>
            <div
              className="dropdown dropstart"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <button
                type="button"
                className="btn dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "#fff" }}
              >
                Idioma
              </button>
              <ul className="dropdown-menu">
                <p
                  className="dropdown-item"
                  onClick={() => setIdioma("ingles")}
                >
                  Ingles
                </p>
                <hr />
                <p
                  className="dropdown-item"
                  onClick={() => setIdioma("espa??ol")}
                >
                  {" "}
                  Espa??ol
                </p>
              </ul>
            </div>
          </div>
          {miPerfil && <Registro />}
        </>
      )}
      {idioma === "ingles" && (
        <>
          <div className="logo">
            <Link to="/">
              <img
                src="/images/logoAgromyss.png"
                alt="logo"
                style={{ width: "10rem" }}
              />
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="contenedor-enlaces">
              <i className="fas fa-bars" onClick={() => mostrarenlaces()}></i>
              {verEnlaces && (
                <>
                  <div className="enlaces">
                    <li>
                      <Link to="/corporativo">
                        Philosophy, Principles and Values
                      </Link>{" "}
                    </li>
                    <div className="productos-servicios">
                      <li onMouseOver={mostrarProductos}>
                        Products and Services
                      </li>
                      <i
                        className="fas fa-angle-down"
                        onClick={mostrarAndOcultarProductos}
                      ></i>

                      {verProductosServicios && (
                        <ul>
                          <li onMouseOver={() => mostrarIndustria()}>
                            Industry{" "}
                          </li>
                          {verIndustria && (
                            <div className="industria">
                              <ul>
                                <li onMouseOver={() => mostrarChocolates()}>
                                  Chocolate{" "}
                                </li>
                                <div className="chocolates">
                                  {verChocolates && (
                                    <ul>
                                      <li>
                                        <Link to="/productos-servicios/industria/chocolatinas">
                                          {" "}
                                          Chocolate bars{" "}
                                        </Link>
                                      </li>

                                      <li>
                                        <Link to="/productos-servicios/industria/bombones">
                                          {" "}
                                          Bonbon{" "}
                                        </Link>
                                      </li>

                                      <li>
                                        <Link to="/productos-servicios/industria/snacks">
                                          {" "}
                                          SNACKS{" "}
                                        </Link>
                                      </li>

                                      <li>
                                        <Link to="/productos-servicios/industria/chocolate-de-mesa">
                                          Black chocolate{" "}
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/productos-servicios/industria/nibs">
                                          {" "}
                                          NIBS{" "}
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/productos-servicios/industria/manteca-de-cacao">
                                          Cocoa butter{" "}
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/productos-servicios/industria/licor-de-cacao">
                                          Cocoa liquor{" "}
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/productos-servicios/industria/cocoa">
                                          {" "}
                                          Cocoa{" "}
                                        </Link>
                                      </li>
                                    </ul>
                                  )}
                                </div>

                                <li onMouseOver={() => mostrarCacao()}>
                                  Cocoa
                                </li>
                                <div className="chocolates">
                                  {verCacao && (
                                    <ul>
                                      <li>
                                        <Link> Grains - Clones </Link>
                                      </li>
                                      <li>
                                        <Link> Seed </Link>
                                      </li>
                                      <li>
                                        <Link> Vareta </Link>
                                      </li>
                                      <li>
                                        <Link> Seeding</Link>
                                      </li>
                                      <li>
                                        <Link> Cloned seeding </Link>
                                      </li>
                                      <li>
                                        <Link> Yolks </Link>
                                      </li>
                                    </ul>
                                  )}
                                </div>
                                <li onMouseOver={() => mostrarMango()}>
                                  Mangos
                                </li>
                                <div className="chocolates">
                                  {verMango && (
                                    <ul>
                                      <li>
                                        <Link> Seeds </Link>
                                      </li>
                                      <li>
                                        <Link> Plant </Link>
                                      </li>
                                      <li>
                                        <Link> Cloned plants </Link>
                                      </li>
                                      <li>
                                        <Link> Fresh Fruit </Link>
                                      </li>
                                      <li>
                                        <Link> Dry fruit </Link>
                                      </li>
                                      <li>
                                        <Link> Pulverized fruit </Link>
                                      </li>
                                      <li>
                                        <Link> Vacuum packaging fruit </Link>
                                      </li>
                                    </ul>
                                  )}
                                </div>
                              </ul>
                            </div>
                          )}
                          <li onMouseOver={() => mostrarServicios()}>
                            Services
                          </li>
                          {verServicios && (
                            <div className="industria">
                              <ul>
                                <li>
                                  Planning and development of agro-industry
                                  proyects
                                </li>
                                <li>Agro-ecoturismo</li>
                              </ul>
                            </div>
                          )}
                        </ul>
                      )}
                    </div>

                    <div className="productos-servicios">
                      <li onMouseOver={mostrarSustentabilidad}>
                        <Link to="/sustentabilidad">Sustainability</Link>
                        <i
                          className="fas fa-angle-down"
                          onClick={mostrarAndOcultarSustentabilidad}
                        ></i>
                      </li>
                      {verSustentabilidad && (
                        <>
                          <ul className="enlaces-largos">
                            <li>
                              <Link to="/sustentabilidad/trabajando-con-agricultores">
                                Working with farmers
                              </Link>
                            </li>
                            <li>
                              <Link to="/sustentabilidad/buscando-el-impacto-emprearial-con-produccion-sostenible">
                                Looking for business impact with sustainable
                                production
                              </Link>
                            </li>
                            <li>
                              <Link to="/sustentabilidad/impulsando-la-mejora-agricola">
                                Driving agricultural improvement
                              </Link>
                            </li>
                            <li>
                              <Link to="/sustentabilidad/modelo-empresarial-inclusivo">
                                Inclusive business model
                              </Link>
                            </li>
                            <li>
                              <Link to="/sustentabilidad/trazabilidad">
                                Traceability
                              </Link>
                            </li>
                            <li>
                              <Link to="/sustentabilidad/cadena-de-suministro-del-cacao">
                                Cocoa supply chain
                              </Link>
                            </li>
                            <li>
                              <Link to="/sustentabilidad/sostenibilidad-del-cacao">
                                Cocoa sustainability
                              </Link>
                            </li>
                          </ul>
                        </>
                      )}
                    </div>
                    <div className="productos-servicios">
                      <li onMouseOver={mostrarSobreAgromyss}>
                        <Link to="/sobre-agromyss">About Agromyss</Link>
                        <i
                          className="fas fa-angle-down"
                          onClick={mostrarAndOcultarSobreAgromyss}
                        ></i>
                      </li>
                      {verSobreAgromyss && (
                        <>
                          <ul className="enlaces-largos">
                            <li>
                              <Link to="/sobre-agromyss/responsabilidad-social-y-ambiental">
                                Social and Environmental Responsibility
                              </Link>
                            </li>
                            <li>
                              <Link to="/sobre-agromyss/codigo-de-conducta-del-proveedor">
                                Supplier Code of Conduct
                              </Link>
                            </li>
                            <li>
                              <Link to="/sobre-agromyss/declaracion-de-esclavitud-moderna">
                                Declaration of modern slavery
                              </Link>
                            </li>
                            <li>
                              <Link to="/sobre-agromyss/politica-ambiental-y-social">
                                Environmental and social policy
                              </Link>
                            </li>
                            <li>
                              <Link to="/sobre-agromyss/politica-de-inquietudes-eticas">
                                Ethical concerns policy
                              </Link>
                            </li>
                          </ul>
                        </>
                      )}
                    </div>
                    <li>
                      <Link to="/contacto">Contact</Link>
                    </li>
                  </div>
                </>
              )}
            </div>
          </div>
          <div>
            <div
              className="auth-escritorio"
              style={{ justifyContent: "flex-end" }}
            >
              {autenticado ? (
                <>
                  <CarritoIcon />

                  <li>Hello: {autenticado.displayName}</li>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={cerrarSesion}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <li onClick={() => setMiPerfil(true)}>Ingresar</li>
                </>
              )}
            </div>
            <div
              className="dropdown dropstart"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <button
                type="button"
                className="btn dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "#fff" }}
              >
                Idioma
              </button>
              <ul className="dropdown-menu">
                <p
                  className="dropdown-item"
                  onClick={() => setIdioma("ingles")}
                >
                  Ingles
                </p>
                <hr />
                <p
                  className="dropdown-item"
                  onClick={() => setIdioma("espa??ol")}
                >
                  {" "}
                  Espa??ol
                </p>
              </ul>
            </div>
          </div>
        </>
      )}
    </Contenedor>
  );
};

export default Header;
