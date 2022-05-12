const fs= require("fs");
const putanja="oglasi.json";

let procitajPodatke=()=>{
    let oglasi=fs.readFileSync(putanja,(err,data)=>{
        if(err) throw err;
        return data;
    });
    return JSON.parse(oglasi)
}

let snimanje=(oglasi)=>{
    fs.writeFileSync(putanja,JSON.stringify(oglasi))
}

exports.sviOglasi=()=>{
    return procitajPodatke();
}

exports.dodajOglas=(novOglas)=>{
    let id=1
    let oglasi=this.sviOglasi();
    if(oglasi.length>0){
        id=oglasi[oglasi.length-1].id+1
    }
    novOglas.id=id
    oglasi.push(novOglas)
    snimanje(oglasi)
}

exports.izmenaOglasa = (oglas) => {
    this.oglasi[this.oglasi.findIndex(o => o.id == oglas.id)] = oglas
}

//exports.dohvatiOglas=(id)=>{
//    return this.sviOglasi().find(x=>x.id==id)
//}

exports.obrisiOglas=(id)=>{
    snimanje(this.sviOglasi().filter(oglas=>oglas.id!=id))
}

exports.filterKategorija=(kategorija)=>{
    return this.sviOglasi().filter(oglas=>oglas.kategorija==kategorija)
}