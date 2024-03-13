import mongoose from "mongoose";
import * as bcrypt from "bcrypt";

// imports
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
});

userSchema.pre("save", async function (nex) {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(String(this.password), salt);
});

export default mongoose.model("User", userSchema);
