const express = require("express");

const {
  addCategory,
  updateCategory,
  deleteCategory,
  findCategory,
  viewCategory,
} = require("../Controller/categoryController");
const router = express.Router();

router.post("/addcategory", addCategory);
router.get("/viewcategory", viewCategory);
router.put("/updatecategory/:id", updateCategory);
router.delete("/deletecategory/:id", deleteCategory);
router.get("/findcategory/:id", findCategory);

module.exports = router;
