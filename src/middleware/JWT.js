const { sign, verify, decode } = require("jsonwebtoken");
require("dotenv").config();

const createToken = (user) => {
  const accessToken = sign(
    {
      username: user.username,
      role: user.role,
      employee_id: user.employee_id,
    },
    process.env.TOKEN_SECRET
  );
  return accessToken;
};

const validateToken = (req, res, next) => {
  const accessToken = req.cookies["access-token"];

  if (!accessToken)
    return res.status(400).json({ message: "User not Authenticated" });

  try {
    const validToken = verify(accessToken, process.env.TOKEN_SECRET);
    if (validToken) {
      req.authenticated = true;
      return next();
    }
  } catch (err) {
    return res.status(403).json({ message: "Invalid token" });
  }
};

const validateTokenAdmin = (req, res, next) => {
  const accessToken = req.cookies["access-token"];
  const user = decode(req.cookies["access-token"]);

  if (!accessToken)
    return res.status(400).json({ message: "User not Authenticated" });

  try {
    const validToken = verify(accessToken, process.env.TOKEN_SECRET);
    if (validToken && user.role === "ADMIN") {
      req.authenticated = true;
      return next();
    } else {
      return res
        .status(403)
        .json({ message: "You dont have permission for this" });
    }
  } catch (err) {
    return res.status(403).json({ message: "Invalid token" });
  }
};

module.exports = { createToken, validateToken, validateTokenAdmin };
