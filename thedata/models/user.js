'use strict';

module.exports = (sequelize, DataTypes) => {
    var user = sequelize.define('user', {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING
    }, {timestamps: false});

    // user.associate = function(models){

    // }

    return user;
}

