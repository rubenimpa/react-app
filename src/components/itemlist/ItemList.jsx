import './ItemList.css';
import Item from '../item/Item';
import { useEffect, useState } from 'react';

const ItemList = ({items}) => {

    const [catalogo, setCatalogo] = useState([]);

    useEffect(() => {
        const itemJsx = items.map((producto, indice) => 
            <div className="catalogo-item" key={indice}>
                <Item item={producto}/>
            </div>
        );
        setCatalogo(itemJsx);
    }, []);

    return (
        <div className="catalogo-list">
            {catalogo}
        </div>
    );
}

export default ItemList;