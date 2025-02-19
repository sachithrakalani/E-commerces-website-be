import pool from "../config/db.js";

export const createUserQuery = async (username, email, password) => {
  const result = await pool.query(
    "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING * ",
    [username, email, password]
  );
  return result.rows[0];
};

export const getAllUsersQuery = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};

export const getUserByIdQuery = async (id) => {
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return result.rows[0];
};
