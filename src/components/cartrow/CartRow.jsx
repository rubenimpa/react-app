import { useContext } from 'react';
import { CartContext } from '../cartcontext/CartContext';
import './CartRow.css';

const CartRow = ({indice, producto}) => {

    const {products, borrarProducto} = useContext(CartContext);

    const borrarFila = (producto) => {
        borrarProducto(producto);
      }

    return (

        <>
          <div key={indice} className="modal-row">
            <p>Titulo: {producto.titulo}, Precio: {producto.precio}, Cantidad: {producto.cantidad}</p>
            <button onClick={() => borrarFila(producto)}>Borrar</button>
          </div>
        </>

    );
}

export default CartRow;