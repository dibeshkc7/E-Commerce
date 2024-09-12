import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../interface/product";
import useSWR from "swr";
import { getProducts } from "../../API/productApi";
import { AppConfig } from "../../config/app.config";
import StarRating from "../ratings/rating";

// interface IProduct {
//   category: string,
//   description: string,
//   id: number,
//   image: string,
//   rating: {
//     rate: number,
//     count: number
//   }
//   title: string,
//   price: number
// }

const Products = () => {
  // const [products, setProducts] = useState<IProduct[]>([])

  // useEffect(() => {

  //   const getProducts = async () => {
  //     try {
  //       const res = await fetch('https://fakestoreapi.com/products');
  //       const products = await res.json();
  //       setProducts(products)
  //     } catch (error: any) {
  //       console.log(error)
  //     }
  //   }

  //   getProducts();

  // }, [])

  // console.log(products)

  const { data: products } = useSWR("products", getProducts);

  return (
    <div className="grid grid-cols-4 gap-10 p-10">
      {products?.map((product) => (
        <div key={product._id} className="border p-5 rounded-lg space-y-5">
          <div className="flex items-center justify-center">
            <img
              src={`${product?.productImage}`}
              alt={product.productName}
              className="h-[400px] w-full object-cover"
            />
          </div>
          <div className="border-t mt-2">
            <p className="font-bold capitalize">
              {product?.productCategory?.categoryName}
            </p>
            <p className="line-clamp-1">{product.productName}</p>
            <div>
              <span className="font-bold">Rating:</span>{" "}
              {product?.productRating}
              <StarRating
                count={product?.productRating || 0}
                productId={product._id}
              />
            </div>
            <p>
              <span className="font-bold">Price:</span> {product.productPrice}
            </p>
            <p className="line-clamp-2">{product.productDescription}</p>
          </div>
          <div>
            <Link
              className="bg-red-500 text-white px-4 py-2 rounded-lg "
              to={`/products/${product._id}`}
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
