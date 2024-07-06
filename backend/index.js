import express from "express"
// const express = require("express") above can be done as
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import {Server} from "socket.io"
import { createServer } from 'http';

import userRoutes from './routes/user.js'
import homeRoutes from './routes/home.js'
import paymentRoutes from './routes/payment.js'
import mapRoutes from './routes/map.js'

dotenv.config()// attach env var to process obj

/* 
Middleware is fancy name for any code that gets executed btw us getting a req on server and us getting a response 

we can register global midleware sing app.use()

When you are using a post req or patch req where we are sending data to the server then to access that data if we use express.json() middleware , if any req has some data or some body to the req then it passes it and attaches it to the req object so that we can access it in the req handler
*/

const app = express()

// Create HTTP server
const server = createServer(app);

// Initialize Socket.io
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('a user connected');
    
    socket.on('sendMessage', (message) => {
        io.emit('receiveMessage', message);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
  




app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
//logging our requrests using a global middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()// after process code of middleware call the next middlware fuction can be get or post requrest anything
})

//Routes
app.use('/user',userRoutes)
app.use('/home',homeRoutes)
app.use('/payment', paymentRoutes);
app.use('/map', mapRoutes);


//CONNECT TO DB 

//It is asybchronous in nature and returns a promise
//using .then() to fire a function when its complete and catch() for catching error

// process is global obj available in node applications
mongoose.connect(process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("DB CONNECTED!")

        // If connected to DB then start listening        
        server.listen(process.env.PORT, () => {
            console.log(`Backend started at port ${process.env.PORT} !`);
        });


    }).catch((error) => {
        console.log(error)
    })




