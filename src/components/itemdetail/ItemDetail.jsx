import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../cartcontext/CartContext';
import Cart from '../cartmodal/Cart';
import ItemCount from '../itemcount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({item}) => {

    const [cantidad, setCantidad] = useState(1);
    const {products, agregarProducto} = useContext(CartContext);

    function optionSelected(value) {
        setCantidad(value);
    }

    const agregarCarrito = () => {

        //se evita agregar 2 veces el mismo producto
        if (products.find(producto => producto.titulo === item.titulo) === undefined) {
            const producto = {id: item.id, titulo: item.titulo, precio: item.price, cantidad: cantidad};
            agregarProducto(producto);
        }

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
                <Link to={`/cart`}><button onClick={() => agregarCarrito()} id="button-compra-detail" type="button" className="btn btn-primary">Comprar</button></Link>
            </div>
        </>

    );
}

export default ItemDetail;