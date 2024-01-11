const {Router} = require('express')
const { createAccount, fetchAccount, updateBalance, deleteAccount } = require('../controller/userAccountController')

const router = Router()

router.post("/createaccount",createAccount)
router.get('/fetchdetails',fetchAccount)
router.post('/updatebalance',updateBalance)
router.post('/closeaccount',deleteAccount)

module.exports = router