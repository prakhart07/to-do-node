const express = require("express");
const app = express();
const routes = express.Router();
const cors = require("cors")
const Task  = require("./Model");
const Sequelize =require('@sequelize/core');

async function allTask(){
    try {
        console.log("in all task func");
      const task = await Task.findAll({attributes: { exclude: ['id'] }}); // Fetch all users
      console.log('All task:', task);
      return task;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  async function taskByDate(date){
    try {
        console.log("in all task func");
      const task = await Task.findAll({where: {
        startdate: date,
      },
      attributes: { exclude: ['id'] }}); // Fetch all users
      console.log('All task:', task);
      return task;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  async function saveTask(data){
    try {
        const saveTask=await Task.create({
            task:data.task,startdate:data.startdate,progress:data.progress,enddate:data.enddate
        }, { fields: ['task','startdate','progress','enddate'] },)
        return saveTask;
    } catch (err) {
        console.log("err from savetask",err);
    }
  }
  
  module.exports={allTask,saveTask,taskByDate};