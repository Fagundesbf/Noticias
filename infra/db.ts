import  mongoose from 'mongoose';

class Database{
    // private DB_URl  = 'mongodb://localhost:17017/db_portal'
    //private DB_URl  = 'mongodb://link-db/db_portal'
    // private DB_URl  = 'mongodb://admin:ndqm08h1@ds145916.mlab.com:45916/noticias-api'
    private DB_URl  = 'mongodb://admin:admin123@ds145916.mlab.com:45916/noticias-api'

    createConnection(){
        mongoose.connect(this.DB_URl, { useNewUrlParser: true });
    }
}

export default Database;
