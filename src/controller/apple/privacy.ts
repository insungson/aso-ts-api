//@ts-ignore
import apple from "app-store-scraper";
import { Request, Response, NextFunction } from "express";
import { Apple } from "../../model/apple/index";

export const privacyController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const params = req.body;
    console.log("params: ", params);
    const result = await apple.privacy(params);
    console.log("result: ", result);
    res.status(200).json(result);
  } catch (error) {
    console.log("error: ", error);
    next(error);
  }
};
