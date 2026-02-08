const mongoose = require('mongoose');

function connectDB(){
   mongoose.connect(process.env.MONGODB_URI)
   .then(()=>{
      console.log("Database connected sucessfully");
   })
   .catch((err) =>{
      console.log("mongoDB Connection error", err);
   })
}

module.exports = connectDB;