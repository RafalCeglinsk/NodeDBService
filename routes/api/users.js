import express from "express";
import { validateUserData } from "#validation/user.validation.js";
import { signUp } from "../../controllers/users/signUp.js";
import { login } from "../../controllers/users/login.js";
import { logout } from "../../controllers/users/logout.js";
import { auth } from "../../auth/auth.js";

const userRouter = express.Router();

userRouter.post("/signup", validateUserData, signUp);
userRouter.post("/login", validateUserData, login);
userRouter.post("/logout", auth, logout);

export { userRouter };
