const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
   const newUser = new User({ username: req.body.username });
   User.register(newUser, req.body.password, (err, user) => {
      if (err) {
         return res.status(400).json(err);
      }

      passport.authenticate("local")(req, res, () => {
         res.json("A new user has been added.");
      });
   });
};

const refreshTokens = [];

exports.login = (req, res) => {
   const user = req.body;

   const accessToken = generateAccessToken(user);
   const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
   refreshTokens.push(refreshToken);
   res.json({ accessToken: accessToken, refreshToken: refreshToken });

   function generateAccessToken(user) {
      return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
         expiresIn: "24h",
      });
   }
}