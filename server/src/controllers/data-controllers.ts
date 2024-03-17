import express from "express";
import PlayList from "../models/PlayList.js";
import Doc from "../models/Doc.js";
// imports

// mip
async function getStudentData(req: express.Request, res: express.Response) {
	const { semester, module } = req.params;

	let docs = await Doc.findOne({ semester, module });
	const playList = await PlayList.findOne({ semester, module });
	if (!docs) throw new Error("there is no data");
	res.status(200).json({ docs, playList });
}
///

export { getStudentData };
