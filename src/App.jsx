import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Cart from './components/Cart'



const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        {/* <ItemListContainer />
        <ItemDetailContainer /> */}
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contacto" element={<Contact />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/category/:category" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />

      </Routes>

    </BrowserRouter>

  )
}

export default App