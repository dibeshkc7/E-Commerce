const express = require("express");

require("dotenv").config();
const db = require("./Connection/connection");

//initialize
const app = express();
const morgan = require("morgan")
const port = process.env.PORT;
const bodyParser = require("body-parser");

//route import
//user route
const UserRoute = require("./Route/userRoute");

// server users
app.use(bodyParser.json());
app.use("/api", UserRoute);

//server start index
app.get("/", (req, res) => {
  res.send("This is an ecommerce server");
});

app.listen(port, () => {
  console.log(`Server get started at ${port}`);
});
