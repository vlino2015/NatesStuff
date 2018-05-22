const express = require('express');
const app = express();



const models = require('../models');

const events = models.events.build({
    title: "random",
    password: "whatever",
    userid: 1
})


// save the post
events.save().then(function(newPost){
  console.log(newPost)
}) 

models.sequelize.sync().then(()=>{
  app.listen(3002, function(){
    console.log('listening on 3001')
})  
})