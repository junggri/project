import jwt from "jsonwebtoken";

export function createToken(req, res, email, name) {
  let token = jwt.sign(
    {
      email: email,
      username: name,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "2s",
      issuer: "localhost",
      subject: "userinfo",
    }
  );

  res.cookie("jwttoken", token, { httpOnly: true });
}
