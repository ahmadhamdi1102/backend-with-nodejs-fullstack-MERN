const akses = require("express").Router();
const BukuModel = require("../models/Book");

akses.get("/", (req, res) => {
  BukuModel.find()
    .then((books) => res.status(200).json(books))
    .catch((error) => res.status(400).json(error.message));
});

akses.delete("/delete/:id", (req, res) => {
  BukuModel.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("Buku berhasil di hapus"))
    .catch((error) => res.status(400).json(error.message));
});

akses.put("/update/:id", (req, res) => {
  BukuModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedBook) => res.status(200).json(updatedBook))
    .catch((error) => res.status(400).json(error.message));
});

akses.post("/add", (req, res) => {
  BukuModel.create(req.body)
    .then((createdBook) => res.status(200).json(createdBook))
    .catch((error) => res.status(400).json(error.message));
});

module.exports = akses;
