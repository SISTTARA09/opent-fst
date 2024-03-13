import { Router } from "express";
import {
	signInController,
	signUpController,
} from "../controllers/auth-controllers.js";

const authRouter = Router();

authRouter.post("/signin", signInController);

authRouter.post("/signup", signUpController);

export { authRouter };
