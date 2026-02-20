// const mongoose = require("mongoose");

// const employeeSchema = new mongoose.Schema(
//   {
//     fullName: {
//       type: String,
//       required: true,
//       trim: true
//     },

//     dateOfBirth: {
//       type: Date,
//       required: true
//     },

//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       lowercase: true,
//       match: [/^\S+@\S+\.\S+$/, "Invalid email format"]
//     },

//     phoneNumber: {
//       type: String,
//       required: true,
//       match: [/^\d{10}$/, "Phone must be 10 digits"]
//     },

//     department: {
//       type: String,
//       required: true,
//       enum: [
//         "Human Resources",
//         "Engineering",
//         "Finance",
//         "Marketing",
//         "Sales",
//         "Operations",
//         "Customer Support",
//         "IT",
//         "Legal",
//         "Research & Development"
//       ]
//     },

//     designation: {
//       type: String,
//       required: true,
//       enum: [
//         "Intern",
//         "Junior Developer",
//         "Senior Developer",
//         "Manager",
//         "Team Lead",
//         "HR Executive",
//         "Marketing Specialist",
//         "Accountant",
//         "Product Manager",
//         "Director"
//       ]
//     },

//     gender: {
//       type: String,
//       required: true,
//       enum: ["Male", "Female", "Other"]
//     },

//     image: {
//       type: String 
//     }
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Employee", employeeSchema);





const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  gender: String,
  dob: String,
  department: String,
  designation: String
}, { timestamps: true })

module.exports = mongoose.model("Employee", employeeSchema)
