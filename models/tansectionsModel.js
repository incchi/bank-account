const mongoose = require('mongoose')
// const { nanoid } = require('nanoid')

const transectionsSchema = new mongoose.Schema(
    {
        accountNumber : {
            type : Number,
            required : true
        },
        transectionNumber : {
            type : String,
            default : "()=> nanoid(10)"
        },
        type : {
            type : String,
            required : true
        },
        updateBalance : {
            type : Number
        }
    }
)

module.exports = mongoose.model("transectionsModel",transectionsSchema)