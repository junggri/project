import jwt from "jsonwebtoken";

export function createToken(res: any, email: string, name: string) {
  let token = jwt.sign(
    {
      email: email,
      username: name,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30m",
      issuer: "localhost",
      subject: "userinfo",
    }
  );
  res.cookie("jwttoken", token, { httpOnly: true, path: "/web" });
  //secure
}
