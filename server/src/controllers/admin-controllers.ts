// import express from "express";
// import { CourDoc, TDDoc } from "../models/Doc.js";
// import PlayList from "../models/PlayList.js";

// // document
// async function postDocument(req: express.Request, res: express.Response) {
// 	const doc = req.body;
// 	try {
// 		await CourDoc.create({ ...doc });
// 		res.json({ message: "document is added successfully:)", success: true });
// 	} catch (error: any) {
// 		res.status(400).json({ message: error.message, success: false });
// 	}
// }
// ///

// // play list
// async function postPlayList(req: express.Request, res: express.Response) {
// 	const playList = req.body;
// 	try {
// 		await PlayList.create({ ...playList });
// 		res.json({ message: "play list is added successfully:)", success: true });
// 	} catch (error: any) {
// 		res.status(400).json({ message: error.message, success: false });
// 	}
// }
// ///
// export { postDocument, postPlayList };
