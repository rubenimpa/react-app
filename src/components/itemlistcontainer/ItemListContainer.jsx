import './ItemListContainer.css';
import catalogoImg1 from '../../images/saint-seiya-1.jpeg';
import catalogoImg2 from '../../images/saint-seiya-2.jpeg';
import catalogoImg3 from '../../images/saint-seiya-3.jpeg';
import ItemList from '../itemlist/ItemList';
import { useEffect, useState } from 'react';

const productos = [
    {image: catalogoImg1, price: 1200, stock: 3},
    {image: catalogoImg2, price: 1200, stock: 2},
    {image: catalogoImg3, price: 1200, stock: 5}
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

const ItemListContainer = ({greeting}) => {

  const [catalogoParam, setCatalogoParam] = useState([]);

  useEffect(() => {
    consultarPromesa(true)
    .then(data => {
        setCatalogoParam(data);
    })
  }, []);

  return (

    <div>
        <h1 className="titulo-catalogo">{greeting}</h1>
        <ItemList items={catalogoParam}/>
    </div>

  );
}

export default ItemListContainer;
