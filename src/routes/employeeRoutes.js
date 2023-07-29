const express = require("express");
const router = express.Router();
const jwt = require("../middleware/JWT");
const { getAllEmployees, addEmployee, getEmployeeDetails } = require("../middleware/employee");

router.get("/getAll", jwt.validateTokenAdmin, getAllEmployees);
router.post("/add-employee", jwt.validateTokenAdmin, addEmployee);
router.get("/employee-details/:id", jwt.validateToken, getEmployeeDetails);
module.exports = router;
