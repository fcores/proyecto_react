import React from 'react'
import CartWidget from './CartWidget'
import {Menu,MenuButton,MenuList,MenuItem,Flex,Box,Spacer} from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>

      <nav className="navbar navbar-expand-lg bg-primary border-bottom border-body"  data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand">
              <Link to={`/`}>
                <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                TUPCAMEDIDA.COM
              </Link>
            </a>
            
          

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <Link to={`/about`}>
                      Quienes Somos
                    </Link>
                  </a>
                </li>
                
                  <li className="nav-item">
                    <Link to={`/contacto`}>
                      <a className="nav-link" href="#">Contacto</a>
                    </Link>
                  </li>
                
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorias
                  </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to={`/category/${'cat1'}`}>
                          <a className="dropdown-item">Escritorio</a>  
                        </Link>
                      </li>
                      <li>
                        <Link to={`/category/${'cat2'}`}>
                          <a className="dropdown-item">Gamer</a>
                        </Link>
                      </li>
                      <li>
                        <Link to={`/category/${'cat3'}`}>
                        <a className="dropdown-item" >A medida</a>
                        </Link>
                      </li>
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