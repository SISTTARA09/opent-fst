import type express from "express";
function profileController(req: express.Request, res: express.Response) {
	console.log("from controller: ", req.user);
	res.status(200).json({ user: req.user });
}

export { profileController };
