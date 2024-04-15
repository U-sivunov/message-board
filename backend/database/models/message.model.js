import mongoose from 'mongoose'

const messageModel = new mongoose.Schema({
    message: {type: String}
})

export default mongoose.models.message || mongoose.model('message', messageModel);