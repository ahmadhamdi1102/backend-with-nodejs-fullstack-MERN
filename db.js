const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/reactdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "koneksi database gagal!"));
db.once("open", () => {
  console.log("koneksi database berhasil");
});
