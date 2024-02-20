const express = require("express")
const app = express()
const path = require("path");
const mainRoutes = require('./routers/mainRoutes')


app.use(express.static('public'))
app.set("views", path.join(__dirname,"views"));

app.set("view engine", "ejs");

app.use('/', mainRoutes)






app.listen(3000, () => {
    console.log("Servidor funcionando en: http://localhost:3000/");
    });

