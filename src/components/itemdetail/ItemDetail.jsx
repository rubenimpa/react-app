import './ItemDetail.css';

const ItemDetail = ({item}) => {

    return (

        <>
            <div>
                <img src={item.image} alt="" />    
            </div>
            <div className="item-detail-second">
                <h5 className="titulo-item">{item.titulo}</h5>
                <p>{item.descripcion}</p>
                <p>${item.price}</p>
                <p>En stock: {item.stock}</p>
                <button id="button-compra-detail" type="button" className="btn btn-secondary" data-bs-dismiss="modal" disabled>Comprar</button>
            </div>
        </>

    );
}

export default ItemDetail;