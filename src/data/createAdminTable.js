import pool from "../config/db.js";

const createAdminTable = async () => {
  const queryText = `CREATE TABLE IF NOT EXISTS admin (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(20) NOT NULL
    )
    `;
  try {
    pool.query(queryText);
    console.log("Admin Table is created if not exists");
  } catch (error) {
    console.log("Error Creating Admin table : ", error);
  }
};

export default createAdminTable;
