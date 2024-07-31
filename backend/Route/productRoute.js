const express = require("express");
const { addProduct, getAllProduct } = require("../Controller/productController");

//
const router = express.Router();

router.post("/addproduct", addProduct);
router.get("/products", getAllProduct);

module.exports = router;