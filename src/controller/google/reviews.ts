import { Request, Response, NextFunction } from "express";
import google from "google-play-scraper";
import { Google } from "../../model/google/index";

export const reviewsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const params = req.body;
    console.log("params: ", params);
    const result = await google.reviews(params);
    console.log("result: ", result);
    //@ts-ignore
    res.status(200).json(new Google().reviews(result.data));
  } catch (error) {
    console.log("error: ", error);
    next(error);
  }
};
