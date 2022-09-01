import './Item.css';

const Item = ({item}) => {

    return (

        <div className="catalogo-item">
            <img src={item.image} alt="" />
            <p>${item.precio}</p>
            <p>En stock: {item.precio}</p>
        </div>

    );
}

export default Item;