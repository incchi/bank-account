const mongoose = require('mongoose')

mongoose 
    .connect('mongodb://localhost:27017/bankaccounts')
    .then(()=>{console.log("connected to database");})
    .catch((error)=>{console.log(error);})


module.exports = mongoose