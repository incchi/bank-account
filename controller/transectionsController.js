const userAccountModel = require("../models/userAccountModel");
const transectionsModel = require('../models/tansectionsModel')
const transectionsController = {
    transectionDone : async(req,res)=>{
        try {
            const { accountnumber, type, amount} = req.body;
            const userDB =await userAccountModel.findOne({number:accountnumber}) 
            if(userDB){
                
                const transectionDB = await transectionsModel.create({
                    accountNumber : accountnumber,
                    type : type,
                    updateBalance : amount
                })
                await transectionDB.save()
                res.send("transection completed successfully")
            }   
        } catch (error) {
            res.send("internal server error")
        }

    }
}


module.exports = {...transectionsController}