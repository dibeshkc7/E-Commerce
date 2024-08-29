import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Contact from "./pages/Contact/Contact";
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
import GetProduct from "./pages/Dashboard/product/get-product";
import AddProductForm from "./pages/Dashboard/product/add-product";
import GetCategory from "./pages/Dashboard/category/get-category";
import GetOrder from "./pages/Dashboard/orders/get-order";
import GetCustomer from "./pages/Dashboard/customers/get-customer";
import ProductPage from "./pages/Products/Product";
import UpdateProductPage from "./pages/Dashboard/product/update-product/update-product";
import AdminLayout from "./layout/user-layout/admin-layout";
import UserLayout from "./layout/user-layout/user-layout";
import UserDashboard from "./pages/Dashboard/user-dashboard/user-dashboard";
import Cart from "./pages/Dashboard/carts/Cart";
import AddCategoryForm from "./pages/Dashboard/category/add-category";
import UpdateCategoryPage from "./pages/Dashboard/category/update-category/update-category";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />

        {/* default layout */}
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<SingleProduct />} />

          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/Post" element={<Post />} />

          <Route path="/Post/:id" element={<SinglePost />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/Login" element={<SigninPage />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Route>

        {/* Authentication Layout         */}

        <Route element={<AuthLayout />}>
          <Route element={<AdminLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />

            {/* product */}
            <Route path="/dashboard/products" element={<GetProduct />} />
            <Route path="/dashboard/add-product" element={<AddProductForm />} />
            <Route
              path="/dashboard/update-product/:id"
              element={<UpdateProductPage />}
            />

            {/* category */}
            <Route
              path="/dashboard/add-category"
              element={<AddCategoryForm />}
            />
            <Route path="/dashboard/category" element={<GetCategory />} />
            <Route
              path="/dashboard/update-category/:id"
              element={<UpdateCategoryPage />}
            />

            {/* orders */}
            <Route path="/dashboard/orders" element={<GetOrder />} />

            {/* customers */}
            <Route path="/dashboard/customers" element={<GetCustomer />} />
          </Route>

          {/* User layout */}
          <Route element={<UserLayout />}>
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/carts" element={<Cart />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
