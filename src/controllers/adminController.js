import {
  createAdminQuery,
  getAdminByIdQuery,
  getAllAdminsQuery,
  updateAdminQuery,
} from "../models/adminModel.js";

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

export const getAdminById = async (req, res, next) => {
  try {
    const admin = await getAdminByIdQuery(req.params.id);
    if (!admin) {
      return handleResponse(res, 404, "Admin Not Found");
    }
    return handleResponse(res, 200, "Admin Feathed Successfully", admin);
  } catch (error) {
    next(error);
  }
};

export const updateAdmin = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const updateAdmin = await updateAdminQuery(
      req.params.id,
      username,
      email,
      password
    );
    if (!updateAdmin) {
      return handleResponse(res, 404, "Admin Not Found");
    }
    return handleResponse(res, 200, "Admin Update Successfully", updateAdmin);
  } catch (error) {
    next(error);
  }
};
