import atletasRepository from '../repository/atletasRepository';

class AtletasService { 

    get(){
        return atletasRepository.find({});
    }

    getById(_id){
        return atletasRepository.findById(_id);
    }

    create(atletas){
        return atletasRepository.create(atletas);
    }

    update(_id, atletas){
        return atletasRepository.findByIdAndUpdate(_id, atletas);
    }

    delete(_id){
        return atletasRepository.findByIdAndRemove(_id);
    }
}

export default new AtletasService();