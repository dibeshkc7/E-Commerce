import { useCallback, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../@/components/ui/table";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  getOrderProducts,
  updateProductToCart,
} from "../../../redux/slice/order-slice";
import { store } from "../../../redux/store";
import { IOrder } from "../../../interface/order";
import { toast } from "sonner";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { orderProducts } = useAppSelector((store) => store.order);

  useEffect(() => {
    dispatch(getOrderProducts());
  }, [dispatch]);

  const increaseOrder = useCallback(
    (order: IOrder) => {
      const finalOrder = order.totalOrder++;
      const update = {
        orderId: order._id,
        totalOrder: finalOrder,
      };
      dispatch(updateProductToCart(update));
      toast.success("Updated to cart");
    },
    [dispatch]
  );

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product name</TableHead>
            <TableHead>Product price</TableHead>
            <TableHead>Total amount</TableHead>
            <TableHead>Total order</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderProducts.map((order) => (
            <TableRow key={order._id}>
              <TableCell className="font-medium">
                {order.product.productName}
              </TableCell>
              <TableCell>{order.product.productName}</TableCell>
              <TableCell>
                {order.product.productPrice} * Number(order?totalOrder)
              </TableCell>
              <TableCell className="text-right">{order.totalOrder}</TableCell>
              <TableCell>
                <div className="flex items-center border w-[150px] rounded-[6px] overflow-hidden">
                  <button
                    type="button"
                    className="bg-red-500 px-4 py-1 text-white text-xl font-bold w-full"
                  >
                    -
                  </button>

                  <span className="px-2 w-full text-center"> </span>
                  <button
                    type="button"
                    className="bg-blue-900 px-4 py-1 text-white text-xl font-bold w-full"
                  >
                    +
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Cart;
