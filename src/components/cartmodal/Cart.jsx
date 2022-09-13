import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Cart = () => {

  const {cantidad} = useParams();

  return (

    <div>
        <p>{cantidad}</p>
    </div>

  );
}

export default Cart;
