const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require(".././models/userModel");
const { decode } = require("jsonwebtoken");
const Employee = require("../models/employeeModel");
const {
  createToken,
  validateToken,
  validateTokenAdmin,
} = require("../middleware/JWT");

router.post("/register", validateTokenAdmin, async (req, res) => {
  const { username, password, employee_id, role } = req.body;
  try {
    const hash_password = await bcrypt.hash(password, 10);
    await User.create({
      username: username,
      password: hash_password,
      employee_id: employee_id,
      role: role,
    });
    res.json({ message: "User added successfully" });
  } catch (err) {
    if (err.code === 11000)
      return res.status(400).json({ error: "Username already exists" });
    res.status(400).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });

  if (!user) return res.json({ message: "User doesn't exist" });
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.json({ message: "Invalid password" });
  } else {
    const accessToken = createToken(user);
    res.cookie("access-token", accessToken, { maxAge: 10000 });
    res.json({ message: "Login successfull" });
  }
});

router.get("/user-info", validateToken, async (req, res) => {
  const data = decode(req.cookies["access-token"]);
  const employee_id = data.employee_id;

  const employee = await Employee.findById(employee_id);
  res.json({ usercredential: data, employee: employee });
});

router.get("/logout", (req, res) => {
  res.clearCookie("access-token");
  res.json({ message: "You successfully logged out" });
});

module.exports = router;
