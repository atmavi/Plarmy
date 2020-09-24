const { request } = require("express");
const express = require("express"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  LocalStrategy = require("passport-local");

const jwt = require("jsonwebtoken");
const app = express();

require("dotenv").config();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.json());

//MODELS
const User = require("./models/user");

//ROUTES
const productRoutes = require("./routes/productRoutes");

//CONTROLLERS
const authController = require("./controllers/authController");

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

//AUTH ROUTES
app.post("/api/register", authController.register);

app.post("/api/login", passport.authenticate("local"), authController.login);

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
