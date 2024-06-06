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
import Dashboard from "./pages/Dashboard/dashboard";
import AuthLayout from "./layout/Auth-layout/auth";
import DefaultLayout from "./layout/Default/default";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />

        {/* default layout */}
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<SingleProduct />} />

          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/Post" element={<Post />} />

          <Route path="/Post/:id" element={<SinglePost />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/Login" element={<SigninPage />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
