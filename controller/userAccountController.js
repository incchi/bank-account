const userAccountModel = require("../models/userAccountModel");
const transectionsModel = require("../models/tansectionsModel");
const balanceModel = require('../models/balanceModel')

const userAccountController = {
    createAccount : async(req,res)=>{
        const {username,accountnumber,type,balance} = req.body;
        const userDB = await userAccountModel.create({
            name : username,
            number : accountnumber,
            type : type,
            balance : balance
        })
        await userDB.save()

        const newTransection = await transectionsModel.create({
            accountNumber : accountnumber,
            type  : "credit",
            updateBalance : balance
        })
        await newTransection.save()

        const newBalance = await balanceModel.create({
            accountNumber:accountnumber,
            updatedBalance : balance,
            log : newTransection.type+balance
        })
        await newBalance.save()

        
        res.send("Account opened successfully !\n Thanks for choosing us :)")
    },
    fetchAccount : async(req,res)=>{
        const {accountnumber} = req.body;
        const userDB = await userAccountModel.findOne({number: accountnumber})
        if(userDB) {
            res.send(userDB)
        }else { res.send("invalid account number")}
    },
    updateBalance:async(req,res)=>{
        const {accountnumber,balance,transection} = req.body;
        const userDB = await userAccountModel.findOne({number:accountnumber})
        if(userDB){
            userDB.balance = balance,
            userDB.transections = transection
            res.send("balance updated successfully") 
        }else res.send("invalid account number")
    },
    deleteAccount : async(req,res)=>{
        const {accountnumber} = req.body;
        const status = await userAccountModel.findOneAndDelete({number:accountnumber})
        if(status) res.send("account deleted")
        else res.send('invalid account number')
        
    }
}



module.exports = {...userAccountController}