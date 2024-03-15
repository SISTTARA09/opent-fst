import { Router } from "express";
import { getDocsController } from "../controllers/docs-controllers";
// imports

const docsRouter = Router();

docsRouter.get("/docs", getDocsController);

export { docsRouter };
