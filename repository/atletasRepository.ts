import * as mongoose from 'mongoose';
import AtletasSchema from "../models/atletasSchema";

export default mongoose.model("news", AtletasSchema);

