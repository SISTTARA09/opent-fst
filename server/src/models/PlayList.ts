import mongoose from "mongoose";

const playListSchema = new mongoose.Schema({
	branches: {
		type: Array(String),
		required: [true, "Enter wich branches!!"],
	},
	module: {
		type: String,
		required: [true, "enter module name"],
	},
	semestre: {
		type: String,
		required: [true, "enter semester name"],
	},
	owner: String,
	description: {
		type: String,
		required: [true, "Enter a description for the playlist"],
	},
	videos: {
		type: Array({
			title: {
				type: String,
				required: [true, "Enter a title for the video!!"],
			},
			path: {
				type: String,
				required: [true, "enter the video path!!"],
			},
		}),
	},
});

const PlayList = mongoose.model("PlayList", playListSchema);
export default PlayList;
