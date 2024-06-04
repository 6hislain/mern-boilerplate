import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

function guestMiddleware(req: Request, res: Response, next: NextFunction) {
  if (!req.headers.authorization) next();
  else res.redirect("/");
}

function userMiddleware(req: Request, res: Response, next: NextFunction) {
  if (req.headers.authorization) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.JWT_TOKEN_SECRET || "", (err, user) => {
        if (err) return res.sendStatus(403);
        next();
      });
    } else res.sendStatus(401);
  } else res.redirect("/login");
}

export { guestMiddleware, userMiddleware };
