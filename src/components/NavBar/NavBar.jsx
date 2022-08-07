import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    const title = "SAPA BABYS";
    return (  
<nav className="navbar navbar-expand-lg bg-dark navbar-dark nav-justified">
    <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
        {title}
        
        </Link>
        <div className="navbar-brand">
      <CartWidget />
    </div>  
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <ul className="navbar-nav">
    
        <Link className="nav-link active" aria-current="page" to={"/"}>
        Home
        </Link>
        <Link className="nav-link" to={"/productos"}>
        Productos
        </Link>
    <ul className="nav-item dropdown" id="myDropdown">
      <li className="nav-link dropdown-toggle" data-bs-toggle="dropdown">  Categorias  </li>
      <ul className="dropdown-menu">
        <li> <Link className="dropdown-item" to={"/categoria/ropadebebe"}> Ropa Bebe </Link></li>
        <li> <Link className="dropdown-item" to={"/categoria/ropadebebe2anos"}> Ropa Bebe 2 Años </Link>
      </li>
        <li><Link className="dropdown-item" to={"/categoria/ropadebebe3anos"}> Ropa Bebe 3 Años </Link></li>
        <li><Link className="dropdown-item" to={"/categoria/ropadebebe4anos"}> Ropa Bebe 4 Años</Link></li>
      </ul>
    </ul>
  </ul>
        <div className="navbar-nav">
        <Link className="nav-link disabled" to={"/registro"}>Registro</Link>
      </div>
    </div>
    
  </div>

</nav>

    );
}





export default NavBar;