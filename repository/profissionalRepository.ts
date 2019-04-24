import * as mongoose from 'mongoose';
import profissionalSchema from "../models/profissionalSchema";

export default mongoose.model("profissional", profissionalSchema);

