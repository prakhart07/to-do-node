const express = require("express");
const app = express();
const routes = express.Router();
const cors = require("cors")
const taskFunc=require('./task.js');

app.use(cors());


    console.log("in routes");
    routes.get("/all",async (req,res)=>{
        console.log("Calling taskFunc.allTask...");
      const task= await taskFunc.allTask();
    res.json(task);
    });

    routes.post('/save',async (req,res)=>{
        console.log("Calling savetask");
        console.log("req:",req.body);
        const saveTask=await taskFunc.saveTask(req.body);
        res.json(saveTask);
    })

    module.exports= routes;

    

    

