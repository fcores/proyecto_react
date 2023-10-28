import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContanier = ({greeting}) => {
  return (
        <div className="alert alert-success " role="alert">
          <h1 className="alert-heading">{greeting}</h1>
        </div>
  )
}

export default ItemListContanier