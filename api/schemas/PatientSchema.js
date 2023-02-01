var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PatientSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    sex: String,
    zipCode: Number
});

var Patient = mongoose.model('Patient', PatientSchema);

Patient.createCollection();

module.exports = Patient;
