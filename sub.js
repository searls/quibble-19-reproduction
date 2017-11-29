var dep = require('./dep')
var Sequelize = require('sequelize')

module.exports = function () {

  const sequelize = new Sequelize('fake', 'justin', '', {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },

    // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
    operatorsAliases: false
  });

  return dep()

}
