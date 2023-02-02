var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PatientSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    sex: String,
    zipCode: { type: Number, required: true }
});

var Patient = mongoose.model('Patient', PatientSchema);

Patient.createCollection();

module.exports = Patient;
