import React from 'react'
import ItemList from './ItemList'
import { Center } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { SimpleGrid } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'



const ItemListContainer = () => {
  const { category } = useParams()
  const productos = [
    { id: 1, nombre: "Auriculares", description: "Auriculares JBL", stock: 5, category: "cat1"},
    { id: 2, nombre: "Fuente", description: "Fuente de Alimentación de 700 W", stock: 10, category: "cat1" },
    { id: 3, nombre: "Gabinete", description: "Gabinete compacto S300", stock: 20, category: "cat1" },
    { id: 4, nombre: "Procesador", description: "Procesador Intel i3", stock: 15, category: "cat1" },
    { id: 5, nombre: "Fan", description: "Cooler Master Fan", stock: 25, category: "cat1" },
    { id: 6, nombre: "Memoria", description: "Memoria RAM 8GB", stock: 30, category: "cat1" },
    { id: 7, nombre: "Monitor", description: "Monitor Dell 27''", stock: 30, category: "cat1" },
    { id: 8, nombre: "Mother", description: "Mother ASUS 1700", stock: 30, category: "cat1" },
    { id: 9, nombre: "Mouse", description: "Mouse Logitech", stock: 30, category: "cat1" },
    { id: 10, nombre: "Teclado", description: "Teclado Logitech", stock: 30, category: "cat1" },
    { id: 11, nombre: "Sistema Operativo", description: "Windows 10", stock: 30, category: "cat1" },
    { id: 12, nombre: "Placa de Video", description: "Placa RTX 1070", stock: 30, category: "cat1" },

    { id: 13, nombre: "Auriculares", description: "Auriculares JBL", stock: 5, category: "cat2" },
    { id: 14, nombre: "Fuente", description: "Fuente de Alimentación de 1050 W", stock: 10, category: "cat2" },
    { id: 15, nombre: "Gabinete", description: "Gabinete compacto S300", stock: 20, category: "cat2" },
    { id: 16, nombre: "Procesador", description: "Procesador Intel i7", stock: 15, category: "cat2" },
    { id: 17, nombre: "Fan", description: "Cooler Master Fan", stock: 25, category: "cat2" },
    { id: 18, nombre: "Memoria", description: "Memoria RAM 16GB", stock: 30, category: "cat2" },
    { id: 19, nombre: "Monitor", description: "Monitor Dell 27''", stock: 30, category: "cat2" },
    { id: 20, nombre: "Mother", description: "Mother ASUS 1700", stock: 30, category: "cat2" },
    { id: 21, nombre: "Mouse", description: "Mouse Logitech", stock: 30, category: "cat2" },
    { id: 22, nombre: "Teclado", description: "Teclado Logitech", stock: 30, category: "cat2" },
    { id: 23, nombre: "Sistema Operativo", description: "Windows 10", stock: 30, category: "cat2" },
    { id: 24, nombre: "Placa de Video", description: "Placa RTX 3070", stock: 30, category: "cat2" },


    { id: 25, nombre: "Auriculares", description: "Auriculares JBL", stock: 5, category: "cat3" },
    { id: 26, nombre: "Fuente", description: "Fuente de Alimentación de 700 W", stock: 10, category: "cat3" },
    { id: 27, nombre: "Gabinete", description: "Gabinete compacto S300", stock: 20, category: "cat3" },
    { id: 28, nombre: "Procesador", description: "Procesador Intel i3", stock: 15, category: "cat3" },
    { id: 29, nombre: "Fan", description: "Cooler Master Fan", stock: 25, category: "cat3" },
    { id: 30, nombre: "Memoria", description: "Memoria RAM 8GB", stock: 30, category: "cat3" },
    { id: 31, nombre: "Monitor", description: "Monitor Dell 27''", stock: 30, category: "cat3" },
    { id: 32, nombre: "Mother", description: "Mother ASUS 1700", stock: 30, category: "cat3" },
    { id: 33, nombre: "Mouse", description: "Mouse Logitech", stock: 30, category: "cat3" },
    { id: 34, nombre: "Teclado", description: "Teclado Logitech", stock: 30, category: "cat3" },
    { id: 35, nombre: "Sistema Operativo", description: "Windows 10", stock: 30, category: "cat3" },
    { id: 36, nombre: "Placa de Video", description: "Placa RTX 1070", stock: 30, category: "cat3" },
    { id: 37, nombre: "Fuente", description: "Fuente de Alimentación de 1050 W", stock: 10, category: "cat3" },
    { id: 38, nombre: "Procesador", description: "Procesador Intel i7", stock: 15, category: "cat3" },
    { id: 39, nombre: "Memoria", description: "Memoria RAM 16GB", stock: 30, category: "cat3" },
    { id: 40, nombre: "Placa de Video", description: "Placa RTX 3070", stock: 30, category: "cat3" },

  ]

  const getProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    } else {
      reject(new Error("No hay datos"))
    }
  })

  getProductos
    .then((res) => {
    })
    .catch((error) => {
      console.log(error)
    })

  const filteredProducts = productos.filter((producto) => producto.category === category)

  return (
    <>
      <SimpleGrid columns={2} spacing={10}>
          <ItemList productos={filteredProducts} />
      </SimpleGrid>
    </>
  )
}

export default ItemListContainer