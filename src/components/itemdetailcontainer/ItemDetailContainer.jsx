import './ItemDetailContainer.css';
import { useEffect, useState } from 'react';
import ItemDetail from '../itemdetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

  const [dataDetail, setDataDetail] = useState({});
  const {id} = useParams();
  

  useEffect(() => {
    fetch("./details.json", {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
    .then(response => response.json())
    .then((data) => {
        setDataDetail(data.find(producto => producto.id == id));
    })
  },[]);

  return (

    <div className="item-detail-container">
        <ItemDetail item={dataDetail}/>
    </div>

  );
}

export default ItemDetailContainer;