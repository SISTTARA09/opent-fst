import mongoose from "mongoose";

const docSchema = new mongoose.Schema({
	isNewDoc: {
		type: Boolean,
		default: false,
	},
	Prof: String,
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
			title: { type: String },
			doc: { type: String },
			type: { type: String },
		}),
		required: [true, " enter the docs !!"],
	},
});

const CourDoc = mongoose.model("CourDoc", docSchema);
const TDDoc = mongoose.model("TDDoc", docSchema);
export { CourDoc, TDDoc };

const doc = {
	branches: ["mip"],
	semester: "s1",
	module: "circuit",
	isNew: true,
	docs: [
		{
			title: "cour 1 title",
			doc: "this is doc",
			type: "pdf",
		},
	],
};
