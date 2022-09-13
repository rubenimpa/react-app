
import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({stock, onAdd, initial}) => {


    const [cantidad, setCantidad] = useState(initial);

    const sumCantidad = () => {
        if (cantidad < stock) {
            const cantidadModificada = cantidad + 1;
            setCantidad(cantidadModificada);
            onAdd(cantidadModificada);
        }
    }

    const resCantidad = () => {
        if (cantidad > initial) {
            const cantidadModificada = cantidad - 1;
            setCantidad(cantidadModificada);
            onAdd(cantidadModificada);
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