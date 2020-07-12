import jwt from "jsonwebtoken";

export default function (req: any, res: any) {
  const token = req.cookies.jwttoken;
  try {
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    console.error(error);
  }
}
