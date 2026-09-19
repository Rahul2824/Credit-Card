const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);
dns.setDefaultResultOrder("ipv4first");

const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
require("dotenv").config();

const app = express();

// CORS
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://credit-card-ygak.onrender.com"
  ]
}));

app.use(express.json());

const PORT = process.env.PORT || 5000;
const url = process.env.MONGO_URL;

const client = new MongoClient(url);

const dbname = "api";
const collectionname = "users";

async function connection() {
  try {
    await client.connect();

    console.log("MongoDB Connected Successfully");

    return client.db(dbname);

  } catch (error) {
    console.log("MongoDB Connection Error:", error);
    throw error;
  }
}

app.get("/api/users", async (req, resp) => {
  try {
    const db = await connection();

    const collection = db.collection(collectionname);

    const data = await collection.find({}).toArray();

    console.log("DATA FROM MONGODB:", data);

    resp.status(200).json(data);

  } catch (error) {
    console.log("GET ERROR:", error);

    resp.status(500).json({
      message: "Data fetch failed",
      error: error.message
    });
  }
});
app.post("/api/users", async (req, resp) => {
  try {
    const db = await connection();

    const collection = db.collection(collectionname);

    const userData = req.body;

    console.log("DATA RECEIVED:", userData);

    const result = await collection.insertOne(userData);

    resp.status(201).json({
      message: "Data saved successfully",
      insertedId: result.insertedId
    });

  } catch (error) {
    console.log("POST ERROR:", error);

    resp.status(500).json({
      message: "Data save failed",
      error: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});