import { createAdminQuery, getAllAdminsQuery } from "../models/adminModel.js";

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

export const getAllAdmin = async (req, res, next) => {
  try {
    const admins = await getAllAdminsQuery();
    handleResponse(res, 200, "Admin Featched Successfully", admins);
  } catch (error) {
    next(error);
  }
};
