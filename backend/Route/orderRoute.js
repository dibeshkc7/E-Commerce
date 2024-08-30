const express = require("express");
const {
  createOrder,
  getAllOrders,
  getOrderByUser,
  updateOrderedProduct,
  deleteOrderedProduct,
} = require("../Controller/orderController");
const {
  createOrderRequest,
  getOrderRequestById,
  getOrderRequest,
} = require("../Controller/orderRequestController");

const router = express.Router();

router.post("/create-order", createOrder);
router.get("/get-order", getAllOrders);
router.get("/get-order/:userId", getOrderByUser);
router.put("/update-order/:orderId", updateOrderedProduct);
router.delete("/delete-order/:orderId", deleteOrderedProduct);

router.post("/order-request", createOrderRequest);
router.get("/order-request/:id", getOrderRequestById);
router.get("/order-request", getOrderRequest);

module.exports = router;
