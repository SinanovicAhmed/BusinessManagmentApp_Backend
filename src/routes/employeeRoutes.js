const express = require("express");
const router = express.Router();
const jwt = require("../middleware/JWT");
const {
  getAllEmployees,
  addEmployee,
  getEmployeeDetails,
  dismissEmployee,
} = require("../middleware/employee");

router.get("/getAll", jwt.validateTokenAdmin, getAllEmployees);
router.post("/add-employee", jwt.validateTokenAdmin, addEmployee);
router.get("/employee-details/:id", jwt.validateTokenAdmin, getEmployeeDetails);
router.delete("/dismiss-employee/:id", jwt.validateTokenAdmin, dismissEmployee);
module.exports = router;
