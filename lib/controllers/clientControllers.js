import { connectToDB } from "..";
import Client from '../Schemas/clientSchema';



export const createClient = async (name, password, email, phone, totalAppointments = 0, totalPaid = 0) => {
    try {
        await connectToDB()
        const newClient = new Client( { name, password,email, phone,totalAppointments,totalPaid});
        await newClient.save()
        
    } catch (error) {
        throw new Error (error.message)
    }
}