const  mongoose = require("mongoose");

let requestSchema = mongoose.Schema({
    name:{
        type:String,
        uniqued:true
        
    },
    age:Number
})


module.exports = mongoose.model("Request",requestSchema)