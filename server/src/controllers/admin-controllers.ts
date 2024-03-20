import express from "express";
import { CourDoc, TDDoc } from "../models/Doc.js";
import { CourPlayList, TDPlayList } from "../models/PlayList.js";

// document
async function postModuleDocs(req: express.Request, res: express.Response) {
	const doc = req.body;
	try {
		switch (doc.session) {
			case "cour":
				await CourDoc.create({ ...doc });
				break;
			case "td":
				await TDDoc.create({ ...doc });
				break;
			default:
				throw new Error("this session is not supported!!");
		}
		res.json({ message: "document is added successfully:)", success: true });
	} catch (error: any) {
		res.status(400).json({ message: error.message, success: false });
	}
}
///

async function postSingleDocToModule(
	req: express.Request,
	res: express.Response
) {
	const doc = req.body;

	try {
		switch (doc.session) {
			case "cour":
				await CourDoc.updateOne(
					{ module: doc.module, semester: doc.semester },
					{ $push: { docs: doc.docs } }
				);
				break;

			case "td":
				await TDDoc.updateOne(
					{ module: doc.module, semester: doc.semester },
					{ $push: { docs: doc.docs } }
				);
				break;
			default:
				throw new Error("this session is not supported!!");
		}
		res.json({ message: "document is added successfully:)", success: true });
	} catch (error: any) {
		res.status(400).json({ message: error.message, success: false });
	}
}

// play list
async function postPlayList(req: express.Request, res: express.Response) {
	const playList = req.body;
	try {
		switch (playList.session) {
			case "cour":
				await CourPlayList.create({ ...playList });
				break;
			case "td":
				await TDPlayList.create({ ...playList });
				break;
			default:
				throw new Error("this session is not supported!!");
		}
		res.json({ message: "play list is added successfully:)", success: true });
	} catch (error: any) {
		res.status(400).json({ message: error.message, success: false });
	}
}
///

async function postSingleVideoToPlaylist(
	req: express.Request,
	res: express.Response
) {
	const videoInfo = req.body;

	try {
		switch (videoInfo.session) {
			case "cour":
				await CourPlayList.updateOne(
					{ module: videoInfo.module, semester: videoInfo.semester },
					{ $push: { videos: videoInfo.video } }
				);
				break;

			case "td":
				await TDPlayList.updateOne(
					{ module: videoInfo.module, semester: videoInfo.semester },
					{ $push: { videos: videoInfo.video } }
				);
				break;
			default:
				throw new Error("this session is not supported!!");
		}
		res.json({ message: "document is added successfully:)", success: true });
	} catch (error: any) {
		res.status(400).json({ message: error.message, success: false });
	}
}

export {
	postModuleDocs,
	postPlayList,
	postSingleDocToModule,
	postSingleVideoToPlaylist,
};
