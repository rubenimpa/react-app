import './ItemListContainer.css';
import catalogoImg1 from '../../images/saint-seiya-1.jpeg';
import catalogoImg2 from '../../images/saint-seiya-2.jpeg';
import catalogoImg3 from '../../images/saint-seiya-3.jpeg';
import catalogoImg4 from '../../images/saint-seiya-4.jpeg';
import ItemList from '../itemlist/ItemList';
import ItemDetailContainer from '../itemdetailcontainer/ItemDetailContainer';
import { useEffect, useState } from 'react';


const ItemListContainer = ({greeting}) => {

    const productos = [
        {id: 1, image: catalogoImg1, titulo: "Saint Seiya 1", price: 1200, stock: 3},
        {id: 2, image: catalogoImg2, titulo: "Saint Seiya 2", price: 1300, stock: 2},
        {id: 3, image: catalogoImg3, titulo: "Saint Seiya 3", price: 1400, stock: 5},
        {id: 4, image: catalogoImg4, titulo: "Saint Seiya 4", price: 1500, stock: 1}
    ];

    function consultarPromesa(confirmacion) {
        return new Promise((res, rej) => {
            if (confirmacion) {
                res(productos);
            } else {
                rej("Acceso denegado");
            }
        });
    }

  const [catalogoParam, setCatalogoParam] = useState([]);

  return (

    <div>
        <h1 className="titulo-catalogo">{greeting}</h1>
        <ItemList items={productos}/>
    </div>

  );
}

export default ItemListContainer;
