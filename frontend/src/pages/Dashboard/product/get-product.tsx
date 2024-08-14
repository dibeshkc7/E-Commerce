import useSWR from "swr";
import React from "react";
import { getProducts } from "../../../API/productApi";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../@/components/ui/table";
import Products from "../../../component/product/products";
import { displayImage } from "../../../utils/helper";

const GetProduct = () => {
  const { data: products } = useSWR("viewproduct", getProducts);

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">SN</TableHead>
            <TableHead>Product name</TableHead>
            <TableHead>Product Image</TableHead>
            <TableHead>Product category</TableHead>
            <TableHead>Product price</TableHead>
            <TableHead>Total products</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.map((product, idx) => (
            <TableRow key={product._id}>
              <TableCell className="font-medium">{idx + 1}</TableCell>
              <TableCell className="font-medium">
                {product.productName}
              </TableCell>
              <TableCell className="font-medium">
                <img
                  src={displayImage(product.productImage)}
                  alt={product.productName}
                  className="h-20 w-20"
                />
              </TableCell>
              <TableCell>{product.productCategory.categoryName}</TableCell>
              <TableCell className="text-center">
                {product.productPrice}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
      </Table>
    </div>
  );
};

export default GetProduct;
