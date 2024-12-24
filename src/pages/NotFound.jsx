import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center container mx-auto p-5 d-flex flex-column gap-4">
      <h1 className="text-warning">Kitap bulunamadı!!!</h1>
      <img src="/08_404.gif" alt="" />
      <p className="fs-1">
        <Link to="/">Ana Sayfa</Link> ya gidiniz.
      </p>
    </div>
  );
};

export default NotFound;
