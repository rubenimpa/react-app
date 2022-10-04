import './ItemListContainer.css';

import ItemList from '../itemlist/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductos } from '../../firebase/firebase.js';

const ItemListContainer = ({greeting}) => {

    const {id} = useParams();
    const [productosCatalogo, setProductosCatalogo] = useState([]);

    async function consultarProductos() {
        const productos = await getProductos();
        const items = productos.docs.map(producto => producto.data());
        
        if (id === undefined) {
            setProductosCatalogo(<ItemList items={items}/>);
        } else {
            setProductosCatalogo(<ItemList items={items.filter(producto => producto.idCatalogo == id)}/>);
        }        
    }

    useEffect(() => {
        consultarProductos();
    }, []);

  return (

    <>
        <h1 className="titulo-catalogo">{greeting}</h1>
        {productosCatalogo}
    </>

  );
}

export default ItemListContainer;
