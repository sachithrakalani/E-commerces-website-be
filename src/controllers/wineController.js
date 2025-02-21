import { createWinesQuery, getAllWinesQuery } from "../models/winesModel.js";

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

export const getAllWines = async (req, res, next) => {
  try {
    const wines = await getAllWinesQuery(req, res, next);
    handleResponse(res, "200", "Wines Featched Successfully", wines);
  } catch (error) {
    next(error);
  }
};
