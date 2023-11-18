import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Center, Img } from '@chakra-ui/react';
import ItemCount from './ItemCount';
import { Image } from '@chakra-ui/react'
import logo from '../assets/logo.jpg';


const ItemDetail = ({ productos }) => {
    const { id } = useParams();


    const filteredProducts = productos.filter((producto) => producto.id == id)


    return (
        <div>
            {filteredProducts.map((p) => {
                return (
                    
                    <div key={p.id}>
                        
                        <Center p='1rem'>

                            <Card>
                                <CardHeader>
                                    <Heading size='md'>{p.nombre}</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>{p.description}</Text>
                                </CardBody>
                                <a className="navbar-brand">
                                    
                                    <img src={p.img} alt="Logo"/>
                                </a>
                                <CardFooter>
                                    <ItemCount />
                                </CardFooter>
                            </Card>
                        </Center>
                    </div>
                )
            })}
        </div>
    )
}

export default React.memo(ItemDetail);
