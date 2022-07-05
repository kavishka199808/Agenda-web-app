const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const AgendaSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    date: { type: String, required: true },
    

}, {
    timestamps: true,
});



const Agenda = mongoose.model('Agenda', AgendaSchema);

module.exports = Agenda;