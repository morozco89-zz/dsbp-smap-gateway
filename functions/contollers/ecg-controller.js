const service = require('../domain/ecg/ecg-service')

const controller = {
    postECG: async (req, res, next) => {
        const response = await service.save(req.body)
        res.status(202).send(response)
    }
}

module.exports = controller
