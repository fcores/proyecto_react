import React from 'react'
import ItemList from './ItemList'
import { Center } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { SimpleGrid } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { useEffect,useState } from 'react'
import {collection,getDocs,getFirestore} from 'firebase/firestore'



const ItemListContainer = () => {
  const { category } = useParams()
  const[productos,setProductos] = useState([])

  useEffect(()=>{
    
    const db = getFirestore()
    const itemsCollection = collection(db,"productosInformatica")
    
    getDocs(itemsCollection).then((snapshot)=>{
      const docs = snapshot.docs.map((doc)=>{
        let documento = {
          ...doc.data(),id:doc.id
        }
        
        return documento
      })
      
      setProductos(docs)
    })
  },[])
  console.log(productos);

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