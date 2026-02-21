const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: "Invalid Credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });

  const expiresIn = process.env.TOKEN_EXPIRE || "1h";
  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn }
  );

  // Match cookie lifetime to token (e.g. "1h" -> 3600000 ms, "24h" -> 86400000 ms)
  const maxAgeMs = expiresIn === "24h" ? 86400000 : 3600000;

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: maxAgeMs
  });

  res.json({ msg: "Login Success" });
};

exports.logout = (req, res) => {
  res.clearCookie("token");
  res.json({ msg: "Logged Out" });
};
