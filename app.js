var express= require('express')
var bodyParser = require('body-parser')



var app=express()

app.use(bodyParser.urlencoded({
    extended:false
}))

app.use(bodyParser.json())

app.get('/',(req,res)=>{

    res.send("hello hi")
})

app.post('/read',(req,res)=>{
    var getName = req.body.name;
    var getRoll=req.body.rollno;
    res.send(getName+ getRoll)
    
})
app.listen(3000)