const Product = require("../models/product");

exports.home = (req, res) => {
  res.redirect("/api/products");
};

exports.list = (req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.json(`Error: ${err}`));
};

exports.add = (req, res) => {
  Product.create(req.body)
    .then(() => res.json("New product has been added"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

exports.detail = (req, res) => {
  console.log(req.user);
  Product.findById(req.params.id)
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

exports.update = (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json("Product successfully updated"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

exports.delete = (req, res) => {
  Product.findByIdAndRemove(req.params.id, (err) => {
    res.json(err ? "Something went wrong" : "Product has been deleted.");
  });
};
