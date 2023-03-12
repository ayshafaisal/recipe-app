const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes=require('./routes/routes')
const app = express();
require('dotenv').config();
const mongoString = process.env.DATABASE_URL
app.use(cors());
app.use(express.json());
app.listen(8000,()=>{
     console.log(`Server Started at ${8000}`)
})
app.set("view engine", "ejs");
mongoose.connect(mongoString);
const database = mongoose.connection
database.on('error',(error)=>{
    console.log(error)
})
database.once('connected',()=>{
    console.log("Database connected ")
})
app.use('/api',routes)
var multer = require('multer');
 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
var upload = multer({ storage: storage });
