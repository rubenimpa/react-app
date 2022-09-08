import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({item}) => {

    return (

        <>
            <img src={item.image} alt="" />
            <h5 className="titulo-item">{item.titulo}</h5>
            <p>${item.price}</p>
            <p>En stock: {item.stock}</p>
            <Link to={`/item/${item.id}`} className="link-detail">Detalle</Link>
        </>

    );
}

export default Item;