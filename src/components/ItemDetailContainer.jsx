import React from 'react'
import ItemDetail from './ItemDetail'
import { SimpleGrid } from '@chakra-ui/react'
import auriculares from '../assets/auriculares.png'
import fuente_700 from '../assets/fuente_700.png'
import fuente_1050 from '../assets/fuente_1050.png'
import gabinete_s300 from '../assets/gabinete_s300.png'
import intel_i3 from '../assets/intel_i3.png'
import intel_i7 from '../assets/intel_i7.png'
import master_fan from '../assets/master_fan.png'
import memoria_8gb from '../assets/memoria_8gb.png'
import memoria_16gb from '../assets/memoria_16gb.png'
import monitor from '../assets/monitor.png'
import mother_1700 from '../assets/mother_1700.png'
import mouse from '../assets/mouse.png'
import rtx_1070 from '../assets/rtx_1070.png'
import rtx_3070 from '../assets/rtx_3070.png'
import teclado from '../assets/teclado.png'
import windows_10 from '../assets/windows_10.png'
import { useEffect,useState } from 'react'
import {collection,getDocs,getFirestore} from 'firebase/firestore'


const ItemDetailContainer = () => {

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

    return (
        <>  
        <SimpleGrid columns={0} spacing={10}>
            <ItemDetail productos={productos}/>
        </SimpleGrid>
            
        </>
    )
}

export default ItemDetailContainer