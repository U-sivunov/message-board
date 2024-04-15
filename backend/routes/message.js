import express from 'express';
const messageRoutes = express.Router();
import Message from '../database/models/message.model.js';

messageRoutes.get('/test', (req, res) => {
    res.send('it`s worked!');
});

messageRoutes.get('/messages', (req, res) => {
    Message.find({}).then((data) => {
        res.json(data);
    })
});

messageRoutes.post('/messages', (req, res) => {
    console.log(req.body)
    new Message({message: req.body.message}).save().then(data => {res.json(data)} );
});

export default messageRoutes;