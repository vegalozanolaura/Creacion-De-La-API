const express = require('express');
const routerApi = require("./routes")


const app = express();
const port = 3000

app.get("/",(req, res) => {
  res.send("Hola Mundo")
})

app.get("/patitofeliz",(req, res)=> {
res.send("Patito feliz")
})

routerApi(app)

app.listen(port, ()=> {
  console.log("Mi puerta es" + port)
})

