import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pool from "./config/db.js";
import createUserTable from "./data/createUserTable.js";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

//Create Server
app.listen(3000, () => {
  console.log("Server is running in port 3000");
});

createUserTable();

// Testing POSTGRES Connection
app.get("/", async (req, res) => {
  console.log("Start");
  const result = await pool.query("SELECT current_database()");
  console.log("result", result.rows);
  res.send(`The database name is : ${result.rows[0].current_database}`);
});

//Create Responce
app.get("/", (req, res) => [res.send("Hello Node")]);
