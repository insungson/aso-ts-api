//@ts-ignore
import apple from "app-store-scraper";
import { Request, Response, NextFunction } from "express";
import { Apple } from "../../model/apple/index";

export const searchController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const params = req.body;
    console.log("params: ", params);
    const result = await apple.search(params);
    console.log("result: ", result);
    res.status(200).json(new Apple().search(result));
  } catch (error) {
    console.log("error: ", error);
    next(error);
  }
};
