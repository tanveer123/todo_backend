const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();

// middleware
const corsOptions = {
    //origin: "http://localhost:3000" // frontend URI (ReactJS)
    origin: "https://todo-backend.vercel.app",
    methods: ["POST","GET"],
    credentials: true
}
app.use(express.json());
app.use(cors(corsOptions));

// connect MongoDB
/*mongoose.connect(process.env.MONGODB_URI).then(() => {
    const PORT = process.env.PORT || 8000
    app.listen(PORT, () => {
        console.log(`App is Listening on PORT ${PORT}`);
    })
}).catch(err => {
    console.log(err);
});*/
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`App is Listening on PORT ${PORT}`);
})
// route
app.get("/", (req, res) => {res.status(201).json({ message: " yes , Backend!" });
});
