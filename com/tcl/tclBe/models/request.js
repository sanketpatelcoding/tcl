const mongoose=require('mongoose');


const userModel= new mongoose.Schema(

    {

name:{type:String,required:true},
email:{type:String,required:true , unique:true},
mobile:{type:Number,required:true},

inquiry:{type:String,required:true}





    }
);
const users = new mongoose.model("tclQuote",userModel);


module.exports = users;