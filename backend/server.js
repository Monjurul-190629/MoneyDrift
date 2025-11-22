const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("MoneyDrift API is running...");
});

// Start server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("server is created on port " + PORT);
});
