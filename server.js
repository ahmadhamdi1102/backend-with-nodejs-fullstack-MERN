const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

//import Routes
const postRoute = require("./routes/post");
//import body parser => parsing data json
const bodyParser = require("body-parser");

app.use(bodyParser.json());

//midlleware
app.use("/post", postRoute);

//connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("connet to db successfully!");
});

app.listen(4000, () => {
  console.log("server is running now");
});
