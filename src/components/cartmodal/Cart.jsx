import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../cartcontext/CartContext';

const Cart = () => {

  const[carrito, setCarrito] = useState();
  const {products} = useContext(CartContext);

  useEffect(() => {
    const carritoJsx = products.map((producto, indice) => 
        <div key={indice}>
            <p>Titulo: {producto.titulo}, Precio: {producto.precio}, Cantidad: {producto.cantidad}</p>
        </div>
    );
    setCarrito(carritoJsx);
  }, []);

  return (
      <>
          {carrito}
      </>
  );

}

export default Cart;
