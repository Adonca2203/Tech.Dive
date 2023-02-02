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

        return res.status(200).send(returnData);
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
        const { id } = req.params;
        const exam = await Exams.find({ _id: id });
        if (exam.length == 0) {
            return res.status(404).send("No Exam found with id " + id);
        }
        res.status(200).send(exam[0]);
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
        var newExam = req.body;

        created = await Exams.create({
            patientID: newExam['patientId'],
            image: newExam['image'],
            keyFindings: newExam['keyFindings'],
            brixiaScore: newExam['brixiaScore'],
            bmi: newExam['bmi']
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
    try {
        const { id } = req.params;
        const exam = await Exams.find({ _id: id });
        if (exam.length == 0) {
            return res.status(404).send("No Exam found with id " + id);
        }
        const changes = req.body;

        replaced = await Exams.replaceOne({ _id: id }, changes);

        if (replaced) {
            res.status(204).send();
        }
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Something went wrong!");
    }
});

/*
 * UPDATE an exam by ID
 */
router.patch('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const exam = await Exams.find({ _id: id });
        if (exam.length == 0) {
            return res.status(404).send("No Exam found with id " + id);
        }
        const changes = req.body;

        updated = await Exams.findByIdAndUpdate({ _id: id }, changes, { new: false });

        if (updated) {
            res.status(204).send();
        }
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Something went wrong!");
    }
});

/*
 * DELETE an exam by ID
 */
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const exam = await Exams.find({ _id: req.params.id });
        if (exam.length == 0) {
            return res.status(404).send("No Exam found with id " + id);
        }

        deleted = await Exams.deleteOne({ _id: id });

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
