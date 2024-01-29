import express from "express";
import multer from "multer";

import { validateUserData } from "#validation/user.validation.js";
import { signUp } from "#controllers/users/signUp.js";
import { login } from "#controllers/users/login.js";
import { logout } from "#controllers/users/logout.js";
import { auth } from "#auth/auth.js";
import { currentUser } from "#controllers/users/currentUser.js";
import { uploadAvatar } from "#controllers/users/upload.avatar.js";

const upload = multer({ dest: "tmp" });

const userRouter = express.Router();

userRouter.post("/signup", upload.single("avatar"), validateUserData, signUp);
userRouter.post("/login", validateUserData, login);
userRouter.post("/logout", auth, logout);
userRouter.get("/current", auth, currentUser);
userRouter.patch("/avatars", upload.single("avatar"), auth, uploadAvatar);

export { userRouter };
