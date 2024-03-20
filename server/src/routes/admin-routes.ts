import { Router } from "express";
import {
	postModuleDocs,
	postPlayList,
	postSingleDocToModule,
	postSingleVideoToPlaylist,
} from "../controllers/admin-controllers.js";

const adminRouter = Router();

adminRouter.post("/add/docs", postModuleDocs);
adminRouter.post("/add/playlist", postPlayList);

// single doc
adminRouter.patch("/add/docs/single", postSingleDocToModule);
adminRouter.patch("/add/playlist/single", postSingleVideoToPlaylist);

export { adminRouter };
