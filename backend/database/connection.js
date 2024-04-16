import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

export default async function connect() {
    if (process.env.MONGODB_URI) {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to Database - ' + process.env.MONGODB_URI);
    } else {
        const mongoServer = await MongoMemoryServer.create();
        const uri = mongoServer.getUri();
        await mongoose.connect(uri);
        console.log('Connected to Database - ' + uri);
    }
}