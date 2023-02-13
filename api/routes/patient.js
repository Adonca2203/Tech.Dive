var express = require('express');
var router = express.Router();
const Patients = require('../schemas/PatientSchema.js');
const PaginationMetadata = require('../services/PaginationMetadata');

/*
 * GET all patients 
 */
router.get('/', async (req, res, next) => {
    //Pagination Metadata
    const { pageNumber, pageSize } = req.query;

    if (!pageNumber) {
        req.query.pageNumber = 1;
    }
    if (!pageSize) {
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
            .sort({ firstName: 1 })
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
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const patient = await Patients.find({ _id: id });
        if (patient.length == 0) {
            return res.status(404).send("No Patient found with id " + id);
        }
        res.send(patient[0]);
    }
    catch (err) {
        console.error(err);
        res.status(500).send("Something went wrong!");
    }
});

/*
 * POST a new patient
 */
router.post('/', async (req, res, next) => {
    try {
        var newPatient = req.body;

        created = await Patients.create({
            firstName: newPatient['firstName'],
            lastName: newPatient['lastName'],
            age: newPatient['age'],
            sex: newPatient['sex'],
            zipCode: newPatient['zipCode']
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
        res.status(500).send("Something went wrong!").end();
    }
});

/*
 * REPLACE a patient by ID
 */
router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const patient = await Patients.find({ _id: id });
        if (patient.length == 0) {
            return res.status(404).send("No Patient found with id " + id);
        }
        const changes = req.body;

        replaced = await Patients.replaceOne({ _id: id }, changes);

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
 * UPDATE a patient by ID
 */
router.patch('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const patient = await Patients.find({ _id: id });
        if (patient.length == 0) {
            return res.status(404).send("No Patient found with id " + id);
        }
        const changes = req.body;

        updated = await Patients.findByIdAndUpdate({ _id: id }, changes);

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
 * DELETE a patient by ID
 */
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const patient = await Patients.find({ _id: id });
        if (patient.length == 0) {
            return res.status(404).send("No Patient found with id " + id);
        }

        deleted = await Patients.deleteOne({ _id: id });

        if (deleted) {
            return res.status(204).send();
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).send("Something went wrong!");
    }
});

module.exports = router;
