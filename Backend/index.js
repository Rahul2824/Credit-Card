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

const url = process.env.MONGO_URL;
const client = new MongoClient(url);

const dbname = "api";
const collectionname = "users";

async function connection() {
  await client.connect();
  
  const db = client.db(dbname);
  return db;
}

app.post("/api/users", async (req, resp) => {
  try {
    const db = await connection();

    const collection = db.collection(collectionname);

    const result = await collection.insertOne(req.body);

    console.log(result);

    resp.status(201).json({
      message: "Data saved successfully",
      result: result
    });

  } catch (error) {
    console.log(error);

    resp.status(500).json({
      message: "Data save failed",
      error: error.message
    });
  }
});

app.get("/api/users", async (req, resp) => {
  try {
    const db = await connection();

    const collection = db.collection(collectionname);

    const data = await collection.find().toArray();

    console.log(data);

    resp.json(data);

  } catch (error) {
    console.log(error);

    resp.status(500).json({
      message: error.message
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});