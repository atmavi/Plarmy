const Product = require('../model/product');


exports.home = (req, res) => {
   res.redirect('/api/products');
};

exports.list = (req, res) => {
   Product.find({}, (err, products) => {
      res.json(err ? "Something went wrong" : products);
   });
};

exports.add = (req, res) => {
   Product.create(
      {
         name: 'Orange',
         price: 100,
         sellVolume: 'per kilo',
         image: './img/products/orange.png',
         author: 'Me',
         type: 'fruit',
         entered: {
            type: Date, default: Date.now
         }
      },
      (err, newProduct) => {
         if (err) {
            console.log(err);
         } else {
            console.log(newProduct);
            res.json(newProduct)
         }
      });
};

exports.detail = (req, res) => {
   Product.findById(req.params.id, (err, product) => {
      res.json(err ? "Something went wrong" : product);
   });
};

exports.update = (req, res) => {
   Product.findByIdAndUpdate(req.params.id, {}, (err, product) => {
      res.json(err ? "Something went wrong" : product);
   });
};

exports.delete = (req, res) => {
   Product.findByIdAndRemove(req.params.id, (err) => {
      res.json(err ? "Something went wrong" : "Product has been deleted.");
   });
};





