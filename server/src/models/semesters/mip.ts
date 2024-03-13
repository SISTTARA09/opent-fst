import mongoose from "mongoose";
import { moduleSchema } from "../moduleSchema";

const MIP_S1 = mongoose.model("MIP_S1", moduleSchema);
const MIP_S2 = mongoose.model("MIP_S2", moduleSchema);
const MIP_S3 = mongoose.model("MIP_S3", moduleSchema);
const MIP_S4 = mongoose.model("MIP_S4", moduleSchema);

export { MIP_S1, MIP_S2, MIP_S3, MIP_S4 };
