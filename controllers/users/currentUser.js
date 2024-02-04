import jwt from "jsonwebtoken";
import { User } from "#models/users.schema.js";

const currentUser = async (req, res) => {
  const token = req.headers["authorization"].split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Not authorized" });
  }

  try {
    const decoded = jwt.verify(token, "secret");
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: "Not authorized" });
    }

    return res.status(200).json({
      email: user.email,
      subscription: user.subscription,
    });
  } catch (err) {
    return res.status(401).json({ message: "Not authorized" });
  }
};

export { currentUser };
