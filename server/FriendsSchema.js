const  mongoose = require('mongoose');

const FriendsSchema = mongoose.Schema({
    name:String,
  
})

module.exports = mongoose.model("friend", FriendsSchema)