import './App.css';
import NavBar from './navbar/NavBar';
import ItemListContainer from './itemlistcontainer/ItemListContainer';
import CartModal from './cartmodal/CartModal';

function App() {
  return (

    <div>
      <NavBar/>
      <ItemListContainer greeting="Catálogo"/>
      <CartModal/>
    </div>

  );
}

export default App;
