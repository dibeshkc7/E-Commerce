const express = require("express");
const { addProduct, getAllProduct, updateProduct, relatedProduct, getProductById } = require("../Controller/productController");
const upload = require("../utils/upload");

//
const router = express.Router();

router.post("/addproduct", upload.single('productImage'), addProduct);
router.get("/products", getAllProduct);
router.get("/product/:id",getProductById)
router.get("/related-products/:id", relatedProduct);
router.put("/update-product/:id", upload.single('productImage'),updateProduct);
module.exports = router;