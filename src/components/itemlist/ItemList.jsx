import './ItemList.css';
import Item from '../item/Item';
import { useEffect, useState } from 'react';

const ItemList = ({items}) => {

    const [catalogo, setCatalogo] = useState([]);

    useEffect(() => {
        const itemJsx = items.map((producto) => 
            <div className="catalogo-item" key={producto.id}>
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