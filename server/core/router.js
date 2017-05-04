const photo = require('../controllers/photo');
const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser').json();

router.use(bodyParser);

router.use('/images', express.static(process.cwd() + '/image'));

router.get('/photo', photo.normalPhoto);

module.exports = router;