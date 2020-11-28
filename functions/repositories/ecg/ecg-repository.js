const repository = {
    save: (ecg) => {
        return {
            ...ecg,
            status: true
        }
    }
}

module.exports = repository
