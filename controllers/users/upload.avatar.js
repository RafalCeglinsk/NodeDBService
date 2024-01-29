import jimp from "jimp";
import fs from "fs";
import path from "path";

const uploadAvatar = async (req, res, next) => {
  try {
    const image = await jimp.read(req.file.path);
    await image.resize(250, 250).writeAsync(req.file.path);

    const dir = path.join("public", "avatars");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const newPath = path.join(dir, req.file.filename);
    fs.renameSync(req.file.path, newPath);

    req.body.avatarURL = `/avatars/${req.file.filename}`;

    res.status(200).json({ avatarURL: req.body.avatarURL });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { uploadAvatar };
