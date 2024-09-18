const Sequelize =require('@sequelize/core');
// import { MsSqlDialect } from '@sequelize/mssql';


const sequelize = new Sequelize({
    dialect: 'mysql',
    database: 'testdb',
    user: 'root',
    password: 'manager',
    host: 'localhost',
    port: 3306,
  });

async function testConnection() {
    try {
      await sequelize.authenticate(); // Test the connection
      console.log('Connection has been established successfully.');
      
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    } finally {
      await sequelize.close(); // Close the connection after testing
    }
  }
  

  module.exports=sequelize;