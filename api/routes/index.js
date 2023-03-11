var express = require('express');
var router = express.Router();
const DataStore = require('../data/DataStore');

router.get('/', async (req, res, next) => {
    //Uncomment to generate data on launch of client
    //(recomment after first time to not duplicate it)

    // await DataStore.generateData();

    // res.send("This has been moved to /exams and /patients!");
    res.redirect("/exams");
});

module.exports = router;
