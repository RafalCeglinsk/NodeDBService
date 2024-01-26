import { User } from "../../models/users.schema.js";

const logout = async (req, res) => {
  const _id = req.user._id;

  const currentUser = await User.findOne({ _id });
  if (!currentUser) {
    return res.status(401).json({ message: "Not Authorized" });
  }

  // Uaktualnij datę wygaśnięcia tokena na bieżący czas
  currentUser.tokenExpire = Date.now();
  await currentUser.save();

  return res.status(200).json({ message: "User successfully logged out" });
};

export { logout };
