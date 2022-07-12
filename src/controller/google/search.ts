import { Request, Response, NextFunction } from "express";
import google from "google-play-scraper";
import { Google } from "../../model/google/index";

export const searchController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const params = req.body;
    console.log("params: ", params);
    const result = await google.search(params);
    console.log("result: ", result);
    res.status(200).json(new Google().search(result));
  } catch (error) {
    console.log("error: ", error);
    next(error);
  }
};
