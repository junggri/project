import jwt from "jsonwebtoken";

export default function refreshToken() {
  let refresh_token = jwt.sign({}, process.env.JWT_SECRET, {
    expiresIn: "1d",
    issuer: "localhost",
    subject: "userinfo",
  });
  return refresh_token;
}
