const express = require("express");
const {
  addProduct,
  getAllProduct,
  updateProduct,
  relatedProduct,
  getProductById,
  deleteProduct,
} = require("../Controller/productController");
const upload = require("../utils/upload");
const { getRecommendations } = require("../algorithm/filtering");

//
const router = express.Router();

router.post("/addproduct", upload.single("productImage"), addProduct);
router.get("/products", getAllProduct);
router.get("/product/:id", getProductById);
router.get("/related-products/:id", relatedProduct);
router.put("/update-product/:id", upload.single("productImage"), updateProduct);
router.delete("/delete-product/:id", deleteProduct);
router.get("/recommend-product/:userId", getRecommendations);

module.exports = router;
