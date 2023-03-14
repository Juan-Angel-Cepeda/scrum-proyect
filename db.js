const Sequelize = require('sequelize');
//importar modelos para la DB

const sequelize = new Sequelize('scrum_proyect',
'root','secret',{
    host:'127.0.0.1',
    dialect:'mysql'
});

//conexiones para los modelos

const Board = boardModel(sequelize,Sequelize);
const Column = columnModel(sequelize,Sequelize);
const Product_backlog = product_backlogModel(sequelize,Sequelize);
const Proyec_expedient = product_expedientModel(sequelize,Sequelize);
const Release_backlog = release_backlogModel(sequelize,Sequelize);
const Spring_backlog = release_backlogModel(sequelize,Sequelize);
const Team_member = team_memberModelModel(sequelize,Sequelize);
const User_history = user_histroyModel(sequelize,Sequelize);

sequelize.sync({
    force:true,
}).then(()=>{
    console.log("Base de datos actualizada");
}).catch(()=>{
    console.log("Sin conexion");
});

module.exports = {Board,Column,Product_backlog,
                Proyec_expedient, Release_backlog,Spring_backlog,
            Team_member,User_history};
 