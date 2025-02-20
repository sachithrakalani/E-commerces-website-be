import pool from "../config/db.js";

export const createAdminQuery = async (username, email, password) => {
  const result = await pool.query(
    "INSERT INTO admin (username, email, password) VALUES ($1, $2, $3",
    [username, email, password]
  );
  return result.rows[0];
};

export const getAllAdminsQuery = async () => {
  const result = await pool.query("SELECT * FROM admin");
  return result.rows;
};
