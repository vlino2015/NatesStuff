const express = require('express');
const app = express();



const models = require('../models');

const events = models.events.build({
    title: "random",
    password: "whatever",
    userid: 1
})

models.sequelize.sync().then(()=>{
  app.listen(3001, function(){
    console.log('listening on 3001')
})  
})