import jwt from "jsonwebtoken";

export default function refreshToken(req: any, res: any) {
  let token = jwt.sign(
    {
      email: "Asdasd",
      pwd: "Asdasdas",
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "5m",
      issuer: "localhost",
      subject: "userinfo",
    }
  );
  res.cookie("refreshtoken", token, { httpOnly: true });
}
