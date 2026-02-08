const mongoose = require("mongoose");

const foodPartnerSchema = new mongoose.Schema({
   name :{
      type:String,
      required:true,
   },
   contactName:{
      type:String,
      requires: true,
   },
   phone:{
      type: String,
      required: true,
   },
   address:{
      type:String,
      required:true,
   },
   email:{
      type:String,
      required:true,
      uniuqe: true
   },
   password:{
      type:String,
      required:true
   }
})

const foodPartnerModel = mongoose.model("foodpartner", foodPartnerSchema);
module.exports = foodPartnerModel;