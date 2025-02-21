import { createWinesQuery } from "../models/winesModel.js";

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const createWine = async (req, res, next) => {
  const { winesname, price, description, manufacturedate, expirationdate } =
    req.body;
  try {
    const newWine = await createWinesQuery(
      winesname,
      price,
      description,
      manufacturedate,
      expirationdate
    );
    handleResponse(res, 201, "Wine Created Successfully", newWine);
  } catch (error) {
    next(error);
  }
};
