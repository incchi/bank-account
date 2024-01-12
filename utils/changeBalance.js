const balanceModel = require("../models/balanceModel");
const userAccountModel = require("../models/userAccountModel");

async function changeBalance (accountNumber,ammount,type) {
    const balanceDB = await balanceModel.findOne({accountNumber:accountNumber})
    if(balanceDB) {
        if(type === "credit"){
            console.log("credit");
            await balanceModel.updateOne(
                {accountNumber:accountNumber},
                {log :log.push(type+balanceDB.updatedBalance) ,
                     updatedBalance : (balanceDB.updatedBalance+ammount) },
                {new:true}
                )
            await userAccountModel.updateOne(
                {number : accountNumber},
                {balance : (balanceDB.updatedBalance)}
            )
                // await newuserDB.save()
            
            return 1
        }
        if(type === "debit"){
            console.log("debit");
            await balanceModel.updateOne(
                {accountNumber:accountNumber},
                {log :(type+balanceDB.updatedBalance),
                    updatedBalance : balanceDB.updatedBalance-ammount }
                )
            
            return 1
        }
        return 0

    }else return 0
} 

module.exports = {
    changeBalance
}