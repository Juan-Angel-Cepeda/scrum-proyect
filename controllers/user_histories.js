const express = require('express');
const {User_history} = require('../db');

function list(req,res,next){
    User_history.findAll()
            .then(objects => res.json(objects))
            .catch(err => res.send(error));
   
}

function index(req,res,next){
    res.send(`respond with a index= ${req.params.id}`);

}

function create(req,res,next){
    let id = req.body.id;
    let name = req.body.name;
    let lastName = req.body.lastName;
    let contexto = req.body.contexto;
    let rol = req.body.rol;
    let beneficio = req.body.beneficio;
    let prioridad = req.body.prioridad;
    let size = req.body.size;
    let evento = req.body.evento;
    let result = req.body.result;
    let columna = req.body.columna;
    
    let u_story = new Object({
        id:id,
        name:name,
        lastName:lastName,
        contexto:contexto,
        rol:rol,
        beneficio:beneficio,
        prioridad:prioridad,
        size:size,
        evento:evento,
        result:result,
        columna:columna
        
    });
    
    User_history.create(u_story)
            .then(obj => res.json(obj))
            .catch(err => res.json(err));

}
function replace(req,res,next){
    const id = req.params.id;
    User_history.findByPk(id)
            .then((object)=>{
                const id = req.body.id ? req.body.id: object.id;
                const name = req.body.name ? req.body.name: object.name; 
                const lastName = req.body.lastName ? req.body.lastName: object.lastName;
                const contexto = req.body.contexto ? req.body.contexto: object.contexto;
                const rol = req.body.rol ? req.body.rol: object.rol;
                const beneficio =req.body.beneficio ? req.body.beneficio: object.beneficio;
                const prioridad = req.body.prioridad ? req.body.prioridad: object.prioridad;
                const size = req.body.size ? req.body.size: object.size;
                const evento = req.body.evento ? req.body.evento: object.evento;
                const result = req.body.result ? req.body.result: object.result;
                const columna = req.body.columna ? req.body.columna: object.columna;
                        
                
                object.update({
                    id:id,
                    name:name,
                    lastName:lastName,
                    contexto:contexto,
                    rol:rol,
                    beneficio:beneficio,
                    prioridad:prioridad,
                    size:size,
                    evento:evento,
                    result:result,
                    columna:columna
                })
                
                        .then(obj => res.json(obj))
                        .catch(err => res.send(err));
    })
            .catch(err => res.send(err));
}
function update(req,res,next){

}
function destroy(req,res,next){

}

module.exports = {
    list,
    index,
    create,
    replace,
    update,
    destroy
}
