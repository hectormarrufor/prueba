require('./connection');

const Client = require('./models/Client.js');
const Appointment = require('./models/Appointment.js');
const Service = require('./models/Service.js');


//CLIENTS: 

const createClient = (name, phone, email, numberOfAppointments, dollarsPaid) => {
        const newClient = new Client({
            name,
            phone,
            email,
            numberOfAppointments,
            dollarsPaid,
        })
        newClient.save((err, document) => {
            err && console.log(error);
            console.log(document);
        })
}



//Appointments:

const createAppointment = (client, services, dateOfAppointment, totalDollars) => {
        const newAppointment = new Appointment(
            {
                client,
                services,
                dateOfAppointment,
                totalDollars
            }
            
        )
        newAppointment.save((err, document) => {
            err && console.log(error);
            console.log(document);
        })
}



//Services: 

const createService = (serviceName, serviceCostDollars, serviceDurationMinutes) => {
    const newService = new Service(
        {
            serviceName,
            serviceCostDollars,
            serviceDurationMinutes
        }

    )
    newService.save((err, document) => {
        err && console.log(error);
        console.log(document);
    })
}

module.exports = {createClient, createService, createAppointment}