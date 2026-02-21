/**
 * One-time script to create a default user for login.
 * Run: node scripts/seedUser.js
 * Requires: MONGO_URI in .env (load from backend folder: dotenv loads from cwd)
 */
require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
const User = mongoose.model("User", userSchema);

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  const email = process.env.SEED_EMAIL || "admin10@idms.com";
  const password = process.env.SEED_PASSWORD || "123456";
  const existing = await User.findOne({ email });
  if (existing) {
    console.log("User already exists:", email);
    process.exit(0);
    return;
  }
  const hashed = await bcrypt.hash(password, 10);
  await User.create({ email, password: hashed });
  console.log("Created user:", email);
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
