
import { useState } from 'react';
import './ItemCount.css';
import catalogoImg1 from '../../images/saint-seiya-1.jpeg';

const ItemCount = ({stock, initial}) => {


    const [cantidad, setCantidad] = useState(initial);

    const sumCantidad = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    }

    const resCantidad = () => {
        if (cantidad > initial) {
            setCantidad(cantidad - 1);
        }
    }

    return (
  
        <div className="modal-row">
            <img src={catalogoImg1} alt="" />
            <p>Saint Seiya 1</p>
            <p>{cantidad}</p>
            <div className="buttons-cart">
                <button className="btn btn-primary" onClick={sumCantidad}>+</button>
                <button className="btn btn-primary" onClick={resCantidad}>-</button>
            </div>
        </div>
  
    );
}

export default ItemCount;