const express = require('express');
const {Board} = require('../db');

function list(req,res,next){
    Board.findAll()
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
    let columna = req.body.columna;
    
    let u_story = new Object({
        id:id,
        name:name,
        lastName:lastName,
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
                const columna = req.body.columna ? req.body.columna: object.columna;
                        
                object.update({
                    id:id,
                    name:name,
                    lastName:lastName,
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
