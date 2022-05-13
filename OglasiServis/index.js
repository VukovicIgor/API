var express=require("express");
var OglasiModul=require("../Oglasi-modul")
var app=express();
const port=3000

app.use(express.urlencoded({extended: false}));
app.use(express.json())

app.get("/",(request,response)=>{
    response.send("Server radi.")
})

app.get("/sviOglasi",(request,response)=>{
    response.send(OglasiModul.sviOglasi())
})

app.get("/dohvatiOglas/:id",(request,response)=>{
    response.send((OglasiModul.dohvatiOglas(request.params["id"])))
})

app.post("/dodajOglas", (request,response)=>{
    OglasiModul.dodajOglas(request.body)
    response.end("Uspesno.")
})

app.get("/izmenaOglasa/:id",(request,response)=>{
    OglasiModul.izmenaOglasa(OglasiModul.dohvatiOglas(request.params["id"]))
})

app.delete("/obrisiOglas/:id",(request,response)=>{
    OglasiModul.obrisiOglas(request.params["id"])
    response.end("Uspesno.")
})

app.get("/filterKategorija/:kategorija",(request,response)=>{
    response.send(OglasiModul.filterKategorija(request.params["kategorija"]))
})

app.listen(port,()=>{console.log(`Startovan server na portu ${port}`)})