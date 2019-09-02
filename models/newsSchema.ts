import * as mongoose from 'mongoose';
import { ObjectID } from 'bson';

const NewsSchema = new mongoose.Schema({
    id:ObjectID,
    hat: { type: String },
    title: { type: String },
    text: { type: String },
    author: { type: String },
    img: { type: String },
    publishDate: { type: Date },
    active: { type: Boolean },

});
export default NewsSchema;