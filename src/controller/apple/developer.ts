const apple = require("app-store-scraper");
import { Request, Response, NextFunction } from "express";

export const developerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const params = req.body;
    console.log("params: ", params);
    const result = await apple.developer(params);
    console.log("result: ", result);
    res.status(200).json(result);
  } catch (error) {
    console.log("error: ", error);
    next(error);
  }
};
