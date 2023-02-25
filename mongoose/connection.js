import {connect, connection} from 'mongoose';


// if (!URI_MONGO) {
//     throw new Error('Please add your Mongo URI to .env.local');
// }
let isConnected = false
export async function startConnection() {
    if (isConnected) {
        console.log('already connected');
        return
    };
    try {
        console.log('attempting to connect to db');
        const db = await connect(process.env.URI_MONGO);
        isConnected = db.connections[0].readyState
    } catch (error) {
        console.log(error);
    }
}

connection?.on("connected", () => {
    console.log('connected');
})
connection?.on("error", (error) => {
    console.log(error);
})
connection?.on("disconnected", () => {
    console.log('disconnected');
})
connection?.on("reconnected", () => {
    console.log('reconnected');
})
connection?.on("close", () => {
    console.log('closed');
})
