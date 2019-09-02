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
    login:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    active: { 
        type: Boolean,
        required:false
    },
    projects: {
        projectName:String,
        projectDescription:String,
        projectDateCreated:Date,
        projectDateFinished:Date,
        projectActive:Boolean,
    },
   tasks:{
            taskName:String,
            taskDescription:String,
            taskDateCreated:Date,
            taskDateFinished:Date,
            taskActive:Boolean,
        },
   bugs:{
            bugName:String,
            bugDescription:String,
            bugDateCreated:Date,
            bugDateFinished:Date,
            bugActive:Boolean,
        },
    image: { type: String }
});
export default  usersSchema;


   // news:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'news',
    // },