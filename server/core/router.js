const photo = require('../controllers/photo');

const router = require('express').Router();
const bodyParser = require('body-parser').json();

router.use(bodyParser);

router.get('/photo', photo.normalPhoto);

module.exports = router;