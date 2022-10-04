import { useContext, useEffect, useState } from 'react';
import './CartModal.css';
import { CartContext } from '../cartcontext/CartContext';
import CartRow from '../cartrow/CartRow';
import { sendOrder } from '../../firebase/firebase.js';

const CartModal = () => {

  const[precioTotal, setPrecioTotal] = useState(0);
  const {products, borrarProducto} = useContext(CartContext);

  useEffect(() => {
    const precioSum = products.reduce((total , product) => total = total + product.precio*product.cantidad, 0);
    console.log(products);
    if (precioSum !== 0) {
        setPrecioTotal(<div>Total: {precioSum}</div>);
    } else {
        setPrecioTotal("");
    }
  }, []);

  const createOrder = () => {
    const user = {name: "Ruben", phone: "0111151212", mail: "ruben@gmail.com"};
    const items = products.map((product) => product);
    sendOrder(user, items, products.reduce((total , product) => total =  total + product.precio*product.cantidad, 0)); 
  }

  return (

    <>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" id="shop-modal">
            <div className="modal-content">
            <div className="modal-header" id="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Carrito de compras</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="shop-close"></button>
            </div>
            <div className="modal-body">
                {
                products.map((producto, indice) => 
                    <CartRow indice={indice} producto={producto}/>
                )
                }
            </div>
            {precioTotal}
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => createOrder()}>Comprar</button>
            </div>
            </div>
        </div>
        </div>
    </>

  );
}

export default CartModal;
