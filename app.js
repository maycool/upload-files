const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const multer = require('multer');
const { auth } = require('express-oauth2-jwt-bearer');

const uploadRouter = require('./src/routes/upload')

const app = express();
const multerMid = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.disable('x-powered-by');
app.use(multerMid.single('file'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/uploads', uploadRouter);

module.exports = app;



//
// app.post('/uploads', (req, res, next) => {
// })
//
// app.listen(9001, () => {
//     console.log('app now listening for requests!!!')
// })
