const balanceModel = require("../models/balanceModel");

async function changeBalance (accountNumber,ammount,type) {
    const balanceDB = await balanceModel.findOne({accountNumber:accountNumber})
    if(balanceDB) {
        balanceDB.updateOne({log :(type+balanceDB.updatedBalance) ,updatedBalance : ammount, })
        await balanceDB.save()
        return 1
    }else return 0
} 

module.exports = {
    changeBalance
}