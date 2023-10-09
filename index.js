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
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/api/user", require("./src/routes/userRoutes"));
app.use("/api/employee", require("./src/routes/employeeRoutes"));
app.use("/api/supplier", require("./src/routes/supplierRoutes"));
app.use("/api/material", require("./src/routes/materialRoutes"));
app.use("/api/order", require("./src/routes/orderRoute"));
app.use("/api/product", require("./src/routes/productRoute"));
app.use("/api/suggestion", require("./src/routes/suggestionRoutes"));
app.use("/api/dashboard", require("./src/routes/dashboardRoute"));

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
