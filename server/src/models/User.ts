import mongoose from "mongoose";
import * as bcrypt from "bcrypt";
import crypto from "node:crypto";
import { sendMail } from "../configs/auth-mail.js";
// imports

// schema
const userSchema = new mongoose.Schema({
	fName: {
		type: String,
		required: [true, "Enter Your First Name!!"],
		minlength: [3, "must be 3 or more!!"],
		maxlength: [11, "must be less than 3!!"],
	},
	lName: {
		type: String,
		required: [true, "Enter Your First Name!!"],
		minlength: [3, "must be 3 or more!!"],
		maxlength: [11, "must be less than 11!!"],
	},
	email: {
		type: String,
		required: [true, "Enter your email!!"],
		unique: true,
	},
	branch: {
		type: String,
		required: [true, "Enter your branch!!"],
	},
	password: {
		type: String,
		minlength: [6, "Enter a strong password!!"],
	},
	isActive: {
		type: Boolean,
		default: false,
		required: true,
	},
	activationCode: {
		type: String,
		unique: true,
	},
});
///

userSchema.pre("save", async function (next) {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(String(this.password), salt);

	const buf = crypto.randomBytes(19);
	try {
		this.activationCode = buf.toString("hex");
		await sendMail(this.email, this.activationCode);
	} catch (error) {
		console.log("error in sending email");
	}
});

export default mongoose.model("User", userSchema);
