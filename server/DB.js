const mongoose =require('mongoose');

async function connectMongo(){
try{
   await mongoose.connect("mongodb+srv://annu:iuTca1X2geaUaq4v@cluster0.jokwqfg.mongodb.net/Krishisetu?appName=Cluster0"),{
        useNewUrlParser:true,
        useUnifiedTopology:true 
    }
    console.log("database is conneced");
}
    
catch(error){
    console.log(error);
    process.exit(1); 

}
}

module.exports=connectMongo;  