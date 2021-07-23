const express = require('express');
const port = 8001;

// used for setting up the view engine path
const path = require('path');
const db = require('./config/mongoose');
const Contact = require('./models/contact');

const app = express();

var contactList =[
    {
        name :"siddhant",
        phone:"7386980079"
    },

    {
        name :"prakhar",
        phone:"9486980079"
    },

    {
        name :"papa",
        phone:"9800857434"
    },
    
    {
        name :"didi",
        phone:"7890857434"
    }
]

// changing the default the view engine to view
app.set('view engine','ejs');

//__dirname is the path of the current executing directory
app.set('views',path.join(__dirname,'viewsS'));

// MIDDLEWARE

// this is parser used to convert the encoded form data into
// req object having the key as object 
app.use(express.urlencoded())

//needed to serve the static file from the assets folderf
app.use(express.static('assets'))


app.get('/',function(req,res){

    Contact.find({},function(err,contacts){
        if(err){
            console.log("error found while fetching contact from the database");
            return;
        }
        return res.render('home.ejs',{

            title:"CONTACT LIST",
            contact_list: contacts
        })
    })

})

app.post('/create-contact',function(req,res){

    Contact.create({
        name:req.body.name,
        phone:req.body.phone
    },function(err,newContact){
        if(err){
            console.log('error from create_contact',err)
            return
        }
        console.log("******************",newContact)
        return res.redirect('back');
    });

})

app.get("/delete-contact",function(req,res){

    // get the id query from the url
    let id = req.query.id;

    //finding the contact in the database using id and deleting it
    Contact.findByIdAndDelete(id,function(err){

        if(err){
            console.log("Run into an error while deleting the contact from the database")
            return
        }
        return res.redirect('back');
    });

});

app.listen(port,function(err){
    if(err){

        console.log("There is an error found in the listen controller")
    }
    console.log("Your Server Is Up ANd Running On Port",port)
})
