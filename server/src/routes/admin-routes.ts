import { Router } from "express";
import {
	deleteSingleDoc,
	deleteSingleVideo,
	postModuleDocs,
	postPlayList,
	postSingleDocToModule,
	postSingleVideoToPlaylist,
} from "../controllers/admin-controllers.js";

const adminRouter = Router();

adminRouter.post("/add/docs", postModuleDocs);
adminRouter.post("/add/playlist", postPlayList);

// single doc
adminRouter.patch("/add/doc", postSingleDocToModule);
adminRouter.patch("/add/video", postSingleVideoToPlaylist);

adminRouter.delete("/delete/doc", deleteSingleDoc);
adminRouter.delete("/delete/video", deleteSingleVideo);
export { adminRouter };
