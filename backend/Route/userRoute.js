const express = require("express");
const {
  CreateUser,
  getAllUser,
  updateUser,
  logIn,
  verifyJWT,
  getUserById,
  deleteUser,
} = require("../Controller/usercontroller");
const {  jwtMiddleware } = require("..//middleware/middleware");

const router = express.Router();

router.post("/register", CreateUser);
router.get("/users", jwtMiddleware, getAllUser);
router.put("/update-user/:id", jwtMiddleware, updateUser);
router.post("/login", logIn);
router.get("/getuser/:id", jwtMiddleware, getUserById);
router.delete("/delete/:id", jwtMiddleware, deleteUser);

module.exports = router;

