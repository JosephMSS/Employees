const express = require('express');
const employeeRouter = require('./components/employee/network');
const app=express()

app.use(express.json())
app.use("/",employeeRouter)
app.listen(3000,()=>{
    console.log('Listen http://localhost:3000');
})