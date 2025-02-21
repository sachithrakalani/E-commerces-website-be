import {
  createWinesQuery,
  deleteWinesQuery,
  getAllWinesQuery,
  getWinesByIdQuery,
  updateWinesQuey,
} from "../models/winesModel.js";

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
    handleResponse(res, 200, "Wines Featched Successfully", wines);
  } catch (error) {
    next(error);
  }
};

export const getWineById = async (req, res, next) => {
  try {
    const wines = await getWinesByIdQuery(req.params.id);
    if (!wines) {
      return handleResponse(res, 404, "Wine is Not Found");
    }
    return handleResponse(res, 200, "Wine Featched Successfully", wines);
  } catch (error) {
    next(error);
  }
};

export const updateWine = async (req, res, next) => {
  const { winesname, price, description, manufacturedate, expirationdate } =
    req.body;
  try {
    const updateWine = await updateWinesQuey(
      req.params.id,
      winesname,
      price,
      description,
      manufacturedate,
      expirationdate
    );
    if (!updateWine) {
      return handleResponse(res, 404, "Wine id Not Found");
    }
    return handleResponse(res, 200, "Wine Update Successfully", updateWine);
  } catch (error) {
    next(error);
  }
};

export const deleteWine = async (req, res, next) => {
  try {
    const deleteWine = await deleteWinesQuery(req.params.id);
    if (!deleteWine) {
      return handleResponse(res, 404, "Wine is Not Found");
    }
    return handleResponse(res, 200, "Wine Delete Successfully", deleteWine);
  } catch (error) {
    next(error);
  }
};
