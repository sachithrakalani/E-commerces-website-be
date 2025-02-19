import pool from "../config/db.js";

const createUserTable = async () => {
  const querytext = `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
    )`;
  try {
    pool.query(querytext);
    console.log("User Table is created if not exists");
  } catch (error) {
    console.log("Error Creating user table : ", error);
  }
};

export default createUserTable;
