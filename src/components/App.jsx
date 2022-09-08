import './App.css';
import NavBar from './navbar/NavBar';
import ItemListContainer from './itemlistcontainer/ItemListContainer';
import CartModal from './cartmodal/CartModal';
import Home from './home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './itemdetailcontainer/ItemDetailContainer';

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
          <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
          <Route path="/ofertas"></Route>
          <Route path="/contacto"></Route>
        </Routes>
      </BrowserRouter>
      <CartModal/>
    </>

  );
}

export default App;
