import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import axios from "axios";
import Card from "../components/Card";
import { useNavigate, useSearchParams } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const params = {
      q: searchParams.get("search"),
      _sort: "title",
      _order: searchParams.get("sort") === "z-a" ? "desc" : "asc",
    };
    axios
      .get("http://localhost:3030/books", { params })
      .then((res) => setBooks(res.data))
      .catch((err) => {
        navigate("/notfound");
      });
  }, [searchParams]);

  return (
    <div className="container my-5">
      {books.length === 0 ? (
        <h3 className="fw-bold fs-1 bg-danger p-4 rounded text-black text-center mb-5">
          Kitap bulunamadı!
        </h3>
      ) : (
        <h3>{books.length} Kitap bulundu</h3>
      )}

      <Filter />
      <div className="card-container">
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Product;
