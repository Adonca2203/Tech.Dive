var express = require('express');
var router = express.Router();
const DataStore = require('../data/DataStore');

router.get('/', async (req, res, next) => {
    res.redirect("/exams");
});

module.exports = router;
