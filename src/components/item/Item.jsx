import './Item.css';

const Item = ({item}) => {

    return (

        <div className="catalogo-item">
            <img src={item.image} alt="" />
            <p>${item.price}</p>
            <p>En stock: {item.stock}</p>
        </div>

    );
}

export default Item;