import React from 'react'
import {Badge,Stack} from '@chakra-ui/react'

const CartWidget = () => {
  return (
    <div>
      <button className="btn btn-success position-relative" type="submit">Carrito 
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          99+
        </span>
      </button>
    </div>
  )
}

export default CartWidget