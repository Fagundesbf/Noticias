import profissionalRepository from '../repository/profissionalRepository';

class ProfissionalService { 

    get(){
        return profissionalRepository.find({});
    }

    getById(_id){
        return profissionalRepository.findById(_id);
    }

    create(profissional){
        return profissionalRepository.create(profissional);
    }

    update(_id, profissional){
        return profissionalRepository.findByIdAndUpdate(_id, profissional);
    }

    delete(_id){
        return profissionalRepository.findOneAndDelete(_id);
    }
}

export default new ProfissionalService();