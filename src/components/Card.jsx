import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <div className="card shadow p-2">
      <img src={book.image} alt="" className="object-fit-fill" />
      <div className="card-body">
        <h4>{book.title}</h4>
        <h5>{book.author}</h5>
      </div>
      <Link className="btn btn-primary w-100" to={`/details/${book.id}`}>
        Detay Gör
      </Link>
    </div>
  );
};

export default Card;
