const Employee = require("../models/employeeModel");
const User = require("../models/userModel");

exports.getAllEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json({ employees });
};

exports.addEmployee = async (req, res) => {
  const employee = req.body;
  try {
    await Employee.create(employee);
    res.json({ message: "Employee successfuly saved to DB" });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ message: "Email already exists" });
    }
    res.status(400).json({ message: err.message });
  }
};

exports.getEmployeeDetails = async (req, res) => {
  const employee_id = req.params.id;
  try {
    const employee = await Employee.findById(employee_id);
    const user = await User.findOne({ employee_id: employee_id });

    res.json({ employee: employee, user: user });
  } catch (err) {
    res.json({ error: err.message });
  }
};

exports.dismissEmployee = async (req, res) => {
  const employee_id = req.params.id;

  try {
    const patchDismissalDate = await Employee.findByIdAndUpdate(employee_id, {
      dismissal_date: new Date(),
    });
    const employeeAccount = await User.findOne({ employee_id: employee_id });
    if (employeeAccount) employeeAccount.remove();

    res.json({ message: "Employee is successfully dismissed!" });
  } catch (err) {
    res.json({ message: err.message });
  }
};
