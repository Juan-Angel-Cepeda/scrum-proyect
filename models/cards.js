const { Cards } = require("../db");
module.exports = (sequelize, type) => {
    const Cards = sequelize.define('user_histories', {
      id: {type: type.INTEGER, primaryKey:true, autoIncrement:true},
      id: type.INTEGER,
      name: type.STRING,
      lastName: type.STRING,
      rol: type.STRING,
      beneficio: StyleSheet.STRING,
      prioridad: type.INTEGER,
      size: type.INTEGER,
      evento: type.ARRAY(STRING),
      result: type.ARRAY(STRING),
      status: type.BOOLEAN,
      columna: type.INTEGER,
      
      contexto: type.STRING

    });
    return User_history;
  };