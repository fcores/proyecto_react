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


const ItemDetailContainer = () => {

    const productos = [
        { id: 1, nombre: "Auriculares", description: "Auriculares JBL", stock: 5, category: "cat1",img:auriculares},
        { id: 2, nombre: "Fuente", description: "Fuente de Alimentación de 700 W", stock: 10, category: "cat1",img:fuente_700 },
        { id: 3, nombre: "Gabinete", description: "Gabinete compacto S300", stock: 20, category: "cat1",img:gabinete_s300},
        { id: 4, nombre: "Procesador", description: "Procesador Intel i3", stock: 15, category: "cat1",img: intel_i3},
        { id: 5, nombre: "Fan", description: "Cooler Master Fan", stock: 25, category: "cat1",img:master_fan },
        { id: 6, nombre: "Memoria", description: "Memoria RAM 8GB", stock: 30, category: "cat1",img: memoria_8gb},
        { id: 7, nombre: "Monitor", description: "Monitor Dell 27''", stock: 30, category: "cat1",img:monitor },
        { id: 8, nombre: "Mother", description: "Mother ASUS 1700", stock: 30, category: "cat1",img:mother_1700 },
        { id: 9, nombre: "Mouse", description: "Mouse Logitech", stock: 30, category: "cat1",img: mouse},
        { id: 10, nombre: "Teclado", description: "Teclado Logitech", stock: 30, category: "cat1",img:teclado },
        { id: 11, nombre: "Sistema Operativo", description: "Windows 10", stock: 30, category: "cat1" ,img:windows_10},
        { id: 12, nombre: "Placa de Video", description: "Placa RTX 1070", stock: 30, category: "cat1",img:rtx_1070 },
    
        { id: 13, nombre: "Auriculares", description: "Auriculares JBL", stock: 5, category: "cat2",img:auriculares },
        { id: 14, nombre: "Fuente", description: "Fuente de Alimentación de 1050 W", stock: 10, category: "cat2",img:fuente_1050},
        { id: 15, nombre: "Gabinete", description: "Gabinete compacto S300", stock: 20, category: "cat2",img: gabinete_s300},
        { id: 16, nombre: "Procesador", description: "Procesador Intel i7", stock: 15, category: "cat2",img:intel_i7 },
        { id: 17, nombre: "Fan", description: "Cooler Master Fan", stock: 25, category: "cat2",img:master_fan },
        { id: 18, nombre: "Memoria", description: "Memoria RAM 16GB", stock: 30, category: "cat2",img:memoria_16gb },
        { id: 19, nombre: "Monitor", description: "Monitor Dell 27''", stock: 30, category: "cat2",img:monitor },
        { id: 20, nombre: "Mother", description: "Mother ASUS 1700", stock: 30, category: "cat2",img:mother_1700 },
        { id: 21, nombre: "Mouse", description: "Mouse Logitech", stock: 30, category: "cat2",img: mouse},
        { id: 22, nombre: "Teclado", description: "Teclado Logitech", stock: 30, category: "cat2",img: teclado},
        { id: 23, nombre: "Sistema Operativo", description: "Windows 10", stock: 30, category: "cat2",img:windows_10 },
        { id: 24, nombre: "Placa de Video", description: "Placa RTX 3070", stock: 30, category: "cat2",img:rtx_3070 },
    
    
        { id: 25, nombre: "Auriculares", description: "Auriculares JBL", stock: 5, category: "cat3",img:auriculares},
        { id: 26, nombre: "Fuente", description: "Fuente de Alimentación de 700 W", stock: 10, category: "cat3",img:fuente_700 },
        { id: 27, nombre: "Gabinete", description: "Gabinete compacto S300", stock: 20, category: "cat3",img: gabinete_s300},
        { id: 28, nombre: "Procesador", description: "Procesador Intel i3", stock: 15, category: "cat3",img:intel_i3 },
        { id: 29, nombre: "Fan", description: "Cooler Master Fan", stock: 25, category: "cat3,img:",img:master_fan },
        { id: 30, nombre: "Memoria", description: "Memoria RAM 8GB", stock: 30, category: "cat3" ,img:memoria_8gb},
        { id: 31, nombre: "Monitor", description: "Monitor Dell 27''", stock: 30, category: "cat3",img: monitor},
        { id: 32, nombre: "Mother", description: "Mother ASUS 1700", stock: 30, category: "cat3",img:mother_1700 },
        { id: 33, nombre: "Mouse", description: "Mouse Logitech", stock: 30, category: "cat3",img:mouse },
        { id: 34, nombre: "Teclado", description: "Teclado Logitech", stock: 30, category: "cat3",img:teclado },
        { id: 35, nombre: "Sistema Operativo", description: "Windows 10", stock: 30, category: "cat3",img:windows_10 },
        { id: 36, nombre: "Placa de Video", description: "Placa RTX 1070", stock: 30, category: "cat3",img:rtx_1070 },
        { id: 37, nombre: "Fuente", description: "Fuente de Alimentación de 1050 W", stock: 10, category: "cat3",img:fuente_1050 },
        { id: 38, nombre: "Procesador", description: "Procesador Intel i7", stock: 15, category: "cat3",img:intel_i7 },
        { id: 39, nombre: "Memoria", description: "Memoria RAM 16GB", stock: 30, category: "cat3",img:memoria_16gb },
        { id: 40, nombre: "Placa de Video", description: "Placa RTX 3070", stock: 30, category: "cat3",img:rtx_3070 },

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

    return (
        <>  
        <SimpleGrid columns={0} spacing={10}>
            <ItemDetail productos={productos}/>
        </SimpleGrid>
            
        </>
    )
}

export default ItemDetailContainer