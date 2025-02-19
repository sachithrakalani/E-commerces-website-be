import { createUserQuery } from "../models/userModel.js";

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
