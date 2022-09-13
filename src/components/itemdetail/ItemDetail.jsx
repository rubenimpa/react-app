import { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../cartmodal/Cart';
import ItemCount from '../itemcount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({item}) => {

    const [cantidad, setCantidad] = useState(1);

    function optionSelected(value) {
        console.log(value);
        setCantidad(value);
    }

    return (

        <>
            <div>
                <img className="img-detail" src={item.image} alt="" />    
            </div>
            <div className="item-detail-second">
                <h5 className="titulo-item">{item.titulo}</h5>
                <p>{item.descripcion}</p>
                <p>${item.price}</p>
                <p>En stock: {item.stock}</p>
                <ItemCount disabled stock={3} onAdd={optionSelected} initial={1}/>
                <Link to={`/cart/${cantidad}`}><button id="button-compra-detail" type="button" className="btn btn-primary">Comprar</button></Link>
            </div>
        </>

    );
}

export default ItemDetail;