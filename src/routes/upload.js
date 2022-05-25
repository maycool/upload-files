const express = require('express');
const router = express.Router();
const {uploadFile, deleteFile} = require('../helpers');
const { refineResponse } = require('../responses');

/* POST upload file. */
router.post('/', async (req, res) => {
    try {
        const myFile = req.file
        const imageUrl = await uploadFile(myFile)
        return res.status(200).send(refineResponse('SUCCESS', 'UPLOAD_FILE', 'Upload was successful.', imageUrl));
        } catch (error) {
        return res.status(400).send(refineResponse('ERROR', 'UPLOAD_FILE', 'Failed to Upload.'));
    }
})

/* DELETE upload image. */
router.delete('/', async (req, res) => {
    try {
        const body = req.body;
        const fileName = body['name'];
        await deleteFile(fileName)
        return res.status(200).send(refineResponse('SUCCESS', 'DELETE_FILE', 'Delete was successful.'));
    } catch (error) {
        return res.status(400).send(refineResponse('ERROR', 'DELETE_FILE', 'Failed to Delete.'));
    }
})

module.exports = router;
