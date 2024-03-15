import { Router } from "express";
import {
	activationController,
	signInController,
	signUpController,
} from "../controllers/auth-controllers.js";

const authRouter = Router();

authRouter.post("/signin", signInController);

authRouter.post("/signup", signUpController);

// activation

authRouter.get("/confirm/:activationcode", activationController);
///
export { authRouter };
