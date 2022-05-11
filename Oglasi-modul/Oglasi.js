const fs= require("fs");
const putanja="oglasi.json";

let procitajPodatke=()=>{
    let oglasi=fs.readFileSync(putanja,(err,data)=>{
        if(err) throw err;
        return data;
    });
    return JSON.parse(oglasi)
}

let snimanje=(data)=>{
    return procitajPodatke();
}

exports.sviOglasi=()=>{
    return procitajPodatke();
}

exports.dodajOglas=(novOglas)=>{
    let id=1
    let oglasi=this.oglasi();
    if(oglasi.length>0){
        id=oglasi[oglasi.length-1].id+1
    }
    //ZAVRSI
}

exports.dohvatiOglas=(id)=>{
    return this.sviOglasi().find(x=>x.id==id)
}

exports.obrisiOglas=(id)=>{
    snimanje(this.sviOglasi().filter(oglas))
}

exports.filtrirajPoKategoriji=(kategorija)=>{
    return this.sviOglasi().filter(oglas=>oglas.kategorija==kategorija)
}