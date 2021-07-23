const mongoose = require ('mongoose');
const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    phone:{
        type: String,
        required:true
    }
})
//specifing the name of the collection which will be using the schema
// here the name "Contact" is the name of the collection in the database  
const Contact = mongoose.model('Contact',contactSchema);

module.exports= Contact;