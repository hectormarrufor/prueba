import { Schema, model, models } from "mongoose";
import { connectToDB } from "..";

const clientSchema = new Schema (
    {
        name: String,
        password: String,
        email: String,
        phone: String,
        totalAppointments: {
            type: Number,
            default: 0
        },
        totalPaid: Number

    }
) 

module.exports = models?.Client ? models.Client : model('Client', clientSchema);



