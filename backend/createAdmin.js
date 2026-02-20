require("dotenv").config()
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const User = require("./models/User")

mongoose.connect(process.env.MONGO_URI)

async function createUser() {
  const hashed = await bcrypt.hash("123456", 10)

  await User.create({
    name: "Admin",
    email: "admin@gmail.com",
    password: hashed
  })

  console.log("Admin created")
  process.exit()
}

createUser()
