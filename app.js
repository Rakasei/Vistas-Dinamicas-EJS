const express = require("express")
const app = express()
const port = 3030;
const mainRoutes = require('./routers/mainRoutes')


app.use(express.static('public'))


app.set("view engine", "ejs");

app.use('/', mainRoutes)




app.listen(port, () => {
    console.log(` Servidor funcionando en: http://localhost:${port}`);
    });

