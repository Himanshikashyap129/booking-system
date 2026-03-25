import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  try {
    console.log("HEADERS:", req.headers);

    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "No header" });
    }

    const token = authHeader.split(" ")[1];
    console.log("TOKEN:", token);

    const decoded = jwt.verify(token, "secretkey");
    console.log("DECODED:", decoded);

    req.user = decoded;

    next(); 

  } catch (error) {
    console.log("ERROR:", error.message);
    return res.status(401).json({ message: "Token failed" });
  }
};