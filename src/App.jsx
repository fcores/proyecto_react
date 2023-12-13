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
import Cart from './components/Carrito.jsx'
import { CartProvider } from './context/CartContext.jsx';
import Carrito from './components/Carrito.jsx'
import Checkout from'./components/Checkout.jsx'



const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/contacto" element={<Contact />} />
          <Route exact path="/carrito" element={<Carrito />} />
          <Route exact path="/category/:category" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>

  )
}

export default App