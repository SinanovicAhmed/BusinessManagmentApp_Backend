const bcrypt = require("bcrypt");
const Employee = require("../models/employeeModel");
const User = require(".././models/userModel");
const jwt = require("../middleware/JWT");
const { decode } = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
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
    if (err.code === 11000) return res.status(400).json({ error: "Username already exists" });
    res.status(400).json({ error: err.message });
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });

  if (!user) return res.status(404).json({ message: "User doesn't exist" });
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(400).json({ message: "Invalid password" });
  } else {
    const accessToken = jwt.createToken(user);
    res.cookie("access-token", accessToken, { maxAge: 86400000 });
    res.json({ message: "Login successfull" });
  }
};

exports.userInfo = async (req, res) => {
  const data = decode(req.cookies["access-token"]);
  const employee_id = data.employee_id;

  const employee = await Employee.findById(employee_id);
  res.json({ usercredential: data, employee: employee });
};

exports.logoutUser = (req, res) => {
  res.clearCookie("access-token");
  res.json({ message: "You successfully logged out" });
};

exports.changePassword = async (req, res) => {
  const { oldPassword, newPassowrd } = req.body;
  const id = req.params.id;
  try {
    const user = await User.findById({ _id: id });
    const match = await bcrypt.compare(oldPassword, user.password);
    if (!match) {
      return res.json({ message: "Entered old password is not valid" });
    } else {
      const hash_password = await bcrypt.hash(newPassowrd, 10);
      await User.findByIdAndUpdate({ _id: id }, { password: hash_password });
    }
    res.json({ message: "Password is updated" });
  } catch (err) {
    res.json({ message: err.message });
  }
};
