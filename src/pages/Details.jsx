import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Info from "../components/Info";

const Details = () => {
  const { id } = useParams();

  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/books/${id}`)
      .then((res) => setBook(res.data));
  }, []);

  return (
    <div className="row my-5 p-5 mx-auto container">
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <img
          src={book?.image}
          className="rounded img-fluid shadow w-100 h-100 object-fit"
          alt=""
        />
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center my-4">
        <h1>{book?.title}</h1>
        <div className="my-4">
          <Info title="Yazar" value={book?.author} />
          <Info title="Yıl" value={book?.year} />
          <Info title="Sayfa Sayısı" value={book?.page} />
          <Info title="Ücret" value={book?.price} />
          <Info title="Açıklama" value={book?.description} />
        </div>
      </div>
    </div>
  );
};

export default Details;