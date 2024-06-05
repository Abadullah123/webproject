const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');

// jab hum as to host kar ta ha toas ko aik port number chaya hota ha
const port =process.env.PORT || 8002;
// public state path
// console.log(path.join())
const static_path = path.join(__dirname, '../public');
const template_path = path.join(__dirname, 'template/views')
const partisal_path = path.join(__dirname, 'template/partials');


app.set('view engine', 'hbs');
app.set("views", template_path);
hbs.registerPartials(partisal_path)

app.use(express.static(static_path));
 
 
// routing
app.get("", (req, res)=>{
    res.render('index');
});


app.get("/about", (req,res)=>{
    res.render('about')

})

app.get("/weather", (req,res)=>{
    res.render("weather")
})

app.get("*", (req,res)=>{
    res.render("404err",{
        errorMsg: "Oop's!page not found. click here to go back"
    })

})


app.listen(port, (req,res)=>{
    console.log(`This port number ${port}`);
})