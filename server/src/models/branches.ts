import mongoose from "mongoose";

// schema
const BranchSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Enter Branch Name!!"],
		unique: true,
	},
	description: {
		type: String,
		required: [true, "Enter Branch description!!"],
	},
	img_url: {
		type: String,
		required: [true, "Enter Branch Img!!"],
	},
	success_average: {
		type: Number,
		required: [true, "Enter Branch Success Average!!"],
	},
});
///

// model
export default mongoose.model("Branch", BranchSchema);
///
