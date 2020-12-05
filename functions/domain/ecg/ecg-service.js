const repository = require('../../repositories/ecg/ecg-repository')

const service = {
    save: async (ecg) => {
        const response = await repository.save(ecg)
        return response
    },
}

module.exports = service
