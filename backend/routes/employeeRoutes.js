const router = require("express").Router();
const Employee = require("../models/Employee");
const auth = require("../middleware/authMiddleware");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post("/", auth, upload.single("photo"), async (req, res) => {
  try {
    const { fullName, dob, email, department, phone, designation, gender } = req.body;

    if (!fullName?.trim()) return res.status(400).json({ msg: "Full name is required" });
    if (!dob) return res.status(400).json({ msg: "Date of birth is required" });
    if (!email?.trim()) return res.status(400).json({ msg: "Email is required" });
    if (!EMAIL_REGEX.test(email.trim())) return res.status(400).json({ msg: "Invalid email format" });
    if (!phone?.trim()) return res.status(400).json({ msg: "Phone number is required" });
    if (!/^\d{10}$/.test(phone.trim())) return res.status(400).json({ msg: "Phone number must be exactly 10 digits" });
    if (!department?.trim()) return res.status(400).json({ msg: "Department is required" });
    if (!designation?.trim()) return res.status(400).json({ msg: "Designation is required" });
    if (!gender?.trim()) return res.status(400).json({ msg: "Gender is required" });

    const employee = new Employee({
      fullName: fullName.trim(),
      dob,
      email: email.trim().toLowerCase(),
      department: department.trim(),
      phone: phone.trim(),
      designation: designation.trim(),
      gender: gender.trim(),
      photo: req.file ? req.file.filename : null
    });

    await employee.save();
    res.status(201).json(employee);
  } catch (err) {
    if (err.code === 11000) return res.status(400).json({ msg: "Email already exists" });
    res.status(500).json({ msg: err.message || "Failed to create employee" });
  }
});

router.get("/", auth, async (req, res) => {
  const { search, department, designation, gender } = req.query;

  let query = {};

  if (search) {
    query.$or = [
      { fullName: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } },
      { department: { $regex: search, $options: "i" } }
    ];
  }

  if (department) query.department = department;
  if (designation) query.designation = designation;
  if (gender) query.gender = gender;

  const employees = await Employee.find(query);
  res.json(employees);
});

module.exports = router;
