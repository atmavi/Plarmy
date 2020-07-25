const router = require('express').Router();
const product_controller = require('../controllers/productController');

router.get('/', product_controller.home);

//GET ALL PRODUCTS
router.get('/products', product_controller.list);

//CREATE PRODUCTS
router.post('/products', product_controller.add);

//SHOW A PRODUCT
router.get('/products/:id', product_controller.detail);

//UPDATE
router.put('/products/:id', product_controller.update);

//DELETE
router.delete('/products/:id', product_controller.delete);


module.exports = router;