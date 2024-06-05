import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Contact from "./pages/Contact/Contact";
import Product from "./pages/Products/Product";
import SingleProduct from "./pages/Products/product-detail";
import SinglePost from "./pages/Posts/post-detail";
import Post from "./component/blog/post";
import RegisterPage from "./pages/register/register-page";
import SigninPage from "./pages/sign-in/sign-in";
import NotFound from "./pages/not-found/not-found";
import ContactPage from "./pages/Contact/contact-page";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<SingleProduct />} />

        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/Post" element={<Post />} />

        <Route path="/Post/:id" element={<SinglePost />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Login" element={<SigninPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
