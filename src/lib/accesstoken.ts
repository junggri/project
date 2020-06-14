import jwt from "jsonwebtoken";

export function createToken(req, res) {
  let token = jwt.sign(
    {
      email: "Asdasd",
      pwd: "Asdasdas",
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
export function createToken2(req, res) {
  let token = jwt.sign(
    {
      email: "Asdasd",
      pwd: "Asdasdas",
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "2s",
      issuer: "localhost",
      subject: "userinfo",
    }
  );

  res.cookie("jwttoken2", token, { httpOnly: true });
}
