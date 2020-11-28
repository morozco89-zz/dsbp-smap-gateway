const service = require('../domain/ecg/ecg-service')

const controller = {
    postECG: (req, res, next) => {
        res.status(202).send(service.save(req.body))
    }
}

module.exports = controller
