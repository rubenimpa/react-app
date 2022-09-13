import './NavBar.css';
import React from 'react';
import searchIcon from '../../images/search-icon.png';
import { Link } from 'react-router-dom';

function NavBar() {
  return (

<nav className="navbar navbar-expand-lg" id="nav-bar">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/**<img className="icon-web" src="../images/icon.png" alt="" /> */}
    <div>Portal Manga</div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="items-nav-bar">
        <li className="nav-item">
          <Link className="nav-link active" to="/catalogo">Inicio</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Catálogo
          </a>
          <ul className="dropdown-menu">
            <li><Link to={`/catalogo/1`} className="link-detail">Ivrea</Link></li>
            <li><Link to={`/catalogo/2`} className="link-detail">Ovni Manga</Link></li>
            <li><Link to={`/catalogo/3`} className="link-detail">Panini</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link to={`/catalogo/4`} className="link-detail">Importados</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Ofertas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
      </ul>
      <form className="d-flex" role="search" id="form-id">
        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
        {/**button className="btn btn-outline-success" type="submit">Search</button> */}
        <a href="#"><img className="search-icon" src={searchIcon} /></a>
        <div className="shop-cart">
            <button id="cart-button" type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
            <p className="label-count">1</p>
        </div>
        {/** <a href="#"><img className="search-icon" src={cartShopIcon} /></a> */}
      </form>
    </div>
  </div>
</nav>

  );
}

export default NavBar;
