const express = require('express');

require("dotenv").config();
const db = require("./Connection/connection");

//initialize
const app = express();
const morgan = require("morgan");
const port = process.env.PORT;
const bodyParser = require("body-parser");

//route import
//user route
const UserRoute = require("./Route/userRoute");
const ProductRoute = require("./Route/productRoute");
const CategoryRoute = require("./Route/categoryRoute");

// server users
app.use(bodyParser.json());

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public/uploads"));

app.use("/api", UserRoute);
app.use("/api", ProductRoute);
app.use("/api", CategoryRoute);

app.use('/public/uploads', express.static('public/uploads'));

//server start index
app.get("/", (req, res) => {
  res.send("This is an ecommerce server");
});

app.listen(port, () => {
  console.log(`Server get started at ${port}`);
});
