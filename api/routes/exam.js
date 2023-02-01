var express = require('express');
var router = express.Router();
const Exams = require('../schemas/ExamSchema');
const PaginationMetadata = require('../services/PaginationMetadata');

/*
 * GET all exams (filtered by pages)
 */
router.get('/', async (req, res, next) => {
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
 * GET specific exam by ID
 */
router.get('/:id', async function (req, res, next) {
    try {
        const exam = await Exams.find({ _id: req.params.id });
        if (exam.length == 0) {
            res.statusMessage = "No Exam found with id " + req.params.id;
            res.status(404).end();
            return;
        }
    }
    catch (err) {
        console.log(err);
        res.statusMessage = "No Exam found with id " + req.params.id;
        res.status(404).end();
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
    var body = req.body;

    Exams.create({
        patientID: body[patientId],
        image: body[image],
        keyFindings: body[keyFindings],
        brixiaScore: body[brixiaScore],
        bmi: body[bmi]
    });

    res.status(201).end();
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
