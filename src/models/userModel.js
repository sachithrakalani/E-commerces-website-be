import pool from "../config/db.js";

export const createUserQuery = async (username, email, password) => {
    const result = await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING * ",
      [username, email, password]
    );
    return result.rows[0];
  };