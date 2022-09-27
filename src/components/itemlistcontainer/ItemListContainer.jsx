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
    const [productos, setProductos] = useState([]);

    async function consultarDB() {
        const productos = await getProductos();
        setProductos(productos);
    }
    useEffect(() => {
        consultarDB()
    }, []);

    /*const productos = [
        {id: 1, idCatalogo: 1, image: catalogoImg1, titulo: "Saint Seiya 1", price: 1200, stock: 3},
        {id: 2, idCatalogo: 1, image: catalogoImg2, titulo: "Saint Seiya 2", price: 1300, stock: 2},
        {id: 3, idCatalogo: 1, image: catalogoImg3, titulo: "Saint Seiya 3", price: 1400, stock: 5},
        {id: 4, idCatalogo: 1, image: catalogoImg4, titulo: "Saint Seiya 4", price: 1500, stock: 1},
        {id: 5, idCatalogo: 2, image: catalogoImg5, titulo: "Atack On Titan 1", price: 1200, stock: 3},
        {id: 6, idCatalogo: 2, image: catalogoImg6, titulo: "Atack On Titan 2", price: 1300, stock: 2},
        {id: 7, idCatalogo: 3, image: catalogoImg7, titulo: "Naruto 2", price: 1400, stock: 5},
        {id: 8, idCatalogo: 3, image: catalogoImg8, titulo: "Naruto 4", price: 1500, stock: 1},
        {id: 9, idCatalogo: 3, image: catalogoImg9, titulo: "Naruto 8", price: 1200, stock: 3},
        {id: 10, idCatalogo: 3, image: catalogoImg10, titulo: "Naruto 11", price: 1300, stock: 2},
        {id: 11, idCatalogo: 3, image: catalogoImg11, titulo: "Naruto 22", price: 1400, stock: 5},
        {id: 12, idCatalogo: 4, image: catalogoImg12, titulo: "I''s 1", price: 1500, stock: 1},
        {id: 13, idCatalogo: 4, image: catalogoImg13, titulo: "I''s 6", price: 1200, stock: 3}
    ];*/

    function consultarPromesa(confirmacion) {
        return new Promise((res, rej) => {
            if (confirmacion) {
                res(productos);
            } else {
                rej("Acceso denegado");
            }
        });
    }

    useEffect(() => {

            if (id === undefined) {
                setProductosCatalogo(<ItemList items={productos}/>);
            } else {
                setProductosCatalogo(<ItemList items={productos.filter(producto => producto.idCatalogo == id)}/>);
            }

    }, []);

  return (

    <>
        <h1 className="titulo-catalogo">{greeting}</h1>
        {productosCatalogo}
    </>

  );
}

export default ItemListContainer;
