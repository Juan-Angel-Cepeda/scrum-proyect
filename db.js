const Sequelize = require('sequelize');
const boardModel = require('./models/board');
const columnModel = require('./models/column');
const product_backlogModel = require('./models/product_backlog');
const proyect_expedientModel = require('./models/proyect_expedient');
const release_backlogModel = require('./models/release_backlog');
const spring_backlogModel = require('./models/spring_backlog');
const team_memberModelModel = require('./models/team_member');
const user_histroyModel = require('./models/user_history');


const sequelize = new Sequelize('scrum_proyect',
'root','secret',{
    host:'127.0.0.1',
    dialect:'mysql'
});

//conexiones para los modelos

const Board = boardModel(sequelize,Sequelize);
const Column = columnModel(sequelize,Sequelize);
const Product_backlog = product_backlogModel(sequelize,Sequelize);
const Proyec_expedient = proyect_expedientModel(sequelize,Sequelize);
const Release_backlog = release_backlogModel(sequelize,Sequelize);
const Spring_backlog = spring_backlogModel(sequelize,Sequelize);
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
 