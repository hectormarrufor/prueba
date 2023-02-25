const {Schema, model}= require('mongoose');

const clientSchema = new Schema(
    {
        name: String,
        phone: String,
        email: String,
        numberOfAppointments: {
            type: Number,
            default: 0
        },
        dollarsPaid: {
            type: Number,
            default: 0
        }

    }
)

module.exports = model ('Client', clientSchema)