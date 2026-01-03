const mongoose= require("mongoose");

const proSchema=mongoose.Schema({

    productImage:String,
    productPrice:String,
    productTitle:String,
    productDetails:String
});

module.exports=mongoose.model("Crops",proSchema,"Crops");
