import mongoose from "mongoose";

const docSchema = new mongoose.Schema({
	branches: {
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
		type: Array({
			title: String,
			doc: String,
		}),
		required: [true, "enter docs !!"],
	},
});

const Doc = mongoose.model("Doc", docSchema);
export default Doc;

const doc = {
	branch: ["mip"],
	semester: "s1",
	module: "circuit",
	docs: [
		{
			title: "doc 1 title",
			doc: "this is doc",
		},
	],
};
