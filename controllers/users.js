const express = require('express');
const {User} = require('../db');

function list(req,res,next){
    res.send('respond with a list'); 
}

function index(req,res,next){
    res.send('respond with a index ' )
}

function create(req,res,next){
    

}
function replace(req,res,next){

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
