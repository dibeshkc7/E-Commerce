const express = require("express");
const { addProduct, getAllProduct, updateProduct, relatedProduct } = require("../Controller/productController");
const upload = require("../utils/upload");

//
const router = express.Router();

router.post("/addproduct", upload.single('productImage'), addProduct);
router.get("/products", getAllProduct);
// router.get("/related-products/:id", relatedProduct);
router.put("/update-product/:id", updateProduct);
module.exports = router;