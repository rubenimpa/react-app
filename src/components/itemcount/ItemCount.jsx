
import { useState } from 'react';
import './ItemCount.css';

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
        <div className="buttons-cart">
            <button className="btn btn-primary" onClick={sumCantidad} id="button-add-shop">+</button>
            <p>{cantidad}</p>
            <button className="btn btn-primary" onClick={resCantidad}>-</button>
        </div>

    );
}

export default ItemCount;