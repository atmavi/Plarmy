app.get('/api', product_controller.home);

//GET ALL PRODUCTS
app.get('/api/products', product_controller.list);

//CREATE PRODUCTS
app.post('/api/products', product_controller.add);

//SHOW A PRODUCT
app.get('/api/products/:id', product_controller.detail);

//UPDATE
app.put('/api/products/:id', product_controller.update);

//DELETE
app.delete('/api/products/:id', product_controller.delete);
