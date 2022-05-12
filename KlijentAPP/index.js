const express = require("express");
const fs=require("fs");
const app = express();
const path = require('path');
const axios = require('axios');
const port = 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(__dirname+"/index"))

let procitajNaziv=(naziv)=>{
    return fs.readFileSync(path.join(__dirname+"/index/"+naziv+".html"),"utf-8")
}

app.get("/",(req,res)=>{
    res.send(procitajNaziv("index"));
});

app.listen(port,()=>{console.log(`klijent na portu ${port}`)});