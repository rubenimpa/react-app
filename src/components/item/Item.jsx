import './Item.css';

const Item = ({item}) => {

    return (

        <>
            <img src={item.image} alt="" />
            <h5 className="titulo-item">{item.titulo}</h5>
            <p>${item.price}</p>
            <p>En stock: {item.stock}</p>
        </>

    );
}

export default Item;