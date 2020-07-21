const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
   next();
})

mongoose
   .connect('mongodb://localhost/api-plarmy', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
   })
   .then(() => {
      console.log("Connected to DB!");
   })
   .catch((err) => {
      console.log("ERROR:" + err.message);
   });


//CONFIG SCHEMA
const productSchema = mongoose.Schema({
   title: String,
   image: String,
   price: Number,
   author: String,
   entered: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);

app.get('/api', (req, res) => {
   res.json('Home');
});

//GET ALL PRODUCTS
app.get('/api/products', (req, res) => {
   Product.find({}, (err, products) => {
      if (err) {
         res.json("Something went wrong");
      } else {
         res.json(products);
      }
   });
});

//CREATE PRODUCTS
app.post('/api/products', (req, res) => {
   Product.create(
      //Test data only will soon be deleted
      {
         title: 'Orage',
         image: 'https://images.pexels.com/photos/42059/citrus-diet-food-fresh-42059.jpeg?auto=compress&cs=tinysrgb&h=350',
         price: 30.20,
         author: 'Me',
      },
      (err, newProduct) => {
         if (err) {
            console.log(err);
         } else {
            console.log(newProduct);
            res.json(newProduct)
         }
      });
});

//SHOW A PRODUCT
app.get('/api/products/:id', (req, res) => {
   Product.findById(req.params.id, (err, product) => {
      if (err) {
         console.log(err);
      } else {
         res.json(product)
      }
   });
});

//UPDATE
app.put('/api/products/:id', (req, res) => {
   Product.findByIdAndUpdate(req.params.id, {}, (err, product) => {
      if (err) {
         console.log(err);
      } else {
         res.json(product)
      }
   });
});

//DELETE
app.delete('/api/products/:id', (req, res) => {
   Product.findByIdAndRemove(req.params.id, (err) => {
      if (err) {
         res.json(err);
      } else {
         res.json('Product has been deleted.');
      }
   });
});

app.listen(4000, () => {
   console.log('App has started on port 4000');
});