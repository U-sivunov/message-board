import express from 'express';
import connect from './database/connection.js'
import messageRoutes from './routes/message.js'


const app = express();
app.use(express.json());
app.use(messageRoutes);

const port = process.env.SERVER_PORT || 3000;

connect().then(startServer).catch((err) => {
    console.log("Bad DB connection:");
    console.log(err);
})

function startServer() {
    app.listen(port, () => {
        console.log('Server running on port ' + port);
    })
}
