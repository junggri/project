import jwt from "jsonwebtoken";

export function createToken(req: any, res: any, email: string, name: string, Id: string) {
  let token = jwt.sign(
    {
      email: email,
      username: name,
      user_objectId: Id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30m",
      issuer: "localhost",
      subject: "userinfo",
    }
  );
  res.cookie("pjwttoken", token, { httpOnly: true, path: "/provide" });
  //secure
}
