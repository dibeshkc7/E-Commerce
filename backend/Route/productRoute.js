const express = require("express");
const { addProduct, getAllProduct } = require("../Controller/productController");
const upload = require("../utils/upload");

//
const router = express.Router();

router.post("/addproduct", upload.single('productImage'), addProduct);
router.get("/products", getAllProduct);

module.exports = router;