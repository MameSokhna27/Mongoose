const mongoose = require("mongoose");

module.exports =   mongoose.connect("mongodb+srv://fatoulombodji:Sokhomame24@cluster0.asb0p.mongodb.net/people").then(()=>{
        console.log('database connected successfully');
  }).catch((err)=>{
      console.log(err);
  });


