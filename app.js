const express = require("express")
const app = express()
const indexRoutes = require('./routers/main')


app.use(express.static('public'))
app.use('/', indexRoutes)



app.set("view engine", "ejs");


app.listen(3000, ()=>{
    console.log("Servidor funcionando en: http://localhost:3000/");
    });

