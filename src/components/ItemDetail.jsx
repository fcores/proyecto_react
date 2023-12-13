import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Center } from '@chakra-ui/react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ productos }) => {
    const { id } = useParams();

    const { carrito, agregarAlCarrito } = useContext(CartContext);

    const filteredProducts = productos.filter((producto) => producto.id == id);
    const product = filteredProducts[0]; // Use the first item from the filtered array

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    };

    const handleSumar = () => {
        cantidad < product.stock && setCantidad(cantidad + 1);
    };

    return (
        <div>
            {filteredProducts.map((p) => (
                <div key={p.id}>
                    <Center p='1rem'>
                        <Card>
                            <CardHeader>
                                <Heading size='md'>{p.nombre}</Heading>
                                <Heading size='md'>Precio Final ${p.precio}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>{p.description}</Text>
                            </CardBody>
                            <Center>
                                <img src={p.imagen} alt={p.nombre} style={{ width: '200px' }} />
                            </Center>
                            <CardFooter>
                                <ItemCount
                                    cantidad={cantidad}
                                    handleSumar={handleSumar}
                                    handleRestar={handleRestar}
                                    handleAgregar={() => {
                                        agregarAlCarrito(product, cantidad);
                                    }}
                                />
                            </CardFooter>
                        </Card>
                    </Center>
                </div>
            ))}
        </div>
    );
};

export default React.memo(ItemDetail);
