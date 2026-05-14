const mongoose=require('mongoose');
const dns=require('dns')

dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])

const connectToDB=async()=>{
    try{
       await mongoose.connect("mongodb+srv://username:password@cluster0.c5vax2i.mongodb.net/API");
       console.log("connected To DB");
    }catch(e){
        console.error("mongodb connection failed ", e)
        process.exit(1)
    }
}

module.exports=connectToDB;
