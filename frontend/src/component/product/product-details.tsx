import useSWR from "swr";
import { getProductById } from "../../API/productApi";
import RelatedProducts from "./related-products";
import { displayImage } from "../../utils/helper";
import Button from "../reusable/button/button";
import { useAppDispatch } from "../../hooks/redux";
import { useCallback } from "react";
import { addProductToCart } from "../../redux/slice/order-slice";
import { toast } from "sonner";

interface Props {
  id: string;
}

const ProductDetail = ({ id }: Props) => {
  const { data: product } = useSWR(`product/${id}`, getProductById);
  const dispatch = useAppDispatch();

  const handleAddToCart = useCallback(async () => {
    const product = {
      productId: id,
      totalOrder: 1
    }

    dispatch(addProductToCart(product))
    toast.message("Added to cart")
  }, [dispatch, id])


  return (
    <div>
      <div className="border p-5 rounded-lg space-y-5 max-w-screen-xl mx-auto">
        <div>
          <div className="flex items-center justify-center">
            <img
              src={displayImage(product?.productImage)}
              alt={product?.productName}
              className="h-[500px]"
            />
          </div>
          <div className="border-t mt-2">
            <p className="font-bold capitalize">
              {product?.productCategory.categoryName}
            </p>
            <p className="line-clamp-1">{product?.productName}</p>
            <div>
              <span className="font-bold">Rating:</span>{" "}
              {product?.productRating}
            </div>
            <p>
              <span className="font-bold">Price: </span> ${" "}
              {product?.productPrice}
            </p>
            <p className="line-clamp-2">{product?.productDescription}</p>
          </div>
          <div></div>
        </div>
        <Button
          buttonType="button"
          buttonColor={{ primary: true }}
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </div>
      <RelatedProducts id={id} />
    </div>
  );
};

export default ProductDetail;
