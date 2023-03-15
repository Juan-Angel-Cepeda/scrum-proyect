const express = require('express');
const {Board} = require('../db');

function list(req,res,next){
    res.send("Respond with a list");
}

function index(req,res,next){
    res.send("Respond with an index");
}

function create(req,res,next){
    res.send("Respond with a create");
}
function replace(req,res,next){
    res.send("Respond with a replace");
}
function update(req,res,next){
    res.send("Respond with a update");
}
function destroy(req,res,next){
    res.send("Respond with a destroy");
}

module.exports = {
    list,
    index,
    create,
    replace,
    update,
    destroy
}
