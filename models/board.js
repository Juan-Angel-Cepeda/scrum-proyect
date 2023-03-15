const { User_history } = require("../db");
module.exports = (sequelize, type) => {
    const User_history = sequelize.define('user_histories', {
      id: {type: type.INTEGER, primaryKey:true, autoIncrement:true},
      name: type.STRING,
      lastName: type.STRING,
      contexto: type.STRING

    });
    return User_history;
  };