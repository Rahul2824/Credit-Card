const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);
dns.setDefaultResultOrder("ipv4first");

const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: "https://credit-card-git-main-rahul2824.vercel.app"
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});