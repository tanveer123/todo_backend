const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();

// middleware
/*const corsOptions = {
    //origin: "http://localhost:3000" // frontend URI (ReactJS)
    origin: "https://todo-frontend-pearl-one.vercel.app",
    methods: ["POST","GET"],
    credentials: true
}*/
app.use(express.json());
//app.use(cors(corsOptions));

// Allow CORS middleware
const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

// Apply CORS middleware to all routes
app.use(allowCors);


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
app.get("/", (req, res) => {res.status(201).json({ message: " yes , Backend!" });
});
