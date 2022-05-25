
const Cloud = require('@google-cloud/storage')
const path = require('path')
const serviceKey = path.join(__dirname, './extreme-solution-db5c2cf0b5fa.json')

const { Storage } = Cloud;
const storage = new Storage({
    keyFilename: serviceKey,
    projectId: "extreme-solution",
});

module.exports = storage
