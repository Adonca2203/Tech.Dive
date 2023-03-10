const mongoose = require('mongoose');
const Patient = require('./PatientSchema');

const Schema = mongoose.Schema;

const ExamsSchema = new Schema({
	patientID: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
	image: String,
	keyFindings: { type: String, required: true },
	brixiaScore: { type: [Number], required: true },
	bmi: { type: Number, required: true },
	date: { type: Date, default: Date.now() }
});
var Exams = mongoose.model('Exam', ExamsSchema);

Exams.createCollection();

module.exports = Exams;
/* reference
 const schema = new Schema({
  name: String,
  binary: Buffer,
  living: Boolean,
  updated: { type: Date, default: Date.now() },
  age: { type: Number, min: 18, max: 65, required: true },
  mixed: Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  array: [],
  ofString: [String], // You can also have an array of each of the other types too.
  nested: { stuff: { type: String, lowercase: true, trim: true } },
});
*/
