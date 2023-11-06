const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(cors());

app.get("/", (req, res) => {
  const data = [
    {
      name: "aryan",
    },
  ];
  res.json(data);
});

app.use(express.static(path.join(__dirname, "image")));
app.use("/", require("./routes/route"));
app.listen(5000, () => {
  console.log("server is running on the port 5000");
});
