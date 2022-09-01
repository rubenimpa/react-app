import './ItemList.css';
import Item from '../item/Item';
import { useEffect, useState } from 'react';

const ItemList = ({items}) => {

    const [catalogo, setCatalogo] = useState([]);

    useEffect(() => {
        const itemJsx = items.map((producto, indice) => {
            console.log(producto);
            <div className="catalogo-list" key={indice}>
                <Item item={producto}/>
            </div>
        });
        setCatalogo(itemJsx);
    }, []);
    

    return (
        <div>
            {catalogo}
        </div>
    );
}

export default ItemList;