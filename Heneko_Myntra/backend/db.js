const mongoose=require('mongoose')
const url="mongodb+srv://mtg123mansi:8arSdrPeLsE78Soz@cluster0.pthbr4g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
module.exports.connect=()=>{
    mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log('MongoDb connected successfully')
    }).catch((error)=>console.log("Error",error))
}