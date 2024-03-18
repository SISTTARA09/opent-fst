import { Router } from "express";
import {
	getAllDocs,
	getAllPlayLists,
	getSingleDoc,
	getSinglePlayList,
} from "../controllers/data-controllers.js";
// imports

const dataRouter = Router(); // router

// methods
// dataRouter.get("/:branch/:semester/:module", getStudentData);
///

// get all docs
dataRouter.get("/docs/:branch/:semester", getAllDocs);

dataRouter.get("/docs/:branch/:semester/:module/:session", getSingleDoc);

dataRouter.get("/docs/:branch/:semester", getAllPlayLists);

dataRouter.get("/docs/:branch/:semester/:module", getSinglePlayList);

// get single doc
export { dataRouter };
