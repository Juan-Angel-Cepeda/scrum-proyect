const Sequelize = require('sequelize');


const sequelize = new Sequelize('scrum_proyect',
'root','secret',{
    host:'127.0.0.1',
    dialect:'mysql'
});

/*
    CONST DE LAS CONEXIONES DE LOS MODELOS

*/

sequelize.sync({
    force:true,
}).then(()=>{
    console.log("Base de datos actualizada");
}).catch(()=>{
    console.log("Sin conexion");
});

module.exports = {};