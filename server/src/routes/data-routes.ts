import { Router } from "express";
import { getStudentData } from "../controllers/data-controllers.js";
// imports

const dataRouter = Router(); // router

// methods
dataRouter.get("/mip/:semester/:module", getStudentData);
///

export { dataRouter };
