var Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/reminderdb')


const models = {
    events:sequelize.import('./events'),
    users:sequelize.import('./user')
    
};



models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;