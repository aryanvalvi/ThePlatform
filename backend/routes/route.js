const express = require("express");
const router = express();
const explore = require("../controller/Explore");
const cors = require("cors");
const passport = require("passport");
const jwt = require("jsonwebtoken");

let userdata;

router.use(
  cors({
    origin: "http://localhost:5173",
  })
);
router.get("/explore", explore);

//auth login
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);
router.get("/verify-token", (req, res) => {
  const { token } = req.query;
  if (!token) {
    return res.status(400).json({ error: "Token not provided" });
  }

  // Verify the token and decode user information
  jwt.verify(token, "adafafaraeaf", (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    }

    res.json({ user: decoded.user });
  });
});

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  userdata = req.user;
  const token = jwt.sign({ user: req.user }, "adafafaraeaf", {
    expiresIn: "1h",
  });

  // res.cookie("jwtToken", token, { httpOnly: true });
  res.redirect(`http://localhost:5173/?token=${token}`);
  // res.redirect(`http://localhost:5173`);

  // res.json(req.user);
});

// getuserdata;
router.get("/getuserdata", (req, res) => {
  // user = req.user;
  res.json(userdata);
});

router.post("/logout", (req, res) => {
  userdata = null;
});
//sample
// router.get;

module.exports = router;
