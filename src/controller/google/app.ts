import { Request, Response, NextFunction } from "express";
import google from "google-play-scraper";

export const appController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const params = req.body;
    console.log("params: ", params);
    const result = await google.app(params);
    console.log("result: ", result);
    res.status(200).json(result);
  } catch (error) {
    console.log("error: ", error);
    next(error);
  }
};
