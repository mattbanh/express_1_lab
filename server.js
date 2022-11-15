const express = require("express");
const app = express();
const cors = require("cors");

const ingredients = ["lettuce", "mustard", "pork", "rice"];

app.use(cors());

app.get("/", function (req, res) {
  res.send("Welcome to /");
});

app.get("/famousdish", (req, res) => {
  res.send("fried chicken");
});

app.get("/ingredients", (req, res) => {
  res.json(JSON.stringify(ingredients));
});

app.get("/ingredients/:ingredient", (req, res) => {
  if (ingredients.find((ingredient) => ingredient === req.params.ingredient)) {
    res.send(`${req.params.ingredient} is in stock`);
  } else {
    res.send(`${req.params.ingredient} is not in stock`);
  }
});

app.post("/order", (req, res) => {
  res
    .status(503)
    .send(
      "We are not taking orders at this time. Our service is temporarily down."
    );
});

app.listen(8080, () => {
  console.log("Nodemon is doing its thang in the 8080 💫");
});
