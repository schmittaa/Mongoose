const mongoose = require('mongoose') //import mongoose
const Schema = mongoose.Schema; // define my schema


const contactSchema = new Schema({
    name :{
        type : String,
        required : true
    },
    email : {
        type :String, 
        required : true,
        unique:true
    },
    age :Number
})
module.exports =  mongoose.model('Contact', contactSchema)