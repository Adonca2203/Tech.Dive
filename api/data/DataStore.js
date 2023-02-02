var Exam = require('../schemas/ExamSchema');
const Patient = require('../schemas/PatientSchema');

var ExamDataStore = (() => {
    var instance;

    async function generatePatientData() {
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
        return true;
    }

    async function generateExamData() {
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
        generateData: async () => {
            patientsGenerated = await generatePatientData();
            if (patientsGenerated == true) {
                await generateExamData();
            }
            
        }
    };
})();

module.exports = ExamDataStore;
