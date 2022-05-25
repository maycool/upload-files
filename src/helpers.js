const util = require('util');
const gc = require('../credentials/index');
const bucket = gc.bucket('extreme-solution-task-bucket');
const {format} = util;

/**
 *
 * @param { File } object file object that will be uploaded
 * @description - This function does the following
 * - It uploads a file to the image bucket on Google Cloud
 * - It accepts an object as an argument with the
 *   "originalname" and "buffer" as keys
 */

const uploadFile = (file) => new Promise((resolve, reject) => {
    const {originalname, buffer} = file;

    const blob = bucket.file(originalname.replace(/ /g, "_"))
    const blobStream = blob.createWriteStream({
        resumable: false
    })
    blobStream.on('finish', () => {
        const publicUrl = format(
            `https://storage.googleapis.com/${bucket.name}/${blob.name}`
        )
        resolve(publicUrl)
    })
        .on('error', () => {
            reject(`Unable to upload image, something went wrong`)
        })
        .end(buffer)
})

const deleteFile = async (fileName) => {
    try {
        await bucket.file(fileName).delete();
        return true;
    } catch (error) {
        return false;
    }
}


module.exports = {
    uploadFile,
    deleteFile,
};
