import './App.css';
import NavBar from './navbar/NavBar';
import ItemListContainer from './itemlistcontainer/ItemListContainer';
import CartModal from './cartmodal/CartModal';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './itemdetailcontainer/ItemDetailContainer';
import Cart from './cartmodal/Cart';

function App() {
  return (

  /**Inicio, Catalogo, Ofertas, Contacto */

    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Catálogo"/>}></Route>
          <Route path="/inicio" element={<ItemListContainer greeting="Catálogo"/>}></Route>
          <Route path="/catalogo" element={<ItemListContainer greeting="Catálogo"/>}></Route>
          <Route path="/catalogo/:id" element={<ItemListContainer greeting="Catálogo"/>}></Route>
          <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
          <Route path="/ofertas"></Route>
          <Route path="/contacto"></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/cartmodal" element={<CartModal/>}></Route>
        </Routes>
        <CartModal/>
      </BrowserRouter>
      
    </>

  );
}

export default App;
