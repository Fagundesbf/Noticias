"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
const bson_1 = require("bson");
const usersSchema = new mongoose.Schema({
    id: bson_1.ObjectId,
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    nickName: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: false
    },
    projects: {
        projectName: String,
        projectDescription: String,
        projectDateCreated: Date,
        projectDateFinished: Date,
        projectActive: Boolean,
    },
    tasks: {
        taskName: String,
        taskDescription: String,
        taskDateCreated: Date,
        taskDateFinished: Date,
        taskActive: Boolean,
    },
    bugs: {
        bugName: String,
        bugDescription: String,
        bugDateCreated: Date,
        bugDateFinished: Date,
        bugActive: Boolean,
    },
    image: { type: String }
});
exports.default = usersSchema;
// news:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:'news',
// },
//# sourceMappingURL=usersSchema.js.map