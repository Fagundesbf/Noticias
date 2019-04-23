import * as mongoose from 'mongoose';

class Database{
    // private DB_URl  = 'mongodb://localhost:17017/db_portal'
    private DB_URl  = 'mongodb://link-db/db_portal'

    createConnection(){
        mongoose.connect(this.DB_URl);
    }
}

export default Database;