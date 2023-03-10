var express = require('express');
var router = express.Router();
const Exams = require('../schemas/ExamSchema');
const PaginationMetadata = require('../services/PaginationMetadata');

/*
 * GET all exams (filtered by pages)
 */
router.get('/', async (req, res, next) => {
    //Pagination Metadata
    var { pageNumber, pageSize } = req.query;

    if (!pageNumber) {
        pageNumber = 1;
    }
    if (!pageSize) {
        pageSize = 10;
    }

    try {
        const exams = await Exams.find().exec();
        const paginationMetaData = new PaginationMetadata(exams.length,
            parseInt(pageNumber),
            parseInt(pageSize));
        let pipeline = [
            {
                $lookup: {
                    from: 'patients',
                    localField: 'patientID',
                    foreignField: '_id',
                    as: 'patient'
                }
            },
            { $limit: parseInt(pageSize) },
            { $skip: (parseInt(pageNumber - 1) * pageSize) }
        ];
        let aggregated = await Exams.aggregate(pipeline).exec();
        if (aggregated) {
            const returnData = aggregated;

            res.set({
                "X-Pagination": JSON.stringify(paginationMetaData)
            });

            return res.status(200).send(returnData);
        }
        throw new Error();
    }
    catch (err) {
        console.error(err.message);
        message = { message: "Something went wrong!" };
        res.status(500).send(message);
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
        message = { message: "Something went wrong!" };
        res.status(500).send(message);
    }
});

/*
 * POST a new exam
 */
router.post('/', async (req, res, next) => {
    try {
        var newExam = req.body;

        created = await Exams.create({
            patientID: newExam.patientID,
            image: newExam.image,
            keyFindings: newExam.keyFindings,
            brixiaScore: newExam.brixiaScore,
            bmi: newExam.bmi
        });

        if (created) {
            message = { message: "Successfully created!" };
            return res.status(201).send(message);
        }
    }
    catch (err) {
        if (err.name === "ValidationError") {
            let errors = {}

            Object.keys(err.errors).forEach((key) => {
                errors[key] = err.errors[key].message;
            });
            res.statusMessage = "Validation Error, please check that you have all fields";
            message = { error: errors }
            return res.status(400).send(message);
        }
        message = { message: "Something went wrong!" };
        res.status(500).send(message);
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
            message = { message: "No Exam found with id " + id };
            return res.status(404).send(message);
        }
        const changes = req.body;

        replaced = await Exams.replaceOne({ _id: id }, changes);

        if (replaced) {
            res.status(204).send();
        }
    }
    catch (err) {
        console.error(err.message);
        message = { message: "Something went wrong!" };
        res.status(500).send(message);
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
            message = { message: "No Exam found with id " + id };
            return res.status(404).send(message);
        }
        const changes = req.body;

        updated = await Exams.findByIdAndUpdate({ _id: id }, changes, { new: false });

        if (updated) {
            res.status(204).send();
        }
    }
    catch (err) {
        console.error(err.message);
        message = { message: "Something went wrong!" };
        res.status(500).send(message);
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
            message = { message: "No Exam found with id " + id };
            return res.status(404).send(message);
        }

        deleted = await Exams.deleteOne({ _id: id });

        if (deleted) {
            return res.status(204).send();
        }

    }
    catch (err) {
        console.error(err.message);
        message = { message: "Something went wrong!" };
        res.status(500).send(message);
    }
});

module.exports = router;
