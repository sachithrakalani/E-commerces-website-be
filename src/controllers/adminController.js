import { createAdminQuery } from "../models/adminModel.js";

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const createAdmin = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const newAdmin = await createAdminQuery(username, email, password);
    handleResponse(res, 201, "Admin Created Successfully", newAdmin);
  } catch (error) {
    next(error);
  }
};
