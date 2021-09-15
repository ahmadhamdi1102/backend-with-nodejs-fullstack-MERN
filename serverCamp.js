const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const BookRoute = require("./routes/books");
require("./db.js");

const app = express();
const port = 4000;

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/book", BookRoute);

app.listen(port, () => {
  console.log("Server berhasil dijalankan pada port " + port);
});
