const repository = require('../../repositories/ecg/ecg-repository')

const service = {
    save: (ecg) => {
        return repository.save(ecg)
    }
}

module.exports = service
