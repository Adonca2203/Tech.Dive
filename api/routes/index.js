var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
const bodyParser = require('body-parser');
const app = express();
const ExamDataStore = require('../data/ExamDataStore');
const Exams = require('../schemas/ExamSchema');
const Patient = require('../schemas/PatientSchema');
const PaginationMetadata = require('../services/PaginationMetadata');

mongoose.set('strictQuery', false);

const mongoDB = "mongodb://127.0.0.1:27017";

app.use(bodyParser.urlencoded({ extended: true }));

connectToDB().catch(err => console.log(err));
async function connectToDB() {
    await mongoose.connect(mongoDB);
}
/*
 * GET specific exam by ID
 */ 
router.get('/:id', async function (req, res, next) {
    try {
        const exam = await Exams.find({ _id: req.params.id });
        res.send(exam[0]);
    }
    catch (err) {
        res.statusMessage = "No exam found with id" + req.params.id;
        res.status(404).end();
    }
});
/*
 * GET all exams (filtered by pages)
 */
router.get('/', async (req, res, next) => {
    //Enable this to generate dummy patient and test data
    //ExamDataStore.getInstance().generateData();

    //Pagination Metadata
    if (!req.query.pageNumber) {
        req.query.pageNumber = 1;
    }
    if (!req.query.pageSize) {
        req.query.pageSize = 10;
    }

    try {
        const exams = await Exams.find().exec();

        const paginationMetaData = new PaginationMetadata(exams.length,
            parseInt(req.query.pageSize),
            parseInt(req.query.pageNumber));

        const returnData = await Exams.find()
            .limit(parseInt(req.query.pageSize))
            .skip((parseInt(req.query.pageNumber - 1) * req.query.pageSize))
            .exec();

        res.set({
            "X-Pagination": JSON.stringify(paginationMetaData)
        });

        res.send(returnData);
    }

    catch (err) {
        console.log(err.message);
    }

});
/*
 * POST a new exam
 */
router.post('/', function (req, res, next) {
    if (Object.keys(req.body).length === 0) {
        res.statusMessage = "No Body Given";
        res.status(400).end();
    }
    examData.push(req.body);
    res.send(examData);
});

/*
 * REPLACE an exam by ID
 */
router.put('/:id', function (req, res, next) {
    res.send("Received put request with ID: " + req.params.id);
});

/*
 * UPDATE an exam by ID
 */
router.patch('/:id', function (req, res, next) {
    res.send("Received patch request with ID: " + req.params.id);
});

/*
 * DELETE an exam by ID
 */
router.delete('/:id', function (req, res, next) {
    res.send("Received delete request with ID: " + req.params.id);
});

module.exports = router;
