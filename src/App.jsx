import React from 'react'
import NavBar from './components/NavBar'
import ItemListContanier from './components/ItemListContanier'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const App = () => {
  return (
    <>
      <div>
        <NavBar/>
        <ItemListContanier
        greeting ={"Bienvenido"}
        />
      </div>
    </>

  )
}

export default App