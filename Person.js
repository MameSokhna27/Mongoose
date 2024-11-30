const { default: mongoose } = require("mongoose");

let PersonSchema = new mongoose.Schema({ 
    name: { type: String },
    age:  { type: Number },
    favoriteFoods: { type: [String] },
}) 



module.exports = mongoose.model('Person', PersonSchema)
