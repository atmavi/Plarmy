const express = require("express"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  LocalStrategy = require("passport-local");

const app = express();

require("dotenv").config();

//MODELS
const Product = require("./models/product");
const User = require("./models/user");

//CONTROLLERS
const product_controller = require("./controllers/productController");

//ROUTES
const productRoutes = require("./routes/productRoutes");

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

///////////////////////////////////
//PASSPORT CONFIG
app.use(
  require("express-session")({
    secret: process.env.PASSPORT_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//////////////////////////////////

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type",
    "Authorization"
  );
  next();
});

app.use(express.json());

//AUTH ROUTES
app.post("/api/register", (req, res) => {
  const newUser = new User({ username: req.body.username });
  User.register(newUser, req.body.password, (err, user) => {
    if (err) {
      return res.status(400).json(err);
    }

    passport.authenticate("local")(req, res, () => {
      res.json("A new user has been added.");
    });
  });
});

app.post("/api/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

mongoose
  .connect("mongodb://localhost/api-plarmy", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((err) => {
    console.log("UNABLE TO CONNECT TO DB.:" + err.message);
  });

app.use("/api", productRoutes);

app.listen(4000, () => {
  console.log("App has started on port 4000");
});
