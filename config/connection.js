//*************************************************************/
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL /
//*************************************************************/

//**************/
// Dependencies /
//**************/
var Sequelize = require("sequelize");
//******************************************/
// Creates mySQL connection using Sequelize /
//******************************************/
var sequelize = new Sequelize("rccrafters", "root", "790@Camaro", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  timestamps: false 
});
//***********************************************/
// Exports the connection for other files to use /
//***********************************************/
module.exports = sequelize;
