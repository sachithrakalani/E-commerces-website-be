import pool from "../config/db.js";

export const createAdminQuery = async (username, email, password) => {
  const result = await pool.query(
    "INSERT INTO admin (username, email, password) VALUES ($1, $2, $3) RETURNING * ",
    [username, email, password]
  );
  return result.rows[0];
};

export const getAllAdminsQuery = async () => {
  const result = await pool.query("SELECT * FROM admin");
  return result.rows;
};

export const getAdminByIdQuery = async (id) => {
  const result = await pool.query("SELECT * FROM admin WHERE id = $1", [id]);
  return result.rows[0];
};

export const updateAdminQuery = async (id, username, email, password) => {
  const result = await pool.query(
    "UPDATE admin SET username = $1, email = $2, password = $3 WHERE id = $4 RETURNING *",
    [username, email, password, id]
  );
  return result.rows[0];
};

export const deleteAdminQuery = async (id) => {
  const result = await pool.query(
    "DELETE FROM admin WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};
