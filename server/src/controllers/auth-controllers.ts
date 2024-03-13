import User from "../models/User.js";
import type express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { config } from "dotenv";
config();
// imports

class SignInError {
	constructor(
		public type: string,
		public message: string,
		public code?: number
	) {}
}

async function generateToken(payload: any) {
	return jwt.sign({ payload }, String(process.env.JWT_SECRET), {
		expiresIn: "1h",
	});
}

// sign in
async function signInController(req: express.Request, res: express.Response) {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email });
		if (!user) throw new SignInError("email", "not exist!!"); // if no user
		const isPassword = await bcrypt.compare(password, String(user.password));
		if (!isPassword) throw new SignInError("password", "wrong credentials!!"); // if no password
		res
			.status(301)
			.cookie("jwt", await generateToken(user._id), {
				maxAge: 1000 * 60 * 60,
				secure: true,
			})
			.send({ success: true });
	} catch (error) {
		return res.status(404).json({ error });
	}
}
///

// sign up
async function signUpController(req: express.Request, res: express.Response) {
	const user = req.body;
	try {
		await User.create({ ...user });
	} catch (error: any) {
		console.log("error in creating user!! \n");
		console.log(error.message);
	}
	res.status(201).json({ message: "user is created successfully:)" });
}
///

export { signInController, signUpController };
