import jwt from "jsonwebtoken";

export default function refreshToken(req, res, email, name) {
  let refresh_token = jwt.sign(
    {
      email: email,
      username: name,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30s",
      issuer: "localhost",
      subject: "userinfo",
    }
  );
  return refresh_token;
}
