const { default: userModel } = require("../Model/userModel");
const bcrypt = require("bcrypt");
const UserModel = require("../Model/userModel");
const jwt = require("jsonwebtoken")
const { expressjwt: ExpressJWT} = require("express-jwt")
const SECRETKEY = process.env.SECRET_KEY

// controller

exports.CreateUser = async (req, res) => {
  const checkEmail = await UserModel.findOne({ email: req.body.email });
  const checkContact = await UserModel.findOne({
    "userDetail.phoneNumber": req.body.phoneNumber,
  });

  if (checkContact) {
    return res.status(400).json({ error: "Contact already exi st" });
  }
  if (checkEmail) {
    return res.status(400).json({ error: "Email already exist" });
  } else {
    const hashPassword = await bcrypt.hash(req.body.password, 10);

    const CreateUser = await new UserModel({
      email: req.body.email,
      password: hashPassword,
      "userDetail.firstName": req.body.firstName,
      "userDetail.middleName": req.body.middleName,
      "userDetail.lastName": req.body.lastName,
      "userDetail.phoneNumber": req.body.phoneNumber,
    });

    const saveUser = await CreateUser.save();
    if (!saveUser) {
      return res.status(400).json({ error: "User registration failed" });
    } else {
      return res.status(400).json({ message: "User registration succesful" });
    }
  }
};

exports.getAllUser = async (req, res) => {
  const users = await UserModel.find();
  if (!users) {
    return res.status(400).json({ message: "Users not found" });
  }
  return res.send(users);
};

exports.updateUser = async (req, res) => {
  const update = await UserModel.findByIdAndUpdate(
    req.params.id,
    {
      "userDetail.firstName": req.body.firstName,
      "userDetail.middleName": req.body.middleName,
      "userDetail.lastName": req.body.lastName,
      "userDetail.gender": req.body.gender,
      "userDetail.address": req.body.address,
    },
    { new: true }
  );

  if (!update) {
    return res.json({ message: "Not Found" }).status(400);
  }
  res.send(update);
};

exports.logIn = async (req, res) => {
  const { email, password } = req.body;

  const checkUser = await UserModel.findOne({ email: email });

  if (!checkUser) {
    return res.json({ error: "User not found" }).status(400);
  }
  const checkPassword = await bcrypt.compare(password, checkUser.password);

  const access_Token = await jwt.sign(
    {
      name: checkUser.userDetail.firstName,
      id: checkUser._id,
      email: checkUser.email,
    },
    process.env.SECRET_KEY,
    { expiresIn: "1d" }
  );

  if (!checkPassword) {
    return res.json({ error: "Password is invalid" }).status(400);
  }
  return res.json({ message: "Login Successful",accessToken:access_Token }).status(201);
}

exports.verifyJWT = ExpressJWT({
secret: SECRETKEY,
algorithms: ["HS256"]
})
