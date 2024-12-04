const mongoose = require("mongoose"); //mongoose çağırdık
const { stringify } = require("uuid");

const userSchema= new mongoose.Schema({ //Schema oluşturuyoruz.
    _id: String, 
    name:{
        type: String,
        required: true 
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    isAdmin: Boolean,
    createdDate: Date
})

const User = mongoose.model("User",userSchema); //userı tanımladık

module.exports = User //userı paylaşıma açtık