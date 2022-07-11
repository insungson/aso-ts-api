import { Request, Response, NextFunction } from "express";
import { Apple } from "../../model/apple/index";

//@ts-ignore
import apple from "app-store-scraper";

export const appController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const params = req.body;
    console.log("params: ", params);
    const result = await apple.app(params);
    console.log("result: ", result);
    res.status(200).json(new Apple().app(result));
  } catch (error) {
    console.log("error: ", error);
    next(error);
  }
};
