const { Schema, model } = require('mongoose');

const serviceSchema = new Schema (
    {
        serviceName: String,
        serviceCostDollars: Number,
        serviceDurationMinutes: Number
    }
)

module.exports = model('Service', serviceSchema);