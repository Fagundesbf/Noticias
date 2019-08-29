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
    active: {
        type: Boolean,
        required: false
    },
    news: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'news',
            required: true
        }],
    // projects: [{
    //     projectId:ObjectId,
    //     projectName:String,
    //     projectDescription:String,
    //     projectDateCreated:Date,
    //     projectDateFinished:Date,
    //     projectActive:Boolean,
    //     tasks:[{
    //         taskId:ObjectId,
    //         taskName:String,
    //         taskDescription:String,
    //         taskDateCreated:Date,
    //         taskDateFinished:Date,
    //         taskActive:Boolean,
    //     }]
    // }],
    image: { type: String }
});
exports.default = usersSchema;
//# sourceMappingURL=usersSchema.js.map