const express = require("express");
const router = express.Router();
const jwt = require("../middleware/JWT");
const {
  registerUser,
  loginUser,
  userInfo,
  logoutUser,
  changePassword,
} = require("../middleware/user");

router.post("/register", jwt.validateTokenAdmin, registerUser);
router.post("/login", loginUser);
router.get("/user-info", jwt.validateToken, userInfo);
router.get("/logout", logoutUser);
router.put("/change-password/:id", jwt.validateToken, changePassword);

module.exports = router;
