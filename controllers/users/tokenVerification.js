import { User } from "#models/users.schema.js";

const verifyToken = async (req, res) => {
  const { verificationToken } = req.params;
  const verifiedUser = await User.findOneAndUpdate(
    { verificationToken },
    { verificationToken: null, verify: true }
  );
  if (!verifiedUser) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.status(200).json({
    message: "Verification successful",
  });
};

export { verifyToken };
