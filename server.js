const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

//import Routes
const postRoute = require("./routes/post");
const authRoute = require("./routes/auth");

//import body parser => parsing data json
const bodyParser = require("body-parser");

//Gunakan app.use(express.json()); untuk menghandle req.body tanpa menggunakan body-par

app.use(bodyParser.json());

//midlleware
app.use("/post", postRoute);
app.use("/api/user", authRoute);

//connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("connet to db successfully!");
});

app.listen(4000, () => {
  console.log("server is running now");
});
