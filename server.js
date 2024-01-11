require('./connection/initialisation')
const express = require('express')
const userAccountRouter = require('./routers/userAccountRouter')
const app = express()
const PORT = 400

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use((req,res,next)=>{
    console.log(`${req.method}${req.url}`);
})

app.use('/api',userAccountRouter)
app.listen(PORT,()=>console.log(PORT))