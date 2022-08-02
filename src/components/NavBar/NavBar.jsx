import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    const title = "Ropita Bebe";
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
    <div className="navbar-nav">
    
        <Link className="nav-link nav-item" aria-current="page" to={"/"}>
        Home
        </Link>
        <Link className="nav-link nav-item" to={"/productos"}>
        Productos
        </Link>
    <div className="nav-item dropdown " id="myDropdown">
      <div className="nav-link dropdown-toggle" data-bs-toggle="dropdown">  Categorias  </div>
      <div className="dropdown-menu bg-dark ">
        <div> <Link className="nav-item nav-link" to={"/categoria/ropadebebe"}> Ropa Bebe </Link></div>
        <div> <Link className="nav-item nav-link" to={"/categoria/ropadebebe2anos"}> Ropa Bebe 2 Años </Link>
      </div>
        <div><Link className="nav-item nav-link" to={"/categoria/ropadebebe3anos"}> Ropa Bebe 3 Años </Link></div>
        <div><Link className="nav-item nav-link" to={"/categoria/ropadebebe4anos"}> Ropa Bebe 4 Años</Link></div>
      </div>
    </div>
  </div>
        <div className="navbar-nav">
        <Link className="nav-link disabled nav-item" to={"/registro"}>Registro</Link>
      </div>
    </div>
    
  </div>

</nav>

    );
}





export default NavBar;