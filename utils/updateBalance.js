const balanceModel = require("../models/balanceModel");

async function updateBalance (accountNumber,ammount,type) {
    const balanceDB = await balanceModel.findOne({accountNumber:accountNumber})
    if(balanceDB) {
        balanceDB.updateOne({log :(type+balanceDB.updatedBalance) ,updatedBalance : ammount, })
        await balanceDB.save()
    }
} 