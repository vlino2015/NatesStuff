'use strict';

module.exports = (sequelize, DataTypes)=>{
    var events = sequelize.define('events',{
        title : DataTypes.STRING,
        password: DataTypes.STRING,
        userid: DataTypes.INTEGER,

    }, {timestamps: false});

    events.associate = function(models){

    }

    return events;
}