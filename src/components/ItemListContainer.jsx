import './ItemListContainer.css';
import catalogoImg1 from '../images/saint-seiya-1.jpeg';
import catalogoImg2 from '../images/saint-seiya-2.jpeg';
import catalogoImg3 from '../images/saint-seiya-3.jpeg';


const ItemListContainer = ({greeting}) => {
  return (

    <div>
        <h1 className="titulo-catalogo">{greeting}</h1>
        <div className="catalogo-item">
            <div>
                <img src={catalogoImg1} alt="" />
            </div>
            <div>
                <img src={catalogoImg2} alt="" />
            </div>
            <div>
                <img src={catalogoImg3} alt="" />
            </div>
        </div>
    </div>

  );
}

export default ItemListContainer;
