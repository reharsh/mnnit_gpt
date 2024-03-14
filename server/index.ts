const express = require("express");
const app = express();
const auth = require("./auth");

require("dotenv").config();
const port = process.env.PORT || 3000;

//@ts-ignore
app.post("/signup", (req, res) => {});
app.use("/auth", auth);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
