const mongoose = require("mongoose")

var usersSchema = new mongoose.Schema({
  
    name: {
        type:String,
  
    },
    userName:{
        type:String,
        unique:true
    },
    password:String,
    email:String,
    phone:String,
    address:String,
    gender:String,
    friends:[{type:mongoose.Schema.Types.ObjectId , ref:"friend"}],
    requestes:[{type:mongoose.Schema.Types.ObjectId}],
    posts:[{type:mongoose.Schema.Types.ObjectId , ref:"friend"}]

    
  });


  module.exports = mongoose.model("User" ,usersSchema );