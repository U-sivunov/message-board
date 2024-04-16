import express from 'express';

const messageRoutes = express.Router();
import Message from '../models/message.model.js';
// import webSocketServer from '../websocket-server.js'
import {WebSocketServer} from "ws";

const webSocketServer = new WebSocketServer({
  port: 3030
});

messageRoutes.get('/messages', (req, res) => {
  try {
    Message.find({}).then((data) => {
      res.json(data);
    })
  } catch (error) {
    res.status(500).json({message: 'Internal Server Error - ' + error, code: error.code, meta: error.meta});
  }
});

messageRoutes.post('/messages', (req, res) => {
  try {
    new Message({message: req.body.message})
      .save()
      .then(data => {
        const wsMessage = JSON.stringify({type: 'new-message', payload: data})
        webSocketServer.clients.forEach(function each(client) {
          if (client.readyState === 1) {
            client.send(wsMessage);
          }
        });
        res.json(data);
      });
  } catch (error) {
    res.status(500).json({message: 'Internal Server Error - ' + error, code: error.code, meta: error.meta});
  }
});

messageRoutes.delete('/messages', (req, res) => {
  try {
    Message.deleteOne({_id: req.body.id})
      .then(data => {
        const wsMessage = JSON.stringify({type: 'delete-message', payload: {id: req.body.id}})
        webSocketServer.clients.forEach(function each(client) {
          if (client.readyState === 1) {
            client.send(wsMessage);
          }
        });
        res.json(data);
      });
  } catch (error) {
    res.status(500).json({message: 'Internal Server Error - ' + error, code: error.code, meta: error.meta});
  }
});


export default messageRoutes;