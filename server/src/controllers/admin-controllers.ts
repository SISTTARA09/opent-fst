import { uploadToDb } from "../utils/add-doc.js";
import { v2 as cloudinary } from "cloudinary";
/// imports

import express from "express";
import { CourDoc, TDDoc } from "../models/Doc.js";
import { CourPlayList, TDPlayList } from "../models/PlayList.js";
import { UpdateWriteOpResult } from "mongoose";

// cloudinary config
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});
///

// document
async function postModuleDocs(req: express.Request, res: express.Response) {
	// const formData = await req.formData();
	// const formValues = Object.fromEntries(formData);
	// try {
	// 	switch (formValues.session) {
	// 		case "cour":
	// 			await CourDoc.create({ ...formValues });
	// 			break;
	// 		case "td":
	// 			await TDDoc.create({ ...formValues });
	// 			break;
	// 		default:
	// 			throw new Error("this session is not supported!!");
	// 	}
	// 	res.json({
	// 		message: "document is added successfully:)",
	// 		success: true,
	// 	});
	// } catch (error: any) {
	// 	res.json({
	// 		message: error.message,
	// 		success: false,
	// 	});
	// }
}
///

// document
// async function postModuleDocs(req: express.Request, res: express.Response) {
// 	const doc = req.body;
// 	try {
// 		switch (doc.session) {
// 			case "cour":
// 				await CourDoc.create({ ...doc });
// 				break;
// 			case "td":
// 				await TDDoc.create({ ...doc });
// 				break;
// 			default:
// 				throw new Error("this session is not supported!!");
// 		}
// 		res.json({ message: "document is added successfully:)", success: true });
// 	} catch (error: any) {
// 		res.status(400).json({ message: error.message, success: false });
// 	}
// }
///
async function postSingleDocToModule(
	req: express.Request,
	res: express.Response
) {
	// const data = await req.formData();
	// try {
	// 	const file: File = data.get("doc") as unknown as File;
	// 	if (!file) throw new Error("file is not exist!!");
	// 	const bytes = await file.arrayBuffer();
	// 	const buffer = Buffer.from(bytes);
	// 	const formValues = Object.fromEntries(data);
	// 	cloudinary.uploader
	// 		.upload_stream(
	// 			{ resource_type: "auto" },
	// 			async (error: any, result: any) => {
	// 				if (error) throw new Error("Error in uploading to cloudinary!!");
	// 				const docURL = result?.secure_url; // img url
	// 				await uploadToDb(formValues, docURL);
	// 			}
	// 		)
	// 		.end(buffer);
	// 	res.json({
	// 		message: "successfully uploaded:)",
	// 		success: true,
	// 	});
	// } catch (error) {
	// 	res.json({
	// 		message: " uploading is failed:)",
	// 		success: false,
	// 	});
	// }
}

// async function postSingleDocToModule(
// 	req: express.Request,
// 	res: express.Response
// ) {
// 	const doc = req.body;

// 	try {
// 		switch (doc.session) {
// 			case "cour":
// 				await CourDoc.updateOne(
// 					{ module: doc.module, semester: doc.semester },
// 					{ $push: { docs: doc.docs } }
// 				);
// 				break;

// 			case "td":
// 				await TDDoc.updateOne(
// 					{ module: doc.module, semester: doc.semester },
// 					{ $push: { docs: doc.docs } }
// 				);
// 				break;
// 			default:
// 				throw new Error("this session is not supported!!");
// 		}
// 		res.json({ message: "document is added successfully:)", success: true });
// 	} catch (error: any) {
// 		res.status(400).json({ message: error.message, success: false });
// 	}
// }

// play list

async function postPlayList(req: express.Request, res: express.Response) {
	const formData = req.body;
	// const formValues = Object.fromEntries(formData);
	console.log(true);

	try {
		switch (formData.session) {
			case "cour":
				await CourPlayList.create({ ...formData });
				break;
			case "td":
				await TDPlayList.create({ ...formData });
				break;
			default:
				throw new Error("this session is not supporteeed!!");
		}
		res.json({
			message: "video module is added successfully:)",
			success: true,
		});
	} catch (error: any) {
		res.json({
			message: error.message,
			success: false,
		});
	}
}
///
// async function postPlayList(req: express.Request, res: express.Response) {
// 	const playList = req.body;
// 	try {
// 		switch (playList.session) {
// 			case "cour":
// 				await CourPlayList.create({ ...playList });
// 				break;
// 			case "td":
// 				await TDPlayList.create({ ...playList });
// 				break;
// 			default:
// 				throw new Error("this session is not supported!!");
// 		}
// 		res.json({ message: "play list is added successfully:)", success: true });
// 	} catch (error: any) {
// 		res.status(400).json({ message: error.message, success: false });
// 	}
// }

async function postSingleVideoToPlaylist(
	req: express.Request,
	res: express.Response
) {
	const formData = await req.formData();
	const formValues = Object.fromEntries(formData);

	let updateResponse: UpdateWriteOpResult;
	// upload to mongo db
	try {
		switch (formValues.session) {
			case "cour":
				updateResponse = await CourPlayList.updateOne(
					{
						module: String(formValues.module),
						semester: String(formValues.semester),
					},
					{
						$push: {
							videos: {
								title: formValues.title,
								path: formValues.path,
							},
						},
					}
				);
				if (!updateResponse.matchedCount)
					throw new Error("palylist is not found!!");
				if (!updateResponse.modifiedCount)
					throw new Error("video is failed to uploaded!!");
				break;

			case "td":
				updateResponse = await TDPlayList.updateOne(
					{
						module: String(formValues.module),
						semester: String(formValues.semester),
					},
					{
						$push: {
							videos: {
								title: formValues.title,
								path: formValues.path,
							},
						},
					}
				);
				if (!updateResponse.matchedCount)
					throw new Error("palylist is not found!!");
				if (!updateResponse.modifiedCount)
					throw new Error("video is failed to uploaded!!");
				break;

			default:
				throw new Error("this session is not supportffed!!");
		}
		res.json({
			message: "video uploaded successfully:)",
			success: true,
		});
	} catch (error: any) {
		res.json({
			message: error.message,
			success: false,
		});
	}
}

// async function postSingleVideoToPlaylist(
// 	req: express.Request,
// 	res: express.Response
// ) {
// 	const videoInfo = req.body;

// 	try {
// 		switch (videoInfo.session) {
// 			case "cour":
// 				await CourPlayList.updateOne(
// 					{ module: videoInfo.module, semester: videoInfo.semester },
// 					{ $push: { videos: videoInfo.video } }
// 				);
// 				break;

// 			case "td":
// 				await TDPlayList.updateOne(
// 					{ module: videoInfo.module, semester: videoInfo.semester },
// 					{ $push: { videos: videoInfo.video } }
// 				);
// 				break;
// 			default:
// 				throw new Error("this session is not supported!!");
// 		}
// 		res.json({ message: "document is added successfully:)", success: true });
// 	} catch (error: any) {
// 		res.status(400).json({ message: error.message, success: false });
// 	}
// }
//
export {
	postModuleDocs,
	postPlayList,
	postSingleDocToModule,
	postSingleVideoToPlaylist,
};
