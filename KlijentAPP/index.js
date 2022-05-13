const express = require("express");
const fs=require("fs");
const app = express();
const path = require('path');
const axios = require('axios');
const port = 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let procitajNaziv=(naziv)=>{
    return fs.readFileSync(path.join(__dirname+"/index/"+naziv+".html"),"utf-8")
}

app.get("/",(req,res)=>{
    res.send(procitajNaziv("index"));
});

app.get("/index",(req,res)=>{
    res.send(procitajNaziv("index"));
});

app.get("/brisanje/:id",(req,res)=>{
    axios.delete(`http://localhost:3000/obrisiOglas/${req.params["id"]}`)
    res.redirect("/")
})

app.get("/automobili",(req,res)=>{
    axios.get("http://localhost:3000/filterKategorija/Automobil")
    .then(response=>{
        let prikaz=""
        response.data.forEach(element => {
            prikaz+=`
            <div class="row mt-5">
                <div class="col-6 offset-3">
                    <div class="card">
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>${element.opis}</p>
                                <p style="text-align:end;">Cena:${element.cena.iznos}${element.cena.valuta}</p>
                                <p class="mb-0">Tagovi:</p>
                                <p style="margin-left: 5%; font-size: 15px;">${element.oznaka[0]} ${element.oznaka[1]} ${element.oznaka[2]} ${element.oznaka[3]} ${element.oznaka[4]} ${element.oznaka[5]}</p>
                                <br>
                                <footer class="blockquote-footer">Kontakt: <br><cite title="Source Title"><p  style="margin-left: 8%;">${element.email[0].mail}  ${element.email[0].tip} <br> ${element.email[1].mail}  ${element.email[1].tip} <br> ${element.email[2].mail}  ${element.email[2].tip}</p></cite></footer>
                            </blockquote>
                        </div>
                        <div class="card-header">
                            <ul style="margin: 0%;padding: 0%;">
                                <li style="display: inline;"><a href="/izmena/${element.id}">Izmeni</a></li>
                                <li style="display: inline; float: right;"><a href="/brisanje/${element.id}">Obrisi</a></li>
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>
        `
        })
        res.send(procitajNaziv("automobili").replace("#{data}",prikaz))
    })
    .catch(error => {
        console.log(error);
    })
})

app.get("/motori",(req,res)=>{
    axios.get("http://localhost:3000/filterKategorija/Motor")
    .then(response=>{
        let prikaz=""
        response.data.forEach(element => {
            prikaz+=`
            <div class="row mt-5">
                <div class="col-6 offset-3">
                    <div class="card">
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>${element.opis}</p>
                                <p style="text-align:end;">Cena:${element.cena.iznos}${element.cena.valuta}</p>
                                <p class="mb-0">Tagovi:</p>
                                <p style="margin-left: 5%; font-size: 15px; letter-spacing:10%;">${element.oznaka[0]} ${element.oznaka[1]} ${element.oznaka[2]} ${element.oznaka[3]} ${element.oznaka[4]} ${element.oznaka[5]}</p>
                                <br>
                                <footer class="blockquote-footer">Kontakt: <br><cite title="Source Title"><p  style="margin-left: 8%;">${element.email[0].mail}  ${element.email[0].tip} <br> ${element.email[1].mail}  ${element.email[1].tip} <br> ${element.email[2].mail}  ${element.email[2].tip}</p></cite></footer>
                            </blockquote>
                        </div>
                        <div class="card-header">
                            <ul style="margin: 0%;padding: 0%;">
                                <li style="display: inline;"><a href="/izmena/${element.id}">Izmeni</a></li>
                                <li style="display: inline; float: right;"><a href="/brisanje/${element.id}">Obrisi</a></li>
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>
        `
        })
        res.send(procitajNaziv("motori").replace("#{data}",prikaz))
    })
    .catch(error => {
        console.log(error);
    })
})

app.get("/nekretnine",(req,res)=>{
    axios.get("http://localhost:3000/filterKategorija/Nekretnina")
    .then(response=>{
        let prikaz=""
        response.data.forEach(element => {
            prikaz+=`
            <div class="row mt-5">
                <div class="col-6 offset-3">
                    <div class="card">
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>${element.opis}</p>
                                <p style="text-align:end;">Cena:${element.cena.iznos}${element.cena.valuta}</p>
                                <p class="mb-0">Tagovi:</p>
                                <p style="margin-left: 5%; font-size: 15px;">${element.oznaka[0]} ${element.oznaka[1]} ${element.oznaka[2]} ${element.oznaka[3]} ${element.oznaka[4]} ${element.oznaka[5]}</p>
                                <br>
                                <footer class="blockquote-footer">Kontakt: <br><cite title="Source Title"><p  style="margin-left: 8%;">${element.email[0].mail}  ${element.email[0].tip} <br> ${element.email[1].mail}  ${element.email[1].tip} <br> ${element.email[2].mail}  ${element.email[2].tip}</p></cite></footer>
                            </blockquote>
                        </div>
                        <div class="card-header">
                            <ul style="margin: 0%;padding: 0%;">
                                <li style="display: inline;"><a href="/izmena/${element.id}">Izmeni</a></li>
                                <li style="display: inline; float: right;"><a href="/brisanje/${element.id}">Obrisi</a></li>
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>
        `
        })
        res.send(procitajNaziv("nekretnine").replace("#{data}",prikaz))
    })
    .catch(error => {
        console.log(error);
    })
})

app.get("/novOglas",(req,res)=>{
    res.send(procitajNaziv("novOglas"));
})

app.post("/snimiOglas",(req,res)=>{
    axios.post("http://localhost:3000/dodajOglas",{
        id:0,
        kategorija:req.body.kategorija,
        datumIsteka:req.body.datum,
        cena:{
            iznos:req.body.cena,
            valuta:req.body.valuta
        },
        opis:req.body.opis,
        oznaka:[req.body.oznaka1,req.body.oznaka2,req.body.oznaka3,req.body.oznaka4,req.body.oznaka5,req.body.oznaka6],
        email:[{
            mail:req.body.mail1,
            tip:req.body.tipmaila1
        },
        {
            mail:req.body.mail2,
            tip:req.body.tipmaila2
        },
        {
            mail:req.body.mail3,
            tip:req.body.tipmaila3
        }]
    })
    res.redirect("/")
})

app.post("/snimiIzmenjenOglas",(req,res)=>{
    axios.post("http://localhost:3000/izmenaOglasa",{
        id:req.body.id,
        kategorija:req.body.kategorija,
        datumIsteka:req.body.datum,
        cena:{
            iznos:req.body.cena,
            valuta:req.body.valuta
        },
        opis:req.body.opis,
        oznaka:[req.body.oznaka1,req.body.oznaka2,req.body.oznaka3,req.body.oznaka4,req.body.oznaka5,req.body.oznaka6],
        email:[{
            mail:req.body.mail1,
            tip:req.body.tipmaila1
        },
        {
            mail:req.body.mail2,
            tip:req.body.tipmaila2
        },
        {
            mail:req.body.mail3,
            tip:req.body.tipmaila3
        }]
    })

    res.redirect("/")
})

app.get("/izmena/:id",(req,res)=>{
    axios.get(`http://localhost:3000/dohvatiOglas/${req.params["id"]}`)
    .then(response=>{
        let prikaz=""
        prikaz+=`
        <div class="container mb-5" id="forma">
        <input type="number" name="id" value=${response.data.id} hidden>
        <form action="/snimiIzmenjenOglas" name="forma" method="post">
            <label for="exampleInputPassword1" class="form-label">Vrsta oglasa:</label>
            <select class="form-select" id="vrstaoglasa" name="kategorija">
                <option selected value="${response.data.kategorija}">${response.data.kategorija}</option>
                <option value="Automobil">Automobil</option>
                <option value="Motor">Motor</option>
                <option value="Nekretnina">Nekretnina</option>
            </select>
            <div class="mb-3 mt-3">
                <label for="exampleFormControlTextarea1" class="form-label">Opis oglasa:</label>
                <textarea class="form-control" id="opisoglasa" rows="5" maxlength="180" placeholder="Opis mora da sadrži 10-180 karaktera." name="opis">${response.data.opis}</textarea>
            </div>
            <div class="mb-3 mt-3">
                <div class="row">
                    <div class="col-5">
                        <label for="exampleFormControlInput1" class="form-label">Datum isteka oglasa:</label>
                        <input type="date" class="form-control" id="datum" name="datum" value="${response.data.datumIsteka}">
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <div class="row">
                    <div class="col-5">
                        <label for="exampleFormControlInput1" class="form-label">Cena:</label>
                        <input type="text" class="form-control" id="cena" name="cena" value="${response.data.cena.iznos}">
                    </div>
                    <div class="col-3">
                        <label for="exampleFormControlInput1" class="form-label">Valuta:</label>
                        <select class="form-select" aria-label="Default select example" id="tipvalute" name="valuta">
                            <option selected value="${response.data.cena.valuta}">${response.data.cena.valuta}</option>
                            <option selected value="RSD">RSD</option>
                            <option value="EUR">EUR</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <div class="row">
                    <label for="exampleFormControlInput1" class="form-label">Oznake:</label>
                    <div class="col-2">
                        <input type="text" class="form-control" id="oznaka1" name="oznaka1" value="${response.data.oznaka[0]}">
                    </div>
                    <div class="col-2">
                        <input type="text" class="form-control oznaka" id="oznaka2" name="oznaka2" value="${response.data.oznaka[1]}">
                    </div>
                    <div class="col-2">
                        <input type="text" class="form-control oznaka" id="oznaka3" name="oznaka3" value="${response.data.oznaka[2]}">
                    </div>
                    <div class="col-2">
                        <input type="text" class="form-control oznaka" id="oznaka4" name="oznaka4" value="${response.data.oznaka[3]}">
                    </div>
                    <div class="col-2">
                        <input type="text" class="form-control oznaka" id="oznaka5" name="oznaka5" value="${response.data.oznaka[4]}">
                    </div>
                    <div class="col-2">
                        <input type="text" class="form-control oznaka" id="oznaka6" name="oznaka6"  value="${response.data.oznaka[5]}">
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <div class="row">
                    <div class="col-9">
                        <label for="exampleFormControlInput1" class="form-label">Email adresa prodavca:</label>
                        <input type="email" class="form-control" id="unosmail1" placeholder="PetarPetrović@primer.com" name="mail1" value="${response.data.email[0].mail}">
                    </div>
                    <div class="col-3">
                        <label for="exampleFormControlInput1" class="form-label">Tip emaila:</label>
                        <select class="form-select" aria-label="Default select example" id="tipmaila1" name="tipmaila1">
                            <option selected value="${response.data.email[0].tip}">${response.data.email[0].tip}</option>
                            <option value="Privatan">Privatan</option>
                            <option value="Službeni">Službeni</option>
                        </select>
                    </div>
                    <a href="#" class="mt-3" id="dodajmail2">Dodaj još jednu email adresu:</a>
                </div>
                <div class="row mt-2" id="mail2">
                    <div class="col-9">
                        <label for="exampleFormControlInput2" class="form-label">Email adresa prodavca:</label>
                        <input type="email" class="form-control" id="unosmail2" placeholder="PetarPetrović@primer.com"  name="mail2" value="${response.data.email[1].mail}">
                    </div>
                    <div class="col-3">
                        <label for="exampleFormControlInput1" class="form-label">Tip emaila:</label>
                        <select class="form-select" aria-label="Default select example" id="tipmaila2" name="tipmaila2">
                            <option selected value="${response.data.email[1].tip}">${response.data.email[1].tip}</option>
                            <option value="Privatan">Privatan</option>
                            <option value="Službeni">Službeni</option>
                        </select>
                    </div>
                    <a href="#" class="mt-3" id="obrisimail2">Obriši mail:</a>
                    <a href="#" class="mt-3" id="dodajmail3">Dodaj još jednu email adresu:</a>
                </div>
                <div class="row mt-2" id="mail3">
                    <div class="col-9">
                        <label for="exampleFormControlInput1" class="form-label">Email adresa prodavca:</label>
                        <input type="email" class="form-control" id="unosmail3" placeholder="PetarPetrović@primer.com" name="mail3" value="${response.data.email[2].mail}">
                    </div>
                    <div class="col-3">
                        <label for="exampleFormControlInput1" class="form-label">Tip emaila:</label>
                        <select class="form-select" aria-label="Default select example" id="tipmaila3" name="tipmaila3">
                            <option selected value="${response.data.email[2].tip}">${response.data.email[2].tip}</option>
                            <option value="Privatan">Privatan</option>
                            <option value="Službeni">Službeni</option>
                        </select>
                    </div>
                </div>
                <a href="#" class="mt-3" id="obrisimail3">Obriši mail:</a>
            </div>
            <button class="btn btn-primary" type="submit" onclick="return Validacija()">Izmeni oglas</button>
          </form>
    </div>
        `
    res.send(procitajNaziv("izmena").replace("#{data}",prikaz))
    })
    .catch(error => {
        console.log(error);
    })
})

app.listen(port,()=>{console.log(`klijent na portu ${port}`)});