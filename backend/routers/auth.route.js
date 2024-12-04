const express = require("express"); //expressi kullanacağız
const User = require("../models/user"); 
const router = express.Router(); // bunun router olduğunu söylüyoruz
const {v4:uuidv4} = require("uuid"); //guid bir metot unique değer atmak için
const jwt = require("jsonwebtoken"); //token için kütüphane

const secretKey = "My Secret Key My Secret Key 1234.";
const options = {
    expiresIn:"1d" //bir günlük
}

router.post("/register",async(req,res)=>{  //post oluşturuyoruz.
    try{
        const user = new User(req.body);
        user._id= uuidv4();
        user.createdDate = new Date();
        user.isAdmin = false;

        const checkUserEmail = await User.findOne({email: user.email});

        if(checkUserEmail !=null){
            res.status(403).json({message: "Bu mail adresi daha önce kullanılmış!"}) //mail uniqueliğini kontrol ediyoruz.
        }else{
            await user.save();
            const token = jwt.sign({},secretKey,options);
            let model = {token: token, user: user}; //yeni obje oluşturuyoruz
            res.json(model); //modeli gönderdik

        }


    } catch(error){
        res.status(500).json({message: error.message});
    }    
})

module.exports = router; //routerı paylaştık