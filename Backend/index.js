const dns = require("dns");

dns.setServers(["8.8.8.8"]);
dns.setDefaultResultOrder("ipv4first");

const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const url = process.env.MONGO_URL;

if (!url) {
  console.log("MONGO_URL is missing");
  process.exit(1);
}

const client = new MongoClient(url);

const dbname = "api";
const collectionname = "users";

let db;

// MongoDB connection
async function connection() {
  try {
    await client.connect();

    console.log("MongoDB Connected Successfully");

    db = client.db(dbname);

    return db;
  } catch (error) {
    console.log("MongoDB Connection Error:", error);
    throw error;
  }
}

// POST
app.post("/api/users", async (req, resp) => {
  try {
    const collection = db.collection(collectionname);

    const result = await collection.insertOne(req.body);

    console.log("Inserted:", result);

    resp.status(201).json({
      message: "Data saved successfully",
      result: result
    });

  } catch (error) {
    console.log("POST Error:", error);

    resp.status(500).json({
      message: "Data save failed",
      error: error.message
    });
  }
});

// GET
app.get("/api/users", async (req, resp) => {
  try {
    const collection = db.collection(collectionname);

    const data = await collection.find().toArray();

    console.log("Users:", data);

    resp.status(200).json(data);

  } catch (error) {
    console.log("GET Error:", error);

    resp.status(500).json({
      message: error.message
    });
  }
});

// Start server + connect MongoDB
async function startServer() {
  try {
    await connection();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.log("Server failed to start:", error);
  }
}

startServer();