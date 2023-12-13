import React, { useState } from 'react';
import { ButtonGroup, Button, IconButton } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <ButtonGroup size='md' isAttached variant='outline'>
        <IconButton onClick={handleRestar} icon={<MinusIcon />} isDisabled={counter === 0} />
        <Button>{cantidad}</Button>
        <IconButton onClick={handleSumar} icon={<AddIcon />} isDisabled={counter === 10} />
      </ButtonGroup>

      <p></p>

      <Button colorScheme='red' className="agregar-al-carrito" onClick={() => handleAgregar(counter)} type="submit">Agregar al carrito</Button>

    </div>
  );
};

export default ItemCount;