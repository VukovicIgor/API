var express=require("express");
var OglasiServis=require("../Oglasi-modul")
var app=express();
const port=3000

app.use(express.urlencoded({extended: false}));
app.use(express.json())

app.get("/",(request,response)=>{
    response.send("Server radi.")
})

app.get("/sviOglasi",(request,response)=>{
    response.send(OglasiServis.sviOglasi())
})

app.post("/dodajOglas", (request,response)=>{
    OglasiServis.dodajOglas(request.body)
    response.end("Uspesno.")
})

app.put("/izmenaOglasa/:id",(request,response)=>{
    OglasiServis.izmenaOglasa(request.params["id"])
    response.end("Uspesno.")
})

app.delete("/obrisiOglas/:id",(request,response)=>{
    OglasiServis.obrisiOglas(request.params["id"])
    response.end("Uspesno.")
})

app.get("/filterKategorija",(request,response)=>{
    OglasiServis.filterKategorija(request.query["kategorija"])
})

app.listen(port,()=>{console.log(`Startovan server na portu ${port}`)})