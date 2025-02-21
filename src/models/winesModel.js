import pool from "../config/db.js";

export const createWinesQuery = async (
  winesname,
  price,
  description,
  manufacturedate,
  expirationtdate
) => {
  const result = await pool.query(
    "INSERT INTO wines (winesname, price, description, manufacturedate, expirationdate) VALUES ($1, $2, $3, $4, $5) RETURNING * ",
    [winesname, price, description, manufacturedate, expirationtdate]
  );
  return result.rows[0];
};

export const getAllWinesQuery = async () => {
  const result = await pool.query("SELECT * FROM wines");
  return result.rows;
};

export const getWinesByIdQuery = async (id) => {
  const result = await pool.query("SELECT * FROM wines WHERE id = $1", [id]);
  return result.rows[0];
};
