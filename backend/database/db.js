const mongoose = require("mongoose");

const uri = "mongodb+srv://MongoDb:12345@eticaretdb.0jmjv.mongodb.net/?retryWrites=true&w=majority&appName=ETicaretDb";

const connection = () => {
    mongoose.connect(uri, {
    })
    .then(()=> console.log("MongoDb bağlantısı başarılı"))
    .catch((err)=> console.log("Bağlantı Hatası! Hata:" + err.message))
}

module.exports = connection;