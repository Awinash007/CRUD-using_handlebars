const express = require("express")
const Router = require("./routes/index")

const hbs=require("hbs")
const app = express()
const port = 8000

app.set("view engine", "hbs")

app.use(express.static("./views/static"))
//use this line set path of static folder which contains css or public

hbs.registerPartials("./views/partials")
require("./db_connect")
app.use("", Router)
app.listen(8000, console.log(`Server Runnig On http://localhost:${port}`))