import mongoose from "mongoose";

const docSchema = new mongoose.Schema({
	branch: {
		type: Array("string"),
		required: [true, "enter wich Branches !!"],
	},
	semester: {
		type: String,
		required: [true, "Enter wich semester!!"],
	},
	module: {
		type: String,
		required: [true, "Enter wich module!!"],
	},
	docs: {
		type: Array(String),
		required: [true, "enter docs !!"],
	},
});

const Doc = mongoose.model("Doc", docSchema);
export default Doc;
