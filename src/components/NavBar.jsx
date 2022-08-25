import './NavBar.css';
import searchIcon from '../images/search-icon.png';

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
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Catálogo
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Ivrea</a></li>
            <li><a className="dropdown-item" href="#">Ovni Manga</a></li>
            <li><a className="dropdown-item" href="#">Panini</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Importados</a></li>
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
