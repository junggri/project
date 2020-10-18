import { NextFunction } from "express";

export interface Decoded {
  email: string;
  user_objectId: string;
  username: string;
}

export interface Err {
  message: string;
  stack: string;
  status: number;
}
