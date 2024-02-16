const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
let Todo = require('./Todo');
require("dotenv").config();

// middleware
/*const corsOptions = {
    //origin: "http://localhost:3000" // frontend URI (ReactJS)
    origin: "https://todo-frontend-pearl-one.vercel.app",
    methods: ["POST","GET"],
    credentials: true
}*/

//app.use(cors(corsOptions));

const corsConf = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
}

app.use(cors(corsConf));

app.use(express.json());

// connect MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
    /*const PORT = process.env.PORT || 8000
    app.listen(PORT, () => {
        console.log(`App is Listening on PORT ${PORT}`);
    })*/
    console.log(process.env.MONGODB_URI);
}).catch(err => {
    console.log(err);
});
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`App is Listening on PORT ${PORT}`);
})
// route
app.get("/", (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
    res.status(201).json({ message: todos });
});
