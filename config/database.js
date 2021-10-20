
  const { Sequelize } = require('sequelize');
  // Option 2: Passing parameters separately (other dialects)
  module.exports =  new Sequelize('postgres', 'apple', 'buhariPg', {
    host: 'localhost',
    dialect:'postgres' ,

    pool: {
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }

  });