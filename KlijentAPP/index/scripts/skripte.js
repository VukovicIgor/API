function Validacija() {
    let vrstaOglasa = document.getElementById("vrstaoglasa").value;
    let opisOglasa = document.getElementById("opisoglasa").value.length;
    let Cena=document.getElementById("cena").value
    let o1=document.getElementById("oznaka1").value
    let patern="/\S+@\S+\.\S+/"
    let e1=document.getElementById("unosmail1").value
    let e2=document.getElementById("unosmail2").value
    let e3=document.getElementById("unosmail3").value
    let tipE1=document.getElementById("tipmaila1").value
    let tipE2=document.getElementById("tipmaila2").value
    let tipE3=document.getElementById("tipmaila3").value
    
    if(e1.length==0 || tipE1==0){
        alert("Morate uneti email i izabrati tip za prvi email.")
        return false
    }
    if(!(patern.test(e1))){
        alert("Niste uneli odgovarajući prvi email.")
        return false
    }
    if(e1.length>0 && (e2.length>0 || tipE2==0)){
        alert("Morate uneti email i izabrati tip za drugi email.")
        return false
    }
    if(!(patern.test(e2))){
        alert("Niste uneli odgovarajući treći email.")
        return false
    }
    if(e1.length>0 && e2.length>0 && e3.length>0 && tipE3==0){
        alert("Morate uneti email i izabrati tip za treći email.")
        return false
    }
    if(!(patern.test(e3))){
        alert("Niste uneli odgovarajući treći email.")
        return false
    }
}
