import express from "express";
import { validateUserData } from "#validation/user.validation.js";
import { signUp } from "../../controllers/users/signUp.js";
import { login } from "../../controllers/users/login.js";

const userRouter = express.Router();

userRouter.post("/users/signup", validateUserData, signUp);
userRouter.post("/users/login", validateUserData, login);

export { userRouter };
