const mongoose = require('mongoose')

const userAccountSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        },
        number : {
            type : Number,
            required : true,
            unique : true
        },
        type : {
            type : String,
            required : true
        },
        balance : {
            type : Number,
            
        },
        transections : {
            type : Array,
            default : null
        }
    },{
        timestamps : true
    }
)

module.exports = mongoose.model("userAccountModel",userAccountSchema)