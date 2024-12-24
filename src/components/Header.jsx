import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-around">
        <span className="navbar-brand fs-2 fw-bold">Kitap Kurdu</span>
        <nav className="d-flex gap-4 fs-5">
          <NavLink to={"/"}>Anasayfa</NavLink>
          <NavLink to={"/product"}>Ürünler</NavLink>
          <NavLink to={"/category"}>Katagori</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
