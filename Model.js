const sequelize = require("./connection");
const Sequelize =require('@sequelize/core');
// Define a model (table)
const Task = sequelize.define('task', {
    // Attributes
    task: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    startdate: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    progress: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    enddate: {
        type: Sequelize.STRING,
        allowNull: true,
      },
  },
  {
    // options
    tableName: 'task', // This ensures Sequelize refers to the existing 'users' table
    timestamps: false,  // If your table does not have `createdAt` and `updatedAt` fields
  });
  
  // Sync the model with the database (create the table if it doesn't exist)
//   (async () => {
//     try {
//       await sequelize.sync();
//       console.log('User table has been created.');
//       sequelize
//     } catch (error) {
//       console.error('Error creating table:', error);
//     }
//   })();
  module.exports=Task;