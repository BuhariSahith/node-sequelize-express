const Sequelize = require("sequelize");
const db = require("../config/database");


// Defining the model 

const DevModels =  db.define("devs", {
  // Model attributes are defined here
  name: {
    type: Sequelize.STRING,
    // allowNull defaults to true
  },
  role: {
    type: Sequelize.STRING,
    // allowNull defaults to true
  },
  experience: {
    type: Sequelize.STRING,
    // allowNull defaults to true
  },
});


module.exports = DevModels
