const jwt = require("jsonwebtoken");
const router = require("express").Router();
const product_controller = require("../controllers/productController");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

router.get("/", product_controller.home);

//GET ALL PRODUCTS
router.get("/products", product_controller.list);

//CREATE PRODUCTS
router.post("/products", product_controller.add);

//SHOW A PRODUCT
router.get("/products/:id", product_controller.detail);

//UPDATE
router.put("/products/:id", product_controller.update);

//DELETE
router.delete("/products/:id", product_controller.delete);

module.exports = router;
