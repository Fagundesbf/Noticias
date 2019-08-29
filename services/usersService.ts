import usersRepository from '../repository/usersRepository';
import { ObjectID } from 'bson';

class UsersService { 

    get(){
        return usersRepository.find({}).populate('news',{_id:ObjectID});
    }

    getById(_id){
        return usersRepository.findById(_id);
    }

    create(users){
        return usersRepository.create(users);
    }

    update(_id, users){
        return usersRepository.findByIdAndUpdate(_id, users);
    }

    delete(_id){
        return usersRepository.findOneAndDelete(_id);
    }
}

export default new UsersService();