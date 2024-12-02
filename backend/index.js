const express = require("express"); //express module ekledik.
const app = express(); //metodu verdik
const cors = require("cors"); //cors politikası uygulayacağız.

app.use(express.json()); // yapacağımız tüm istekleri json formatında olduğunu bildirdik.
app.use(cors()); // 

app.get("",(req,res)=>{
    res.json({message: "Api isteği başarılı şekilde çalışıyor."})
}); //basit bir api isteği tasarladık çalışıyor mu test edelim

const port = process.env.PORT || 5000; //portumuzu belirledik. Eğer canlıya alınırsa hangi protta ayağa kalkacağı belliyse ilki belli degilse 5000 portundan ayağa kalkacak.
app.listen(port,()=> console.log("Uygulama http://localhost:5000 portunda ayağa kalktı..")) //call back yazdık. Uygulama ayağa kalkarsa bu mesajı verecek.