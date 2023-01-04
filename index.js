const connectDB = require("./src/db/db");
const express = require("express");

connectDB();
const app = express();
app.use("/api/user", require("./src/routes/userRoutes"));

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
