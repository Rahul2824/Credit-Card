const dns = require("dns");

// Google DNS + IPv4
dns.setServers(["8.8.8.8"]);
dns.setDefaultResultOrder("ipv4first");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB Atlas Connected Successfully!");
  })
  .catch((error) => {
    console.log("❌ MongoDB Connection Failed!");
    console.log(error.message);
  });


// Schema
const userSchema = new mongoose.Schema({
  name: String,
  dob: String,
  gender: String,
  adhar: String,
  country: String
});


// Model
const User = mongoose.model("User", userSchema);


// POST API
app.post("/api/users", async (req, res) => {
  try {

    const user = new User(req.body);

    await user.save();

    res.json({
      message: "Data saved successfully",
      user: user
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});


// GET API
app.get("/api/users", async (req, res) => {
  try {

    const users = await User.find();

    res.json(users);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});


// Server
app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});