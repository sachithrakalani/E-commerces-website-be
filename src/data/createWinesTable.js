import pool from "../config/db.js";

const createWinesTable = async () => {
  const queryText = `CREATE TABLE IF NOT EXISTS wines (
    id SERIAL PRIMARY KEY,
    winesname VARCHAER(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    description TEXT,
    manufacturedate DATE NOT NULL,
    expirationdate DATE NOT NULL
    )
    `;
  try {
    pool.query(queryText);
    console.log("Wines Table is created if not exists");
  } catch (error) {
    next(error);
  }
};

export default createWinesTable;
