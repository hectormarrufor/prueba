// importar solo la funcion de mongoose que se encarga de modelar las collections

const { Schema , model } = require('mongoose');

const appointmentSchema = new Schema ({
    client: String,
    services: Array,
    totalDollars: Number,
    dateOfAppointment: Date
     
})

module.exports = model('Appointment', appointmentSchema);