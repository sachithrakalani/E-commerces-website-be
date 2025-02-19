import {
  createUserQuery,
  getAllUsersQuery,
  getUserByIdQuery,
} from "../models/userModel.js";

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const createUser = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const newUser = await createUserQuery(username, email, password);
    handleResponse(res, 201, "User created Successfully", newUser);
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUsersQuery();
    handleResponse(res, 200, "User Featched Successfully", users);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const user = await getUserByIdQuery(req.params.id);
    if (!user) {
      return handleResponse(res, 404, "User Not Found");
    }
    return handleResponse(res, 200, "User featched Successfully", user);
  } catch (error) {
    next(error);
  }
};
