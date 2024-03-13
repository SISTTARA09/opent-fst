import mongoose from "mongoose";
import { moduleSchema } from "../moduleSchema";

const BCG_S1 = mongoose.model("BCG_S1", moduleSchema);
const BCG_S2 = mongoose.model("BCG_S2", moduleSchema);
const BCG_S3 = mongoose.model("BCG_S3", moduleSchema);
const BCG_S4 = mongoose.model("BCG_S4", moduleSchema);

export { BCG_S1, BCG_S2, BCG_S3, BCG_S4 };
