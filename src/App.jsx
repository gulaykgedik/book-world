import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Details from "./pages/Details";
import Category from "./pages/Category";

const App = () => {
  return (
    <BrowserRouter>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/category" element={<Category />}>
            <Route path="hikaye" element={<h1>Hikaye Sayfası</h1>} />
            <Route path="roman" element={<h1>Roman Sayfası</h1>} />
          </Route>
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
