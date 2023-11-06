const express = require("express");
const router = express();
const explore = require("../controller/Explore");
const cors = require("cors");

router.use(
  cors({
    origin: "http://localhost:5173",
  })
);
router.get("/explore", explore);

module.exports = router;
