import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Contact from "./pages/Contact/Contact";
import Product from "./pages/Home/Home";
import SingleProduct from "./pages/Products/product-detail";
import SinglePost from "./pages/Posts/post-detail";
import Post from "./component/blog/post";

const App = () => {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<SingleProduct />} />

          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/Post" element={<Post />} />

          <Route path="/Post/:id" element={<SinglePost />} />
        </Routes>
      </Router>
  );
};

export default App;
