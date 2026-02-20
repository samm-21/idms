// const Employee = require("../models/Employee");

// exports.createEmployee = async (req, res) => {
//   try {
//     const {
//       fullName,
//       dateOfBirth,
//       email,
//       phoneNumber,
//       department,
//       designation,
//       gender
//     } = req.body;

//     const existing = await Employee.findOne({ email });
//     if (existing) {
//       return res.status(400).json({ message: "Email already exists" });
//     }

//     const employee = new Employee({
//       fullName,
//       dateOfBirth,
//       email,
//       phoneNumber,
//       department,
//       designation,
//       gender,
//       image: req.file ? req.file.path : null
//     });

//     await employee.save();

//     res.status(201).json({
//       success: true,
//       message: "Employee created successfully",
//       data: employee
//     });

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// exports.getEmployees = async (req, res) => {
//   try {
//     const { search, department, designation, gender } = req.query;

//     let query = {};

//     if (search) {
//       query.$or = [
//         { fullName: { $regex: search, $options: "i" } },
//         { email: { $regex: search, $options: "i" } },
//         { department: { $regex: search, $options: "i" } }
//       ];
//     }

//     if (department) query.department = department;
//     if (designation) query.designation = designation;
//     if (gender) query.gender = gender;

//     const employees = await Employee.find(query).sort({ createdAt: -1 });

//     res.status(200).json({
//       success: true,
//       count: employees.length,
//       data: employees
//     });

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };



const Employee = require("../models/Employee")

exports.getEmployees = async (req, res, next) => {
  try {
    const { department, designation, gender, search } = req.query

    let query = {}

    if (department) query.department = department
    if (designation) query.designation = designation
    if (gender) query.gender = gender

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } }
      ]
    }

    const employees = await Employee.find(query)

    res.json({ success: true, data: employees })
  } catch (err) {
    next(err)
  }
}

exports.createEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.create(req.body)

    res.status(201).json({
      success: true,
      data: employee
    })
  } catch (err) {
    next(err)
  }
}
