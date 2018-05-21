var Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/reminderdb')


const models = {
    events:sequelize.import('./events'),
    users:sequelize.import('./user')
    
};

Object.keys(models).forEach(modelName =>{
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
})

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;