import mongoose from "mongoose";
import { moduleSchema } from "../moduleSchema";

const GEMGM_S1 = mongoose.model("GEMGM_S1", moduleSchema);
const GEMGM_S2 = mongoose.model("GEMGM_S2", moduleSchema);
const GEMGM_S3 = mongoose.model("GEMGM_S3", moduleSchema);
const GEMGM_S4 = mongoose.model("GEMGM_S4", moduleSchema);

export { GEMGM_S1, GEMGM_S2, GEMGM_S3, GEMGM_S4 };
