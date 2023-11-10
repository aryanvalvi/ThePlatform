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

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  userdata = req.user;

  res.redirect(`http://localhost:5173`);

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
