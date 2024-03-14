import { config } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { authRouter } from "./routes/auth-routes.js";
import { userRouter } from "./routes/user-routes.js";
import "./configs/pass-jwt-auth.js";
import cors from "cors";
import crypto from "node:crypto";
config();
// imports

// app
const app: express.Application = express();
///

// middlewares
app.use(
	cors({
		origin: "http://localhost:5000",
		credentials: true,
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
///

// routes
app.use("/auth", authRouter);
app.use("/user", userRouter);
//

app.get("/", (_req: express.Request, res: express.Response) => {
	res.send("Hello World:)");
});

// listen
(async () => {
	try {
		await mongoose.connect(String(process.env.MONGODB_URI));
		app.listen(process.env.PORT, () => {
			console.log("listenning on port", process.env.PORT);
		});
	} catch (error) {
		console.log("not listenning!!");
	}
})();
///
