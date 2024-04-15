import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';



export default async function connect() {
    const mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
    console.log('Connected to Database - ' + uri);
}