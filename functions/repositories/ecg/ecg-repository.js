const {PubSub} = require('@google-cloud/pubsub');
const projectId = "dsbp-smap-gateway"
const pubSubClient = new PubSub({
    projectId,
    keyFilename: './key-pubsub.json',
});

const repository = {
    save: async (ecg) => {
        const data = JSON.stringify(ecg)
        const dataBuffer = Buffer.from(data);
        const messageId = await pubSubClient.topic("ecg_topic").publish(dataBuffer);
        console.log(`Message ${messageId} published.`);

        return {
            ...ecg,
            messageId
        };
    }
}

module.exports = repository
