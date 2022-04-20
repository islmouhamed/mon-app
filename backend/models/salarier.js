const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let salarierSchema = new Schema({
Fname: {
	type: String
},
Lname: {
	type: String
},
phoneNumber: {
	type: Number
},
poste: {
	type: String
}
}, {
	collection: 'salariers'
})

module.exports = mongoose.model('Salarier', salarierSchema)
