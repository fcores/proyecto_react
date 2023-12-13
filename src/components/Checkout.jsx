import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection,getFirestore,addDoc } from 'firebase/firestore'
import {FormControl,FormLabel,Input,Button,Alert,AlertIcon,AlertDescription,AlertTitle} from '@chakra-ui/react'


const Checkout = () => {

    
    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const db = getFirestore()


    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })

    }

    if (pedidoId) {
        return (
            <div className="container">
                <Alert
                    status='success'
                    variant='subtle'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    textAlign='center'
                    height='200px'
                    >
                    <AlertIcon boxSize='40px' mr={0} />
                    <AlertTitle mt={4} mb={1} fontSize='lg'>
                        Muchas gracias por tu compra
                    </AlertTitle>
                    <AlertDescription maxWidth='sm'>
                        Tu número de pedido es: {pedidoId}
                    </AlertDescription>
                </Alert>
            </div>
        )
    }

  return (
    <div className="container">
        <h1 className="main-title">Finalizar compra</h1>
        <form className="formulario" onSubmit={handleSubmit(comprar)}>
            <FormControl>
                <FormLabel>Nombre</FormLabel>
                <Input placeholder="Ingresá tu nombre" {...register("nombre")} />

                <FormLabel>Email</FormLabel>
                <Input type='email' placeholder="Ingresá tu e-mail" {...register("email")} />
                
                <FormLabel>Telefono</FormLabel>
                <Input placeholder="Ingresá tu telefono con codigo de área" {...register("telefono")} />

                
            </FormControl>
            <Button colorScheme='blue' className="enviar" type="submit">Comprar</Button>
            
        </form>
    </div>
  )
}

export default Checkout