import mongoose, {connect, connection} from 'mongoose';



export const connectToDB = async () => {
    try {
        
        await connect(process.env.URI_MONGO);
    } catch (error) {
        throw new Error (error.message)
    }
}