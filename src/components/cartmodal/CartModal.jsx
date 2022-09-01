import { useState } from 'react';
import './CartModal.css';
import ItemCount from '../itemcount/ItemCount';
import catalogoImg1 from '../../images/saint-seiya-1.jpeg';

const CartModal = () => {

  const [cantidad, setCantidad] = useState(0);

  return (

    <div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" id="shop-modal">
            <div className="modal-content">
            <div className="modal-header" id="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Carrito de compras</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="shop-close"></button>
            </div>
            <div className="modal-body">
                <div className="modal-row">
                    <img src={catalogoImg1} alt="" />
                    <p>Saint Seiya 1</p>
                    <ItemCount stock={3} initial={1}/>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" disabled>Comprar</button>
            </div>
            </div>
        </div>
        </div>
    </div>

  );
}

export default CartModal;
