import './ItemDetailContainer.css';
import catalogoImg1 from '../../images/saint-seiya-1.jpeg';
import { useEffect, useState } from 'react';
import ItemDetail from '../itemdetail/ItemDetail';


const ItemDetailContainer = ({greeting}) => {

  const [dataDetail, setDataDetail] = useState({});

  useEffect(() => {
    fetch("./details.json", {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        setDataDetail(data[0]);
    })
  },[]);

  return (

    <div className="item-detail-container">
        <ItemDetail item={dataDetail}/>
    </div>

  );
}

export default ItemDetailContainer;