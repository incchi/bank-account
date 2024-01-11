const {Router} = require('express')
const userAccountController = require('../controller/userAccountController')

const router = Router()

router.post("/createaccount",userAccountController.createAccount)
router.get('/fetchdetails',userAccountController.fetchAccount)
router.post('/updatebalance',userAccountController.updateBalance)
router.post('/closeaccount',userAccountController.deleteAccount)

module.exports = router