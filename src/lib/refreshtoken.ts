import jwt from "jsonwebtoken";

export default function refreshToken(req: any, res: any, email: string, name: string) {
  let refresh_token = jwt.sign(
    {
      email: email,
      username: name,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "6m",
      issuer: "localhost",
      subject: "userinfo",
    }
  );
  return refresh_token;
}
