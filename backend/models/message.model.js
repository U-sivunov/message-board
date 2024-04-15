import mongoose from 'mongoose'

const messageModel = new mongoose.Schema({
    message: {type: String}
},{ timestamps: true })

export default mongoose.models.message || mongoose.model('message', messageModel);