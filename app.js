const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require("cors")
app.use(cors());
const allRoutes = require('./routes.js');
const task=require('./task.js');

try {
    console.log("in app.js");
    app.use("/task",allRoutes);
    // app.use('/fetch',task.allTask());
} catch (error) {
   console.log("error from entering routes"); 
}


app.listen(4000,()=>{
    console.log("app listen at 4000");
})