import * as mongoose from 'mongoose';
import { create } from 'domain';
import { createConnection } from 'net';

class Database{
    private DB_URl  = 'mongodb://localhost:17017/db_portal'

    createConnection(){
        mongoose.connect(this.DB_URl);
    }
}

export default Database;