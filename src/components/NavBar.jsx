import React from 'react'
import CartWidget from './CartWidget'
import {Menu,MenuButton,MenuList,MenuItem,Flex,Box,Spacer} from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.jpg';

const NavBar = () => {
  return (
    <>
      <div className="alert alert-primary d-flex justify-content-center align-items-center" role="alert">
          <h1>Primer Entrega Carrito de Compras</h1>
      </div>

      <nav className="navbar navbar-expand-lg bg-primary border-bottom border-body"  data-bs-theme="dark">
          <div className="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
             TUPCAMEDIDA.COM
          </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Quienes Somos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contacto</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorias
                  </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Escritorio</a></li>
                      <li><a className="dropdown-item" href="#">Gamer</a></li>
                      <li><a className="dropdown-item" href="#">A medida</a></li>
                    </ul>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <CartWidget/>
              </form>
            </div>
          </div>
        </nav>
    </>
    
  )
}

export default NavBar