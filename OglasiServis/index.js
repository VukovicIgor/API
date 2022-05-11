const { response } = require("express");
var express=require("express")
var OglasiServis=require("../Oglasi-modul")
var app=express();
const port=3000

app.use(express.urlencoded({extended: false}));
app.use(express.json())

app.get("/", (request,response)=>{
    response.send("Server radi")
})

app.get("/sviOglasi",(request,response)=>{
    response.send(OglasiServis.sviOglasi())
    
})

app.listen(port,()=>{console.log(`Startovan server na portu ${port}`)})