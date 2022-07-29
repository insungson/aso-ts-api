import { Request, Response, NextFunction } from "express";
import google from "google-play-scraper";
import { Google } from "../../model/google/index";

export const listController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const params = req.body;
    console.log("params: ", params);
    const result = await google.list({ fullDetail: true, ...params });
    console.log("result: ", result);
    res.status(200).json(new Google().list(result));
  } catch (error) {
    console.log("error: ", error);
    next(error);
  }
};
