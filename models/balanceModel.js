const mongoose = require("mongoose")

const balanceSchema = new mongoose.Schema (
    {
        accountNumber : {
            type : Number,
            required : true
        },
        updatedBalance : {
            type : Number
        },
        log: {
            type : String
        }
    }
)


module.exports = mongoose.model('balanceModel',balanceSchema)