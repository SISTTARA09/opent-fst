import User from "../models/User.js";
import type express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { config } from "dotenv";
import { handleCredentialsErrors } from "../errors/auth-errors.js";
import { SignInError } from "../errors/error.constructors.js";
config();
// imports

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
			.json({ success: true });
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
		res.status(201).json({ success: true });
	} catch (error: any) {
		const errorObj = await handleCredentialsErrors(error);
		res.status(500).send({ error: errorObj });
	}
}
///

// activation
async function activationController(
	req: express.Request,
	res: express.Response
) {
	const { activationcode } = req.params;
	try {
		// activate the email
		const user = await User.findOneAndUpdate(
			{ activationCode: activationcode },
			{ $set: { isActive: true } },
			{ new: true }
		);
		///
		if (!user) throw new Error("there is no user");
		return res.status(200).json({ success: true });
	} catch (error: any) {
		res.status(404).json({ error: error.message });
	}
}
///

export { signInController, signUpController, activationController };
