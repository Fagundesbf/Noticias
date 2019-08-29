import * as mongoose from 'mongoose';
import { ObjectId } from 'bson';

const usersSchema = new mongoose.Schema({

    id: ObjectId,
    name: { 
        type: String,
        required:true
    },
    lastName: { 
        type: String,
        required:true 
    },
    nickName: { 
        type: String,
        required:false
    },
    age: { 
        type: Number,
        required:false 
    },
    active: { 
        type: Boolean,
        required:false
    },
    news:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'news',
        required:true
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
export default  usersSchema;
