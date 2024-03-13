import mongoose from "mongoose";

export const moduleSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Enter Module name!!"],
	},
	description: {
		type: String,
		required: [true, "Enter Module description!!"],
	},
	document_URL: {
		type: String,
		required: [true, "Enter Module document url!!"],
	},
	path: {
		type: String,
		required: [true, "Enter Module Path!!"],
	},
	provided_links: {
		type: String,
		required: [true, "Enter Module provided links!!"],
	},
	play_list: {
		type: Object,
	},
});
