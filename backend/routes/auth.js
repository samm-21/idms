const router = require("express").Router();
const { register, login, logout } = require("../controllers/auth");

router.post("/register", register); // use once
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
