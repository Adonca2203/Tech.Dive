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
        console.error(err.message);
        res.status(500).send("Something went wrong!");
    }

});

/*
 * GET specific exam by ID
 */
router.get('/:id', async function (req, res, next) {
    try {
        const exam = await Exams.find({ _id: req.params.id });
        if (exam.length == 0) {
            return res.status(404).send("No Exam found with id " + req.params.id);
        }
        res.send(exam[0]);
    }
    catch (err) {
        res.status(500).send("Something went wrong!");
    }
});

/*
 * POST a new exam
 */
router.post('/', async (req, res, next) => {
    try {
        var body = req.body;

        created = await Exams.create({
            patientID: body['patientId'],
            image: body['image'],
            keyFindings: body['keyFindings'],
            brixiaScore: body['brixiaScore'],
            bmi: body['bmi']
        });

        if (created) {
            return res.status(201).send("Successfully created!");
        }
    }
    catch (err) {
        if (err.name === "ValidationError") {
            let errors = {}

            Object.keys(err.errors).forEach((key) => {
                errors[key] = err.errors[key].message;
            });
            res.statusMessage = "Validation Error, please check that you have all fields";
            return res.status(400).send(errors);
        }
        res.status(500).send("Something went wrong!");
    }
});

/*
 * REPLACE an exam by ID
 */
router.put('/:id', async (req, res, next) => {
    res.send("Received put request with ID: " + req.params.id);
});

/*
 * UPDATE an exam by ID
 */
router.patch('/:id', async (req, res, next) => {
    res.send("Received patch request with ID: " + req.params.id);
});

/*
 * DELETE an exam by ID
 */
router.delete('/:id', async (req, res, next) => {
    try {
        const exam = await Exams.find({ _id: req.params.id });
        if (exam.length == 0) {
            res.statusMessage = "No Exam found with id " + req.params.id;
            return res.status(404).send();
        }

        deleted = await Exams.deleteOne({ _id: exam[0]._id });

        if (deleted) {
            return res.status(204).send();
        }
        
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Something went wrong!");
    }
});

module.exports = router;
