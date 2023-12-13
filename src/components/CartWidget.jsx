import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import { Flex, Box, Spacer } from '@chakra-ui/react'


const CartWidget = () => {

  const { cantidadEnCarrito } = useContext(CartContext) || {};

  return (
    <div>
      <Link className="menu-link" to="/carrito">
        <button className="btn btn-success position-relative" type="submit" to="/carrito"> Carrito 
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                <span className="numerito">{cantidadEnCarrito()}</span>
          </span>
        </button>
      </Link>
    </div>
  )
}

export default CartWidget