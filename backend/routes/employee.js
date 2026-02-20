// const express = require("express");
// const router = express.Router();
// const { createEmployee, getEmployees } = require("../controllers/employee");
// const upload = require("../middleware/uploads");
// const authMiddleware = require("../middleware/auth");

// router.post(
//   "/",
//   authMiddleware,
//   upload.single("image"),
//   createEmployee
// );
// router.get("/", authMiddleware, getEmployees);


// module.exports = router;




const router = require("express").Router()
const { getEmployees, createEmployee } = require("../controllers/employee")
const auth = require("../middleware/auth")

router.get("/", auth, getEmployees)
router.post("/", auth, createEmployee)

module.exports = router
