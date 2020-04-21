const express = require('express')
const app = express()
const port = 3000
var mongoose = require('mongoose');
let users = []
const UserSchema = require("./usersSchema")
const FriendsSchema = require("./FriendsSchema")
const requestSchema = require("./requestShema")
const cors = require("cors")
app.use(cors())
app.use(express.json())
app.get('/users', async (req, res) => {
    let res2 = await await UserSchema.find().populate("requestes")
    // console.log(res2)
    res.status(200).json({status:"ok" , users:res2})  
})
app.post('/users', async (req, res) => {
    let res2 = new UserSchema(req.body)
 
 res2.save()
  res.status(200).json({status:"ok" , users:res2})  
})

// app.post("/users" , async (req, res) => {
 
//    let  {from , to} = req.query
   
//    let fromUser = await UserSchema.findById(from)
  
//    let request = await new requestSchema(fromUser)
// //    console.log(request)
//    let toUser = await UserSchema.findById(to)

//    toUser.requestes.push(request);
//    toUser.save()
 
 
// //    let users = await UserSchema.find()
//    res.status(200).json({success:"ok" , toUser})
    
// }) 

app.put('/users/:id', async (req, res) => {
  let res2 = await UserSchema.findByIdAndUpdate(req.params.id , {name:"Markod" , age:25})
    res.status(200).json({status:"ok" , users:res2})  
  })
  app.post("/friends" , async (req, res) => {
    let res2 = new FriendsSchema(req.body)
    res2.save()

  })
   


app.listen(port, () => {
    mongoose.connect('mongodb+srv://bojan:123@liricdb-lpugh.mongodb.net/socialMediaApp?retryWrites=true&w=majority', {useNewUrlParser: true} , () => {
        console.log("db conencted")
    });
    console.log(`Example app listening at http://localhost:${port}`)
})