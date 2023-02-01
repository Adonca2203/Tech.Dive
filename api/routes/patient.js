var express = require('express');
var router = express.Router();
const Patients = require('../schemas/PatientSchema.js');
const PaginationMetadata = require('../services/PaginationMetadata');

/*
 * GET all patients 
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
        const patients = await Patients.find().exec();

        const paginationMetaData = new PaginationMetadata(patients.length,
            parseInt(req.query.pageSize),
            parseInt(req.query.pageNumber));

        const returnData = await Patients.find()
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
 * GET specific patient by ID
 */
router.get('/:id', async function (req, res, next) {
    try {
        const patient = await Patients.find({ _id: req.params.id });
        if (patient.length == 0) {
            res.statusMessage = "No Patient found with id " + req.params.id;
            res.status(404).end();
            return;
        }
        res.send(patient[0]);
    }
    catch (err) {
        console.log(err);
        res.statusMessage = "No Patient found with id " + req.params.id;
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
    console.log(req.body);

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
