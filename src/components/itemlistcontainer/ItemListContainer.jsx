import './ItemListContainer.css';
import catalogoImg1 from '../../images/saint-seiya-1.jpeg';
import catalogoImg2 from '../../images/saint-seiya-2.jpeg';
import catalogoImg3 from '../../images/saint-seiya-3.jpeg';
import catalogoImg4 from '../../images/saint-seiya-4.jpeg';
import catalogoImg5 from '../../images/attack-1-ovni.jpeg';
import catalogoImg6 from '../../images/attack-2-ovni.jpeg';
import catalogoImg7 from '../../images/naruto-2-panini.jpeg';
import catalogoImg8 from '../../images/naruto-4-panini.jpeg';
import catalogoImg9 from '../../images/naruto-8-panini.jpeg';
import catalogoImg10 from '../../images/naruto-11-panini.jpeg';
import catalogoImg11 from '../../images/naruto-22-panini.jpeg';
import catalogoImg12 from '../../images/is-1-planeta.jpeg';
import catalogoImg13 from '../../images/is-6-planeta.jpeg';

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
