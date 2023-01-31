var Exam = require('../schemas/ExamSchema');
const mongoose = require('mongoose');
const Patient = require('../schemas/PatientSchema');

var ExamDataStore = (() => {
    var instance;
    var exams;

    function createInstance() {
        var object = new Object();
        return object;
    }

    function generateData() {
        Patient.create({
            firstName: "John",
            lastName: "Doe",
            age: 44,
            sex: 'M',
            zipCode: 722
        });
        Patient.create({
            firstName: "Jane",
            lastName: "Doe",
            age: 49,
            sex: 'F',
            zipCode: 721
        });
        Patient.create({
            firstName: "Abigail",
            lastName: "Doe",
            age: 75,
            sex: 'F',
            zipCode: 721
        });
        Patient.find({ firstName: 'John', lastName: 'Doe' }, function (err, docs) {
            Exam.create({
                patientID: docs[0]._id,
                image: 'https://via.placeholder.com/150',
                keyFindings: 'Right basilar atelectasis',
                brixiaScore: [1, 2, 3, 4],
                bmi: 33.3,
                zipCode: 722
            });
        });

        Patient.find({ firstName: 'Jane', lastName: 'Doe' }, function (err, docs) {
            Exam.create(
                {
                    patientID: docs[0]._id,
                    image: 'https://via.placeholder.com/150',
                    keyFindings: 'The lungs are free of air space disease',
                    brixiaScore: [1, 2, 3, 4],
                    bmi: 43.85,
                    zipCode: 721
                }
            );
        });

        Patient.find({ firstName: 'Abigail', lastName: 'Doe' }, function (err, docs) {
            Exam.create(
                {
                    patientID: docs[0]._id,
                    image: 'https://via.placeholder.com/150',
                    keyFindings: 'Lung volume remain low but there appears to have been clearing since prior radiograph',
                    brixiaScore: [1, 2, 3, 4],
                    bmi: 23.57,
                    zipCode: 721
                }
            );
        });
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

module.exports = ExamDataStore;
