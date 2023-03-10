const connectDB = require("./src/db/db");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use(
  cors({
    origin: "*",
  })
);
app.use("/api/user", require("./src/routes/userRoutes"));
app.use("/api/employee", require("./src/routes/employeeRoutes"));
app.use("/api/supplier", require("./src/routes/supplierRoutes"));
app.use("/api/material", require("./src/routes/materialRoutes"));
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
